import 'bulma/css/bulma.min.css';
import { Fragment } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Item = props => {
  const theme = props.theme;

  const classTitleDark =
    'has-text-danger-light is-marginless has-text-weight-medium is-size-5 is-clickable';
  const classTitleLight =
    'has-text-success-dark is-marginless has-text-weight-medium is-size-5 is-clickable';

  const classDetailDark = 'has-text-danger has-text-weight-semibold is-size-6';
  const classDetailLight =
    'has-text-success has-text-weight-semibold is-size-6';

  const iconDark = 'fas has-text-danger-dark pr-2';
  const iconLight = 'fas has-text-success pr-2';

  return (
    <Fragment>
      <div className="media">
        <div className="media-content">
          <details>
            <summary
              className={theme ? classTitleDark : classTitleLight}
              title="Click here to learn more"
            >
              {props.name}

              <div className="level mt-1">
                <span className="level-left">
                  <span className={theme ? classDetailDark : classDetailLight}>
                    <a
                      href={props.link}
                      target="_blank"
                      rel="noreferrer"
                      title="Redirect to this page"
                    >
                      <Icon
                        icon={faExternalLinkAlt}
                        className={theme ? iconDark : iconLight}
                      />
                    </a>
                    {props.location}
                  </span>
                </span>
                <div className={theme ? classDetailDark : classDetailLight}>
                  <time dateTime={props.dateStart}> {props.dateStart}</time>
                  <time dateTime={props.dateEnd}>
                    &nbsp;&#8594; {props.dateEnd}
                  </time>
                </div>
              </div>
            </summary>
            <p className="has-text-justified mb-5">{props.description}</p>
          </details>
        </div>
      </div>
    </Fragment>
  );
};

export default Item;
