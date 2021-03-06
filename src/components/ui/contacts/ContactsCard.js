import { useTheme } from '../../../store/ThemeContext';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  // faCircle,
  faSquare,
  faAt,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
// import {
//   faGithub,
//   faLinkedin,
//   faBehanceSquare,
// } from '@fortawesome/free-brands-svg-icons';
import 'bulma/css/bulma.min.css';
import SocialMedia from '../home/SocialMedia';

const ContactsCard = () => {
  const darkTheme = useTheme();

  const boxDark = 'box content has-background-dark has-text-danger';
  const boxLight = 'box content has-background-light has-text-success';
  const titleClass = 'subtitle is-marginless has-text-centered';
  const titleDark = titleClass + ' has-text-danger-light';
  const titleLight = titleClass + ' has-text-success-dark';
  const media = 'media-left is-medium fa-layers fa-fw fa-3x';

  const ternaryBox = darkTheme ? boxDark : boxLight;
  const ternaryTitle = darkTheme ? titleDark : titleLight;
  const ternaryIcon = darkTheme
    ? 'fas has-text-danger'
    : 'fas has-text-success';
  const ternaryTopIcon = darkTheme ? 'fas has-text-dark' : 'fas has-text-white';

  return (
    <div className={ternaryBox}>
      <h2 className={ternaryTitle}>Contact Info</h2>
      <br />
      <div className="media">
        <div className={media}>
          <Icon icon={faSquare} className={ternaryIcon} />
          <Icon
            icon={faUserAlt}
            className={ternaryTopIcon}
            transform="shrink-5"
          />
        </div>
        <div className={ternaryTitle}>
          <p className="mt-3">Renato Júnio Oliveira</p>
        </div>
      </div>

      <div className="media">
        <div className={media}>
          <Icon icon={faSquare} className={ternaryIcon} />
          <Icon icon={faAt} className={ternaryTopIcon} transform="shrink-5" />
        </div>
        <p className="mt-3">
          <a href="mailto:ren-jun-oliveira@gmail.com" className={ternaryTitle}>
            ren.jun.oliveira@gmail.com
          </a>
        </p>
      </div>
      <div className="media" />
      <div className="has-text-centered">
        <SocialMedia />
      </div>
      {/* 
      <div className="media">
        <div className={media}>
          <Icon icon={faCircle} className={ternaryIcon} />
          <Icon icon={faGithub} className={icon} transform="shrink-5" />
        </div>
        <a
          href="https://github.com/Ren-Oliveira"
          className={ternaryTitle}
          target="_blank"
          rel="noreferrer"
          title="Redirect to Github"
        >
          /ren-oliveira
        </a>
      </div>

      <div className="media">
        <div className={media}>
          <Icon icon={faCircle} className={ternaryIcon} />
          <Icon icon={faLinkedin} className={icon} transform="shrink-5" />
        </div>
        <a
          href="https://www.linkedin.com/in/ren-oliveira/"
          className={ternaryTitle}
          target="_blank"
          rel="noreferrer"
          title="Redirect to Linkedin"
        >
          /ren-oliveira
        </a>
      </div>

      <div className="media">
        <div className={media}>
          <Icon icon={faCircle} className={ternaryIcon} />
          <Icon icon={faBehanceSquare} className={icon} transform="shrink-5" />
        </div>
        <a
          href="https://www.behance.net/ren-oliveira"
          className={ternaryTitle}
          target="_blank"
          rel="noreferrer"
          title="Redirect to Behance"
        >
          /ren-oliveira
        </a>
      </div> */}
    </div>
  );
};

export default ContactsCard;
