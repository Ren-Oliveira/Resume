import { useTheme } from '../../../store/ThemeContext';
import 'bulma/css/bulma.min.css';

const ProjectCard = props => {
  const darkTheme = useTheme();

  const classDark = 'card has-background-dark';
  const classLight = 'card has-background-light';
  const titleDark = 'has-text-danger-light';
  const titleLight = 'has-text-success-dark';

  const ternaryTitle = darkTheme ? titleDark : titleLight;

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
            <figure
              className="image is-2by1"
              style={{
                borderBottom: '3px solid #222',
              }}
            >
              <img src={props.projectImg} alt="{props.projectImgAlt}" />
            </figure>
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
                <div className="content is-size-7 has-text-justified mt-2">
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
