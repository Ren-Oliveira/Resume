import { useTheme } from '../store/ThemeContext';
import 'bulma/css/bulma.min.css';
import SocialMedia from '../components/ui/home/SocialMedia';

const Home = () => {
  const darkTheme = useTheme();

  const backgroundDark = 'has-background-black-ter';
  const backgroundLight = 'has-background-success-light';
  const titleDark = 'has-text-danger-light';
  const titleLight = 'has-text-success-dark';
  const subtitleDark = 'has-text-danger';
  const subtitleLight = 'has-text-success';

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
    <div className={darkTheme ? backgroundDark : backgroundLight}>
      <div className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered is-unselectable">
            <div className="title is-size-1 has-text-weight-bold">
              <p className={darkTheme ? titleDark : titleLight}>
                {greeting[randomNum()]} I'm Renato.
              </p>
            </div>
            <div className="subtitle is-size-3 has-text-weight-semibold">
              <p className={darkTheme ? subtitleDark : subtitleLight}>
                {message[randomNum()]}
              </p>
            </div>
          </div>
        </div>
        <div className="hero-foot has-text-centered is-size-7">
          <SocialMedia />
          <p className={darkTheme ? titleDark : titleLight}>
            © 2022 by Renato Oliveira. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
