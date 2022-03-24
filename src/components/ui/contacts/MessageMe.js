import { useTheme } from '../../../store/ThemeContext';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import 'bulma/css/bulma.min.css';

const MessageMe = () => {
  const theme = useTheme();

  const labelLight = 'label has-text-success';
  const labelDark = 'label has-text-danger';

  const btnLight = 'button is-success';
  const btnDark = 'button is-danger';

  const titleLight = 'subtitle has-text-centered has-text-success';
  const titleDark = 'subtitle has-text-centered has-text-danger';

  return (
    <div className="control box m-6">
      <div className={!theme ? titleLight : titleDark}> Message me</div>
      <label className={!theme ? labelLight : labelDark}>Name:</label>
      <input type="text" className="input mb-3 is-link" />
      <label className={!theme ? labelLight : labelDark}>Message:</label>
      <textarea className="textarea is-link" rows="3" />
      <div className="field is-grouped is-grouped-centered mt-2">
        <button type="submit" className={!theme ? btnLight : btnDark}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default MessageMe;