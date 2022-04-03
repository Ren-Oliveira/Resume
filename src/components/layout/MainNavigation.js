import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useTheme, useUpdateTheme } from '../../store/ThemeContext';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import 'bulma/css/bulma.min.css';

const MainNavigation = () => {
  // const history = useHistory();
  // window.addEventListener('keydown', e => {
  //   const pages = ['/home', '/resume', '/projects', '/contacts'];
  //   const curPage = pages.indexOf(history.location.pathname);
  //   if (e.code === 'ArrowRight') history.push(`${pages[curPage + 1]}`);
  //   if (e.code === 'ArrowLeft') history.push(`${pages[curPage - 1]}`);
  // });

  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const darkTheme = useTheme();
  const updateThemeHandler = useUpdateTheme();

  const toggleBurgerHandler = () => setIsBurgerActive(!isBurgerActive);

  const active = 'is-active';
  const menu = 'navbar-menu has-text-white ';
  const menuClass_active = active + menu;
  const bgDark = ' has-background-danger-dark ';
  const bgLight = ' has-background-success ';
  const tabClass = 'navbar-item has-text-white ';
  const tabClass_full = tabClass + 'is-size-6 has-text-weight-semibold';
  const tabClass_burger = tabClass + 'is-size-4 has-text-centered';
  const navClassDark = 'navbar is-danger is-fixed-top ' + bgDark;
  const navClassLight = 'navbar is-success is-fixed-top ' + bgLight;
  const iconClassLight = 'fas has-text-success-light mr-4';
  const iconClassDark = 'fas has-text-danger-light mr-4';

  const ternaryBg = darkTheme ? bgDark : bgLight;
  const ternaryTheme = darkTheme ? navClassDark : navClassLight;
  const ternaryBurgerClass = isBurgerActive
    ? ternaryBg + tabClass_burger
    : ternaryBg + tabClass_full;
  const ternaryBurgerActive = isBurgerActive ? menuClass_active : menu;

  return (
    <nav
      id="nav"
      className={ternaryTheme}
      role="navigation"
      aria-label="Navigation"
      onClick={() => {
        if (isBurgerActive) {
          setIsBurgerActive(!isBurgerActive);
        }
      }}
    >
      <div className="navbar-brand">
        <div
          className="navbar-burger"
          data-target="navbar"
          role="button"
          onClick={toggleBurgerHandler}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div className={ternaryBurgerActive} id="navbar">
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
          <NavLink to="/home" className={ternaryBurgerClass}>
            home
          </NavLink>
          <NavLink to="/resume" className={ternaryBurgerClass}>
            resume
          </NavLink>
          <NavLink to="/projects" className={ternaryBurgerClass}>
            projects
          </NavLink>
          <NavLink to="/contacts" className={ternaryBurgerClass}>
            contacts
          </NavLink>
          <div className={ternaryBurgerClass}>
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
