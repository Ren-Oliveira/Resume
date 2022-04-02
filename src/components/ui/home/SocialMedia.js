import { useTheme } from '../../../store/ThemeContext';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faGithubSquare,
  faLinkedin,
  faBehanceSquare,
} from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
  const theme = useTheme();

  const iconDark = 'fas has-text-danger fa-2x m-2';
  const iconLight = 'fas has-text-success fa-2x m-2';
  const ternaryIcon = theme ? iconDark : iconLight;

  return (
    <div>
      <a
        href="https://github.com/ren-oliveira"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon={faGithubSquare} className={ternaryIcon} />
      </a>

      <a
        href="https://www.linkedin.com/in/ren-oliveira"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon={faLinkedin} className={ternaryIcon} />
      </a>

      <a
        href="https://www.behance.net/ren-oliveira"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon={faBehanceSquare} className={ternaryIcon} />
      </a>
    </div>
  );
};

export default SocialMedia;
