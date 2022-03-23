import { useTheme } from '../store/ThemeContext';

import 'bulma/css/bulma.min.css';
import ContactsCard from '../components/ui/resume/ContactsCard';

const Contacts = () => {
  const darkTheme = useTheme();

  const classDark = 'has-background-black-ter';
  const classLight = 'has-background-danger-light';

  const textDark = 'has-text-danger-light has-text-centered p-2';
  const textLight = 'has-text-success-dark has-text-centered p-2';

  return (
    <div className={darkTheme ? classDark : classLight}>
      <div className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="mt-5">
              <ContactsCard />
            </div>
            <p className={darkTheme ? textDark : textLight}>Leave a message</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
