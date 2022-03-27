import { useTheme } from '../store/ThemeContext';

import 'bulma/css/bulma.min.css';
import ContactsCard from '../components/ui/contacts/ContactsCard';
import MessageMe from '../components/ui/contacts/MessageMe';

const Contacts = () => {
  const darkTheme = useTheme();

  const classDark = 'has-background-black-ter';
  const classLight = 'has-background-danger-light';

  return (
    <div className={darkTheme ? classDark : classLight}>
      <div className="hero is-fullheight">
        <div className="hero-body">
          <div className="container mt-5">
            <div className="columns">
              <div className="column is-one-third">
                <ContactsCard />
                <MessageMe />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
