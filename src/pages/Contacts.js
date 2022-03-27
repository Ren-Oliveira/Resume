import 'bulma/css/bulma.min.css';
import ContactsCard from '../components/ui/contacts/ContactsCard';
import MessageMe from '../components/ui/contacts/MessageMe';

const Contacts = () => {
  return (
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
  );
};

export default Contacts;
