import { useTheme } from '../store/ThemeContext';

import 'bulma/css/bulma.min.css';
import ContactsCard from '../components/ui/resume/ContactsCard';

const Contacts = props => {
  const darkTheme = useTheme();
  const classDark = 'has-background-black-ter';
  const classLight = 'has-background-danger-light';

  return (
    <div className={darkTheme ? classDark : classLight}>
      <div className="hero is-fullheight">
        <div className="hero-body">
          <ContactsCard />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
