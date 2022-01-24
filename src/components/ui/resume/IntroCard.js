import 'bulma/css/bulma.min.css';
import { useTheme } from '../../../store/ThemeContext';

const IntroCard = () => {
  const darkTheme = useTheme();
  const classDark = 'box content has-background-dark has-text-danger-light';
  const classLight = 'box content has-background-light has-text-success-dark';
  const classTitleDark = 'title has-text-centered has-text-danger-light';
  const classTitleLight = 'title has-text-centered has-text-success-dark';

  return (
    <div className={darkTheme ? classDark : classLight}>
      <h1 className={darkTheme ? classTitleDark : classTitleLight}>
        Hello World! <br /> I'm Renato Júnio Oliveira.
      </h1>
      <p className="has-text-justified">
        My academic background focus on the study of languages and cultures.
        However, during the pandemic, I took the opportunity to further expand
        my skills in other directions and began learning code. I am determined
        to become a full-stack developer.
      </p>
    </div>
  );
};

export default IntroCard;
