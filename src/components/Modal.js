import React from 'react';
import '../styles/Modal.css';
import PropTypes from 'prop-types';

const Modal = ({ open, close, message }) => {
  console.log('모달렌더');
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          {/* <header>
            {header}
            <button type="button" className="close" onClick={close}>
              {' '}
              &times;{' '}
            </button>
          </header> */}
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
