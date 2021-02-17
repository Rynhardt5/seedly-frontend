import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createSeed } from "../../redux/actions/seedActions";
import { Redirect } from "react-router-dom";
import { setMessage } from "../../redux/actions/modalActions";

import "./CreateSeed.scss";

const CreateProduct = () => {
  const { register, handleSubmit, errors } = useForm();
  const fileSelector = useRef(null);
  const isAuth = useSelector((state) => state.user.isAuth);
  const seedItem = useSelector((state) => state.seed.item);
  const [imgUrl, setImgUrl] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // console.log(data, imgFile);
    dispatch(createSeed(data, imgFile));
  };

  const onSelectPhoto = () => {
    fileSelector.current.click();
  };

  const uploadPhoto = (e) => {
    if (e.target.files) {
      setImgFile(e.target.files[0]);

      setImgUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  if (seedItem) {
    return <Redirect to="/seeds" />;
  }

  if (!isAuth) {
    dispatch(
      setMessage({
        message:
          "User must be loged in to add products, please log in and try again",
      })
    );
    return <Redirect to="/login" />;
  }

  return (
    <div className="form-container">
      <form
        className="default-form create-seed"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h4 className="create-seed__form-heading">Add a seeds to plant</h4>
        <div className="create-seed__row">
          <div className="create-seed__col-2">
            <div className="default-form__input-group">
              <input
                name="name"
                placeholder="Plant name"
                ref={register({ required: true })}
              />
              {errors.name && <span>Please enter a the plants name</span>}
            </div>
            <div className="default-form__input-group">
              <input
                name="scientificName"
                placeholder="Scientific name"
                ref={register({ required: true })}
              />
              {errors.scientificName && (
                <span>Please enter a the plants scientific name</span>
              )}
            </div>
            <div className="default-form__input-group">
              <input
                name="price"
                placeholder="12.99"
                ref={register({ required: true })}
              />
              {errors.price && <span>Please enter a price</span>}
            </div>
            <div className="default-form__input-group">
              <input
                name="size"
                placeholder="40 Seeds"
                ref={register({ required: true })}
              />
              {errors.size && <span>Please enter the package size</span>}
            </div>
          </div>
          <div
            className="create-seed__col-2"
            style={{ marginBottom: "1.2rem" }}
          >
            <input
              onChange={uploadPhoto}
              type="file"
              className="create-seed__image-picker__file"
              ref={fileSelector}
            ></input>
            {imgUrl ? (
              <img
                onClick={onSelectPhoto}
                className="create-seed__image"
                src={imgUrl}
                alt=""
              />
            ) : (
              <div className="create-seed__image-picker">
                <button
                  onClick={onSelectPhoto}
                  type="button"
                  className="create-seed__image-picker__btn"
                >
                  Select Photo
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="default-form__input-group">
          <textarea
            name="description"
            placeholder="Awesome info to share"
            cols="30"
            rows="10"
            ref={register({ required: true })}
          ></textarea>
          {errors.description && (
            <span className="description-error">
              Please enter a description of plant
            </span>
          )}
        </div>

        <input
          className="default-form__submit-button"
          type="submit"
          value="Upload Seed"
        />
      </form>
    </div>
  );
};

export default CreateProduct;
