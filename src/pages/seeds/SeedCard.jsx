import React from "react";
// import { useDispatch } from "react-redux";
// import { addSeedToCart } from "../../redux/actions/seedActions";

const SeedCard = ({ seed }) => {
  // const dispatch = useDispatch();

  // const handleOnClick = () => {
  //   dispatch(addSeedToCart(seed.id));
  // };

  return (
    <div className="show-products__item">
      <img
        className="show-products__item__img"
        src={`${seed.imageUrl}`}
        alt=""
      />
      <div className="show-products__item__footer">
        <h5 className="show-products__item__name">{seed.name}</h5>
        <h5 className="show-products__item__scientific-name">
          {seed.scientificName}
        </h5>

        {/* <div className="show-products__item__info-group">
          <div>
            <h3 className="show-products__item__price">
              $ {seed.price.toFixed(2)}
            </h3>
            <h5 className="show-products__item__packet-size">{seed.size}</h5>
          </div>
          <div className="show-products__item__button-box">
            <button
              onClick={handleOnClick}
              className="show-products__item__card-btn"
            >
              Add to cart
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SeedCard;
