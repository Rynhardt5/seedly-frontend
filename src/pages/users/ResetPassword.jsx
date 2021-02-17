import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../redux/actions/userActions';
import { setMessage } from '../../redux/actions/modalActions';

const ResetPassword = () => {
  const { token, userId } = useParams();
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);

  const onSubmit = ({ password }) => {
    dispatch(resetPassword({ token, userId, password }));
  };

  if (isAuth) {
    dispatch(setMessage({ message: 'Password updated succesfully' }));
    return <Redirect to="/seeds" />;
  }

  return (
    <div className="form-container">
      <form className="default-form" onSubmit={handleSubmit(onSubmit)}>
        <h4 className="default-form__heading">
          Enter a new password for your account
        </h4>
        <div className="default-form__input-group">
          <input
            type="password"
            name="password"
            placeholder="Your password"
            ref={register({ minLength: 6, required: true })}
          />
          {errors.password && (
            <span>Please enter a password, must be 6 characters long</span>
          )}
        </div>

        <div className="default-form__input-group">
          <input
            type="password"
            name="passwordConfirmation"
            placeholder="re-enter your password"
            ref={register({ minLength: 6, required: true })}
          />
          {watch('password') !== watch('passwordConfirmation') && (
            <span>Passwords doesn't match</span>
          )}
        </div>
        <input
          className="default-form__submit-button"
          type="submit"
          value="Update password"
        />
      </form>
    </div>
  );
};

export default ResetPassword;
