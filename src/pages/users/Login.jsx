import React, { useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { logUserIn } from "../../redux/actions/userActions";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import InputGroup from "../../components/form-components/InputGroup";
import SubmitButton from "../../components/form-components/SubmitButton";

import "./FormStyles.scss";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    setLoading(true);
  }, []);

  const onSubmit = ({ email, password }) => {
    dispatch(logUserIn({ email: email.toLowerCase(), password }));
  };

  if (isAuth) {
    return <Redirect to="/seeds" />;
  }

  return (
    <div className="form-container">
      <CSSTransition in={loading} timeout={500} classNames="render-form">
        <form className="default-form" onSubmit={handleSubmit(onSubmit)}>
          <h4 className="default-form__heading">Sign in</h4>
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
            register={register({ required: true })}
            errors={errors}
            errorMessage="Please enter your password"
          />

          <SubmitButton text="Log in" />

          <div className="default-form__footer">
            <div>
              Don't have an account? <Link to="/register">Sign up</Link>
            </div>
            <div className="default-form__or">or</div>
            <div>
              Forgot your password?{" "}
              <Link to="/password/reset">Reset password</Link>
            </div>
          </div>
        </form>
      </CSSTransition>
    </div>
  );
};

export default Login;
