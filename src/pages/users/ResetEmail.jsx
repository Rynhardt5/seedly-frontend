import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { resetPasswordByEmail } from '../../redux/actions/userActions';
import { setMessage } from '../../redux/actions/modalActions';
import { Link } from 'react-router-dom';

const ResetEmail = () => {
  const { register, handleSubmit, errors } = useForm();
  const passwordResetValid = useSelector(
    (state) => state.user.passwordResetValid
  );
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  const onSubmit = (email) => {
    dispatch(resetPasswordByEmail(email));
  };

  useEffect(() => {
    if (passwordResetValid) {
      dispatch(
        setMessage({
          message:
            'Please check your email and follow the link to reset your password',
        })
      );
    }
  }, [dispatch, passwordResetValid]);

  if (isAuth || passwordResetValid) {
    return <Redirect to="/seeds" />;
  }

  return (
    <div className="form-container">
      <form className="default-form" onSubmit={handleSubmit(onSubmit)}>
        <h4 className="default-form__heading">
          Enter your email to reset password
        </h4>
        <div className="default-form__input-group">
          <input
            type="text"
            name="email"
            placeholder="Your email"
            ref={register({
              required: true,
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && <span>Please enter a valid email</span>}
        </div>

        <input
          className="default-form__submit-button"
          type="submit"
          value="Reset password"
        />

        <div className="default-form__footer">
          <div>
            <Link to="/login">Go back to login form</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetEmail;
