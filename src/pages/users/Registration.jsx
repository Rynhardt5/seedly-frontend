import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/actions/userActions";
import { setMessage } from "../../redux/actions/modalActions";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import InputGroup from "../../components/form-components/InputGroup";
import SubmitButton from "../../components/form-components/SubmitButton";

const Registration = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  const onSubmit = ({ name, email, password, passwordConfirmation }) => {
    if (password === passwordConfirmation) {
      dispatch(registerUser({ name, email: email.toLowerCase(), password }));
    } else {
      dispatch(
        setMessage({
          message:
            "The passwords entered should match, please make sure they do",
        })
      );
    }
  };

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <div className="form-container">
      <form className="default-form" onSubmit={handleSubmit(onSubmit)}>
        <h4 className="default-form__heading">Register</h4>
        <InputGroup
          name="name"
          type="text"
          placeholder="Your name"
          register={register({ required: true })}
          errors={errors}
          errorMessage="Please enter your name"
        />
        <InputGroup
          name="email"
          type="text"
          placeholder="Your email"
          register={register({
            required: true,
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
          errors={errors}
          errorMessage="Please enter a valid email"
        />
        <InputGroup
          name="password"
          type="password"
          placeholder="Your password"
          register={register({ minLength: 6, required: true })}
          errors={errors}
          errorMessage="Please enter a password, must be 6 characters long"
        />

        <div className="default-form__input-group">
          <input
            type="password"
            name="passwordConfirmation"
            placeholder="re-enter your password"
            ref={register({ minLength: 6, required: true })}
          />
          {watch("password") !== watch("passwordConfirmation") && (
            <span>Passwords doesn't match</span>
          )}
        </div>

        <SubmitButton text="Sign up" />

        <div className="default-form__footer">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Registration;
