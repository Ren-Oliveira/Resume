import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
import { useTheme } from '../../../store/ThemeContext';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faComment, faCheck } from '@fortawesome/free-solid-svg-icons';
import 'bulma/css/bulma.min.css';

const sendEmail = e => {
  emailjs.sendForm(
    'service_s92284g',
    'template_98n95ul',
    e.target,
    'jfhtJUermqd7n8AC3'
  );

  e.target.reset();
};

const MessageMe = () => {
  const [message, setMessage] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isMessageValid, setIsMessageValid] = useState(false);
  const [successSubmit, setSuccessSubmit] = useState(false);
  const [isIncomplete, setIsIncomplete] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const modalRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const theme = useTheme();

  const textLight = ' has-text-success';
  const textDark = ' has-text-danger-dark';
  const colorLight = ' is-success';
  const colorDark = ' is-danger';
  const title = 'subtitle has-text-centered has-text-weight-semibold';
  const titleLight = title + textLight;
  const titleDark = title + textDark;
  const btnLight = 'button ' + colorLight;
  const btnDark = 'button has-text-dark' + colorDark;
  const inputLight = 'input mb-3' + colorLight;
  const inputDark = 'input mb-3' + colorDark;
  const textAreaLight = 'textarea mb-3' + colorLight;
  const textAreaDark = 'textarea mb-3' + colorDark;

  const ternaryIcon = theme ? 'fas has-text-dark' : 'fas has-text-white';

  const submitHandler = e => {
    e.preventDefault();
    if (!isEmailValid || !isNameValid || !isMessageValid) {
      setIsIncomplete(true);
      return;
    }

    sendEmail(e);
    setSuccessSubmit(true);
    setTimeout(() => {
      setTimeout(() => {
        setSuccessSubmit(false);
      }, 700);
      closeModalHandler();
    }, 1500);
    clearData();
  };

  const validateNameHandler = () => {
    setIsTouched(true);
    setIsIncomplete(false);
    const addedName = nameRef.current.value;
    if (addedName.length === 0) setIsTouched(false);
    if (addedName.trim().length < 3) setIsNameValid(false);
    if (addedName.trim().length >= 3) {
      setIsNameValid(true);
      setMessage({ ...message, name: addedName });
    }
  };

  const validateMessageHandler = () => {
    setIsTouched(true);
    setIsIncomplete(false);
    const addedText = messageRef.current.value;
    if (addedText.trim().length < 5) setIsMessageValid(false);
    if (addedText.trim().length > 4) {
      setIsMessageValid(true);
      setMessage({ ...message, text: addedText });
    }
  };

  const validateEmailHandler = () => {
    setIsIncomplete(false);
    const addedEmail = emailRef.current.value;
    const mailRGX = /^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/;

    if (!addedEmail.match(mailRGX));
    setIsEmailValid(false);
    setIsTouched(true);

    if (addedEmail.match(mailRGX)) {
      setIsEmailValid(true);
      setMessage({ ...message, email: addedEmail });
    }
  };

  const clearData = () => {
    messageRef.current.value = '';
    emailRef.current.value = '';
    nameRef.current.value = '';
    setIsMessageValid(false);
    setIsEmailValid(false);
    setIsIncomplete(false);
    setIsNameValid(false);
    setIsTouched(false);
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
    if (e.keyCode === 27) closeModalHandler();
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
            <Icon icon={faComment} className={ternaryIcon} />
          </span>
          <span className="has-text-weight-semibold">Message me</span>
        </button>
      </div>

      <div className="modal" ref={modalRef}>
        <div className="modal-background" onClick={closeModalHandler} />
        <div className="modal-content">
          <form
            className="control box m-6 has-background-white-ter"
            onSubmit={submitHandler}
            method="dialog"
          >
            <div className={!theme ? titleLight : titleDark}>
              {successSubmit && 'Message sent!'}
              {!successSubmit && 'Leave a message'}
            </div>
            {isTouched && isIncomplete && (
              <>
                <p className="subtitle is-size-6 has-text-centered has-text-info-dark">
                  <strong> Please fill in all fields correctly!</strong>
                </p>
              </>
            )}

            {!successSubmit && (
              <>
                <div className="control has-icons-right">
                  <input
                    type="text"
                    className={!theme ? inputLight : inputDark}
                    placeholder="Enter your name"
                    ref={nameRef}
                    onChange={validateNameHandler}
                    name="name"
                  />
                  <span className="icon is-small is-right">
                    {isNameValid && <Icon icon={faCheck} />}
                  </span>
                </div>
                <div className="control has-icons-right">
                  <input
                    type="email"
                    className={!theme ? inputLight : inputDark}
                    placeholder="Enter your email"
                    ref={emailRef}
                    onChange={validateEmailHandler}
                    name="email"
                  />
                  <span className="icon is-small is-right">
                    {isEmailValid && <Icon icon={faCheck} />}
                  </span>
                </div>

                <div className="control has-icons-right">
                  <textarea
                    className={!theme ? textAreaLight : textAreaDark}
                    style={{ minHeight: '15%' }}
                    rows="2"
                    ref={messageRef}
                    placeholder="Enter your message"
                    onChange={validateMessageHandler}
                    name="message"
                  />
                  <span className="icon is-small is-right">
                    {isMessageValid && <Icon icon={faCheck} />}
                  </span>
                </div>

                <footer className="field is-grouped is-grouped-centered">
                  <div className="control">
                    <button
                      type="submit"
                      className={!theme ? btnLight : btnDark}
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
