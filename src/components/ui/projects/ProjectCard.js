import { useTheme } from '../../../store/ThemeContext';
import 'bulma/css/bulma.min.css';

const ProjectCard = props => {
  const darkTheme = useTheme();

  const classDark = 'card has-background-dark';
  const classLight = 'card has-background-light';
  const titleDark = 'has-text-danger-light';
  const titleLight = 'has-text-success-dark';

  const subtitle = ' subtitle has-text-centered is-size-6';
  const ternaryTitle = darkTheme ? titleDark : titleLight;
  const ternarySubtitle = darkTheme
    ? titleDark + subtitle
    : titleLight + subtitle;

  return (
    <div className="column is-one-third">
      <div className={darkTheme ? classDark : classLight}>
        <div className="card-image">
          <a
            href={props.projectLink}
            target="_blank"
            rel="noreferrer"
            title="Redirect to this page"
          >
            <figure className="image is-2by1">
              <img src={props.projectImg} alt="{props.projectImgAlt}" />
            </figure>
            <p className={ternarySubtitle}>
              {props.projectLink.replace(/^https?:\/\//, '')}
            </p>
          </a>
        </div>

        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <details>
                <summary>
                  <span className="title is-size-4">
                    <span
                      className={ternaryTitle}
                      title="Click to read description"
                    >
                      {props.projectName}
                    </span>
                  </span>
                </summary>
                <div className="content is-size-6 has-text-justified">
                  <p className={ternaryTitle}>{props.projectDescription}</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
