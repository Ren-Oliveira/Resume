import { useTheme } from '../../store/ThemeContext';
import classes from './Background.module.css';

const Background = props => {
  const theme = useTheme();

  return (
    <>
      <div className={!theme ? classes.bgLight : classes.bgDark}>
        <div className={classes.children}>{props.children}</div>
        <ul className={classes.shapes}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Background;
