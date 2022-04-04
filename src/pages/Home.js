import { useTheme } from '../store/ThemeContext';
import SocialMedia from '../components/ui/home/SocialMedia';
import 'bulma/css/bulma.min.css';

const Home = () => {
  const darkTheme = useTheme();

  const titleDark = 'has-text-danger-light is-unselectable';
  const titleLight = 'has-text-success-dark is-unselectable';
  const subtitleDark = 'has-text-danger is-unselectable';
  const subtitleLight = 'has-text-success is-unselectable';

  const ternaryTitle = darkTheme ? titleDark : titleLight;
  const ternarySubtitle = darkTheme ? subtitleDark : subtitleLight;

  const randomNum = function () {
    return ~~(Math.random() * 3);
  };

  const message = [
    'A full-stack dev in the making!',
    'A front-end dev for hire!',
    'An ambitious web developer!',
  ];
  const greeting = ['Hello!', 'Welcome!', 'Hi!'];

  return (
    <div className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered is-unselectable">
          <div className="title is-size-1 has-text-weight-bold">
            <p className={ternaryTitle}>{greeting[randomNum()]} I'm Renato.</p>
          </div>
          <div className="subtitle is-size-3 has-text-weight-semibold">
            <p className={ternarySubtitle}>{message[randomNum()]}</p>
          </div>
        </div>
      </div>
      <div className="hero-foot has-text-centered is-size-7">
        <SocialMedia />
        <p className={ternaryTitle}>
          © 2022 by Renato Oliveira. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Home;
