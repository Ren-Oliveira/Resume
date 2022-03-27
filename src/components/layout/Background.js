import { useTheme } from '../../store/ThemeContext';
import classes from './Background.module.css';

const Background = props => {
  const theme = useTheme();

  return (
    <>
      <div className={classes.children}>{props.children}</div>
      <div className={!theme ? classes.areaLight : classes.areaDark}>
        <ul className={classes.circles}>
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
