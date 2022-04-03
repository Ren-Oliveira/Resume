import ContactsCard from '../components/ui/contacts/ContactsCard';
import MessageMe from '../components/ui/contacts/MessageMe';
import 'bulma/css/bulma.min.css';

const Contacts = () => {
  return (
    <div className="hero is-fullheight">
      <div className="hero-body">
        <div className="container mt-5">
          <div className="columns">
            <div className="column is-9-tablet is-5-desktop is-12-mobile">
              <ContactsCard />
              <MessageMe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
