import { useTheme } from '../../../store/ThemeContext';
import ListItem from './ListItem';

const ListCard = props => {
  const darkTheme = useTheme();

  const BoxDark = 'box content has-background-dark has-text-danger-light';
  const BoxLight = 'box content has-background-light has-text-success-dark';
  const TitleDark = 'subtitle has-text-centered has-text-danger-light';
  const TitleLight = 'subtitle has-text-centered has-text-success-dark';
  const infoList = props.list;

  const list = infoList.map(el => (
    <ListItem
      name={el.name}
      key={el.key}
      dateStart={el.dateStart}
      dateEnd={el.dateEnd}
      description={el.description}
      link={el.link}
      location={el.location}
      theme={darkTheme}
    />
  ));

  return (
    <div className={darkTheme ? BoxDark : BoxLight}>
      <h3 className={darkTheme ? TitleDark : TitleLight}>{props.title}</h3>
      {props.text && <p className="has-text-justified mb-5">{props.text}</p>}
      {list}
    </div>
  );
};

export default ListCard;
