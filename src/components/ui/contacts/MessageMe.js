import { useState, useRef } from 'react';
import { useTheme } from '../../../store/ThemeContext';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import 'bulma/css/bulma.min.css';

const MessageMe = () => {
  const [isMessageValid, setIsMessageValid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalRef = useRef();

  const theme = useTheme();

  const textLight = ' has-text-success';
  const textDark = ' has-text-danger';
  const colorLight = ' is-success';
  const colorDark = ' is-danger';
  const title = 'subtitle has-text-centered has-text-weight-semibold';
  const titleLight = title + textLight;
  const titleDark = title + textDark;
  const btnLight = 'button' + colorLight;
  const btnDark = 'button' + colorDark;
  const inputLight = 'input mb-3' + colorLight;
  const inputDark = 'input mb-3' + colorDark;
  const textAreaLight = 'textarea mb-3' + colorLight;
  const textAreaDark = 'textarea mb-3' + colorDark;

  const submitHandler = e => {
    e.preventDefault();
    setIsMessageValid(true);
    if (isMessageValid) return;
  };

  const openModalHandler = () => {
    setIsModalOpen(true);
    modalRef.current.classList.add('is-active');
  };

  const closeModalHandler = () => {
    if (!isModalOpen) return;
    modalRef.current.classList.remove('is-active');
    setIsModalOpen(false);
  };

  document.addEventListener('keydown', event => {
    const e = event || window.event;
    if (e.keyCode === 27) {
      closeModalHandler();
    }
  });

  return (
    <>
      <div className="field is-grouped is-grouped-centered mt-4">
        <button
          className={!theme ? btnLight : btnDark}
          data-target="modal-message"
          onClick={openModalHandler}
        >
          <span className="icon is-small">
            <Icon icon={faComment} />
          </span>
          <span className="has-text-weight-semibold">Message me</span>
        </button>
      </div>

      <div className="modal" ref={modalRef}>
        <div className="modal-background" />
        <div className="modal-content">
          <form
            className="control box m-6 has-background-danger-light"
            onSubmit={submitHandler}
            method="dialog"
          >
            <div className={!theme ? titleLight : titleDark}>
              Leave a message
            </div>
            <input
              type="text"
              className={!theme ? inputLight : inputDark}
              placeholder="Enter your name"
            />
            <input
              type="text"
              className={!theme ? inputLight : inputDark}
              placeholder="Enter your email"
            />
            <textarea
              className={!theme ? textAreaLight : textAreaDark}
              style={{ minHeight: '15%' }}
              rows="2"
              placeholder="Enter your message"
            />

            <footer className="field is-grouped is-grouped-centered">
              <div className="control">
                <button type="submit" className={!theme ? btnLight : btnDark}>
                  Submit
                </button>
              </div>
              <div className="control">
                <button className="button" onClick={closeModalHandler}>
                  Close
                </button>
              </div>
            </footer>
          </form>
        </div>
      </div>
    </>
  );
};

export default MessageMe;
