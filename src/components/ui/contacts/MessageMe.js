import { useState, useRef } from 'react';
import { useTheme } from '../../../store/ThemeContext';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import 'bulma/css/bulma.min.css';

/// REFINE CODE;
/// sent to firebase

const MessageMe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isMessageValid, setIsMessageValid] = useState(false);
  const [message, setMessage] = useState({});
  const [successSubmit, setSuccessSubmit] = useState(false);

  const modalRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

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
    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredText = messageRef.current.value;

    const mailRGX =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (enteredName.trim().length >= 3) setIsNameValid(true);
    if (enteredEmail.match(mailRGX)) setIsEmailValid(true);
    if (enteredText.length >= 4) setIsMessageValid(true);

    if (isEmailValid && isNameValid && isMessageValid)
      setMessage({ email: enteredEmail, name: enteredName, text: enteredText });
    console.log(message);
    setSuccessSubmit(true);

    setTimeout(() => {
      setTimeout(() => {
        setSuccessSubmit(false);
      }, 700);
      closeModalHandler();
    }, 1500);

    clearData();
  };

  const clearData = () => {
    setIsEmailValid(false);
    setIsMessageValid(false);
    setIsNameValid(false);
    nameRef.current.value = '';
    emailRef.current.value = '';
    messageRef.current.value = '';
    setMessage({});
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
              {successSubmit && 'Message sent!'}
              {!successSubmit && 'Leave a message'}
            </div>
            {!successSubmit && (
              <>
                <input
                  type="text"
                  className={!theme ? inputLight : inputDark}
                  placeholder="Enter your name"
                  ref={nameRef}
                />
                <input
                  type="email"
                  className={!theme ? inputLight : inputDark}
                  placeholder="Enter your email"
                  ref={emailRef}
                />
                <textarea
                  className={!theme ? textAreaLight : textAreaDark}
                  style={{ minHeight: '15%' }}
                  rows="2"
                  ref={messageRef}
                  placeholder="Enter your message"
                />

                <footer className="field is-grouped is-grouped-centered">
                  <div className="control">
                    <button
                      type="submit"
                      className={!theme ? btnLight : btnDark}
                      // disabled={
                      //   !isEmailValid && !isNameValid && !isMessageValid
                      // }
                    >
                      Submit
                    </button>
                  </div>
                  <div className="control">
                    <button className="button" onClick={closeModalHandler}>
                      Close
                    </button>
                  </div>
                </footer>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default MessageMe;
