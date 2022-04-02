import 'bulma/css/bulma.min.css';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Item = props => {
  const theme = props.theme;

  const textDark = 'has-text-danger';
  const textLight = 'has-text-success';
  const title = 'is-marginless has-text-weight-medium is-size-5 is-clickable ';
  const detail = 'has-text-weight-semibold is-size-6 ';
  const icon = 'fas pr-2 ';

  const titleDark = title + textDark + '-light';
  const titleLight = title + textLight + '-dark';
  const detailDark = detail + textDark;
  const detailLight = detail + textLight;
  const iconDark = icon + textDark;
  const iconLight = icon + textLight;

  const ternaryTitle = theme ? titleDark : titleLight;
  const ternaryDetail = theme ? detailDark : detailLight;
  const ternaryIcon = theme ? iconDark : iconLight;

  return (
    <>
      <div className="media">
        <div className="media-content">
          <details>
            <summary className={ternaryTitle} title="Click here to learn more">
              {props.name}

              <div className="level mt-1">
                <span className="level-left">
                  <span className={ternaryDetail}>
                    <a
                      href={props.link}
                      target="_blank"
                      rel="noreferrer"
                      title="Redirect to this page"
                    >
                      <Icon icon={faExternalLinkAlt} className={ternaryIcon} />
                    </a>
                    {props.location}
                  </span>
                </span>
                <div className={ternaryDetail}>
                  <time dateTime={props.dateStart}> {props.dateStart}</time>
                  <time dateTime={props.dateEnd}>
                    &nbsp;&#8594; {props.dateEnd}
                  </time>
                </div>
              </div>
            </summary>
            <p className="has-text-justified">{props.description}</p>
          </details>
        </div>
      </div>
    </>
  );
};

export default Item;
