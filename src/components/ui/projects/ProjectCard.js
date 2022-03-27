import { useTheme } from '../../../store/ThemeContext';
import 'bulma/css/bulma.min.css';

const ProjectCard = props => {
  const darkTheme = useTheme();

  const classDark = 'card has-background-dark';
  const classLight = 'card has-background-light';
  const titleDark = 'has-text-danger-light';
  const titleLight = 'has-text-success-dark';

  return (
    <div className="column is-one-third">
      <div className={darkTheme ? classDark : classLight}>
        <div className="card-image">
          <a href={props.projectLink}>
            <figure className="image is-2by1">
              <img src={props.projectImg} alt="{props.projectImgAlt}" />
            </figure>
          </a>
        </div>

        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-size-4">
                <span className={darkTheme ? titleDark : titleLight}>
                  {props.projectName}
                </span>
              </p>
              <p className="subtitle">
                <a
                  href={props.projectLink}
                  className={darkTheme ? titleDark : titleLight}
                >
                  {props.projectLink.replace(/^https?:\/\//, '')}
                </a>
              </p>
            </div>
          </div>
          <div className="content is-size-6 has-text-justified">
            <p className={darkTheme ? titleDark : titleLight}>
              {props.projectDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
