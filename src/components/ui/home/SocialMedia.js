import { useTheme } from '../../../store/ThemeContext';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faGithubSquare,
  faLinkedin,
  faBehanceSquare,
} from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
  const darkTheme = useTheme();

  const iconDark = 'fas has-text-danger fa-2x m-2';
  const iconLight = 'fas has-text-success fa-2x m-2';

  return (
    <div>
      <Icon
        icon={faGithubSquare}
        className={darkTheme ? iconDark : iconLight}
      />
      <Icon icon={faLinkedin} className={darkTheme ? iconDark : iconLight} />
      <Icon
        icon={faBehanceSquare}
        className={darkTheme ? iconDark : iconLight}
      />
    </div>
  );
};

export default SocialMedia;
