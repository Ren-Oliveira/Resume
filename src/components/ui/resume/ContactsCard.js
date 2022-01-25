import 'bulma/css/bulma.min.css';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faCircle,
  faUser,
  faAt,
  faMapMarker,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from '../../../store/ThemeContext';

const ContactsCard = () => {
  const darkTheme = useTheme();

  const boxDark = 'box content has-background-dark has-text-danger-light';
  const boxLight = 'box content has-background-light has-text-success-dark';

  const titleDark = 'has-text-centered has-text-danger-light is-size-6';
  const titleLight = ' has-text-centered has-text-success-dark is-size-6';

  const iconDark = 'fas has-text-danger-dark';
  const iconLight = 'fas has-text-success';

  const media = 'media-left icon is-medium fa-layers fa-fw fa-2x';

  return (
    <div className={darkTheme ? boxDark : boxLight}>
      <h2 className={darkTheme ? titleDark : titleLight}>Contact Info</h2>
      <div className="media">
        <div className={media}>
          <Icon icon={faCircle} className={darkTheme ? iconDark : iconLight} />
          <Icon
            icon={faUser}
            className="fas has-text-white"
            transform="shrink-8"
          />
        </div>
        <div className={darkTheme ? titleDark : titleLight}>
          Renato Júnio Oliveira
        </div>
      </div>

      <div className="media">
        <div className={media}>
          <Icon icon={faCircle} className={darkTheme ? iconDark : iconLight} />
          <Icon
            icon={faMapMarker}
            className="fas has-text-white"
            transform="shrink-8"
          />
        </div>
        <p className={darkTheme ? titleDark : titleLight}>Portugal, Braga</p>
      </div>

      <div className="media">
        <div className={media}>
          <Icon icon={faCircle} className={darkTheme ? iconDark : iconLight} />
          <Icon
            icon={faAt}
            className="fas has-text-white"
            transform="shrink-8"
          />
        </div>
        <a
          href="mailto:ren-jun-oliveira@gmail.com"
          className={darkTheme ? titleDark : titleLight}
        >
          Ren.Jun.Oliveira@gmail.com
        </a>
      </div>

      <div className="media">
        <div className={media}>
          <Icon icon={faCircle} className={darkTheme ? iconDark : iconLight} />
          <Icon
            icon={faGithub}
            className="fas has-text-white"
            transform="shrink-8"
          />
        </div>
        <a
          href="https://github.com/Ren-Oliveira"
          className={darkTheme ? titleDark : titleLight}
        >
          Ren-Oliveira
        </a>
      </div>

      <div className="media">
        <div className={media}>
          <Icon icon={faCircle} className={darkTheme ? iconDark : iconLight} />
          <Icon
            icon={faLinkedin}
            className="fas has-text-white"
            transform="shrink-6"
          />
        </div>
        <a
          href="https://www.linkedin.com/in/renato-junio-oliveira/"
          className={darkTheme ? titleDark : titleLight}
        >
          Renato-Junio-Oliveira
        </a>
      </div>
    </div>
  );
};

export default ContactsCard;
