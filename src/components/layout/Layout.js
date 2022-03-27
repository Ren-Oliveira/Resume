import Background from './Background';
import MainNavigation from './MainNavigation';

const Layout = props => {
  return (
    <Background>
      <MainNavigation />
      <main>{props.children}</main>
    </Background>
  );
};

export default Layout;
