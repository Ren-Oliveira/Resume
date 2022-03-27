import { Fragment } from 'react';
import Background from './Background';
import MainNavigation from './MainNavigation';

const Layout = props => {
  return (
    <Fragment>
      <Background>
        <MainNavigation />
        <main>{props.children}</main>
      </Background>
    </Fragment>
  );
};

export default Layout;
