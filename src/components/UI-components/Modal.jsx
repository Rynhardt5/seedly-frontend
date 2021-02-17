import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearMessage } from '../../redux/actions/modalActions';
import { CSSTransition } from 'react-transition-group';
import './Modal.scss';

const Modal = () => {
  const message = useSelector((state) => state.message);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      return setShowModal(true);
    }

    return setShowModal(false);
  }, [message]);

  if (!message) {
    return <div className="display-none"></div>;
  }

  const closeModal = () => {
    dispatch(clearMessage());
  };

  return (
    <CSSTransition in={showModal} timeout={200} classNames="modal">
      <div className="modal-overlay" onClick={closeModal}>
        <div className="default-modal">
          <h4 className="default-modal__header">Message</h4>
          <p className="default-modal__text">{message}</p>
          <div className="default-modal__button-container">
            <button onClick={closeModal} className="default-modal__button">
              Okay
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
