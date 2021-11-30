import React from 'react';
import '../styles/Modal.css';
import PropTypes from 'prop-types';

const Modal = function ({ open, close, message }) {
  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <main>{message}</main>
          <footer>
            <button type="button" className="close" onClick={close}>
              {' '}
              close{' '}
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default Modal;
