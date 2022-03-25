import { useTheme } from '../../../store/ThemeContext';
// import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import 'bulma/css/bulma.min.css';
import { useState } from 'react';

const MessageMe = () => {
  const [isMessageValid, setIsMessageValid] = useState(false);

  const theme = useTheme();

  const submitHandler = e => {
    e.preventDefault();
    setIsMessageValid(true);
    if (isMessageValid) return;
  };

  const btnLight = 'button is-success';
  const btnDark = 'button is-danger';

  const titleLight = 'subtitle has-text-centered has-text-success-dark';
  const titleDark = 'subtitle has-text-centered has-text-danger-dark';

  const inputLight = 'input mb-3 is-success';
  const inputDark = 'input mb-3 is-danger';
  const textAreaLight = 'textarea mb-3 is-success';
  const textAreaDark = 'textarea mb-3 is-danger';
  const formLight = 'control box m-6 has-background-danger-light';
  const formDark = 'control box m-6 has-background-black-ter';

  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('#modal-message');
    const openModalBtn = document.querySelector('#modal-trigger');

    const openModal = () => modal.classList.add('is-active');
    const closeModal = () => modal.classList.remove('is-active');

    openModalBtn.addEventListener('click', () => openModal(modal));

    (document.querySelectorAll('.modal-background, #closeModal') || []).forEach(
      $close => {
        const $target = $close.closest('.modal');
        $close.addEventListener('click', () => {
          closeModal($target);
        });
      }
    );

    document.addEventListener('keydown', event => {
      const e = event || window.event;
      if (e.keyCode === 27) {
        closeModal();
      }
    });
  });

  return (
    <>
      <div className="field is-grouped is-grouped-centered mt-6">
        <button
          id="modal-trigger"
          className={!theme ? btnLight : btnDark}
          data-target="modal-message"
        >
          Message me
        </button>
      </div>
      <div id="modal-message" className="modal">
        <div className="modal-background"></div>

        <div className="modal-content">
          <form
            className={!theme ? formLight : formDark}
            onSubmit={submitHandler}
            method="dialog"
          >
            <div className={!theme ? titleLight : titleDark}> Message me</div>
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
              rows="2"
              placeholder="Enter your message"
            />

            <footer className="modal-card-foot">
              <button type="submit" className={!theme ? btnLight : btnDark}>
                Submit
              </button>
              <button id="closeModal" className="button">
                Close
              </button>
            </footer>
          </form>
        </div>
      </div>
    </>
  );
};

export default MessageMe;
