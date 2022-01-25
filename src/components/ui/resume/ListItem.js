import 'bulma/css/bulma.min.css';
import { Fragment } from 'react';

const Item = props => {
  const theme = props.theme;
  const classTitleDark = 'has-text-danger-light is-marginless  is-size-5';
  const classTitleLight = 'has-text-success-dark is-marginless  is-size-5';
  const classDetailDark = 'has-text-danger has-text-weight-semibold is-size-6';
  const classDetailLight =
    'has-text-success has-text-weight-semibold is-size-7';

  return (
    <Fragment>
      <div className="media">
        <div className="media-content">
          <h3 className={theme ? classTitleDark : classTitleLight}>
            {props.name}
          </h3>

          <div className="level mt-1">
            <span className="level-left">
              <a
                className={theme ? classDetailDark : classDetailLight}
                href={props.link}
              >
                {props.location}
              </a>
            </span>
            <div className={theme ? classDetailDark : classDetailLight}>
              <time dateTime={props.dateStart}> {props.dateStart}</time>
              <time dateTime={props.dateEnd}>
                &nbsp;&#8594; {props.dateEnd}
              </time>
            </div>
          </div>
        </div>
      </div>
      <p className="has-text-justified mb-5">{props.description}</p>
    </Fragment>
  );
};

export default Item;
