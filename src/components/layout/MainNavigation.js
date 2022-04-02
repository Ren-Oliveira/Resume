import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useTheme, useUpdateTheme } from '../../store/ThemeContext';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import 'bulma/css/bulma.min.css';

const MainNavigation = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const darkTheme = useTheme();
  const updateThemeHandler = useUpdateTheme();

  const toggleBurgerHandler = () => setIsBurgerActive(!isBurgerActive);

  const activeClass = 'is-active';
  const burgerClass = 'navbar-burger has-text-white';
  const menuClass = 'navbar-menu';
  const tabClass = 'navbar-item is-size-6 has-text-weight-semibold';
  const navClassDark = `navbar has-background-danger-dark is-danger is-fixed-top`;
  const navClassLight = `navbar has-background-success is-success is-fixed-top`;

  const iconClassLight = 'fas has-text-success-light mr-4';
  const iconClassDark = 'fas has-text-danger-light mr-4';

  return (
    <nav
      className={darkTheme ? navClassDark : navClassLight}
      role="navigation"
      aria-label="Navigation"
      onClick={() => {
        if (isBurgerActive) {
          setIsBurgerActive(!isBurgerActive);
        }
      }}
      id="nav"
    >
      <div className="navbar-brand">
        <div
          className={isBurgerActive ? [burgerClass, activeClass] : burgerClass}
          data-target="navbar"
          role="button"
          onClick={toggleBurgerHandler}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div
        className={isBurgerActive ? [menuClass, activeClass] : menuClass}
        id="navbar"
      >
        <div
          className={
            isBurgerActive ? 'navbar-end has-text-right' : 'navbar-end'
          }
          onClick={() => {
            if (isBurgerActive) {
              setIsBurgerActive(!isBurgerActive);
            }
          }}
        >
          <NavLink to="/home" className={tabClass}>
            home
          </NavLink>
          <NavLink to="/resume" className={tabClass}>
            resume
          </NavLink>
          <NavLink to="/projects" className={tabClass}>
            projects
          </NavLink>
          <NavLink to="/contacts" className={tabClass}>
            contacts
          </NavLink>
          <div className={tabClass}>
            {darkTheme && (
              <Icon
                icon={faSun}
                onClick={updateThemeHandler}
                className={iconClassDark}
              />
            )}
            {!darkTheme && (
              <Icon
                icon={faMoon}
                onClick={updateThemeHandler}
                className={iconClassLight}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
