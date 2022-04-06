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
      <h2 className={darkTheme ? classTitleDark : classTitleLight}>
        Hello World! <br /> I'm Renato Júnio Oliveira.
      </h2>
      <p className="has-text-justified">
        My academic background focus on Humanities, Literature and Social
        Sciences. However, recently I decided to to further expand my skills in
        other directions and began learning code, focusing on Computer Sciences.
        This area is a better fit for my interests and personality. I am
        determined to become a full-stack developer and further progress my
        skills in this area.
      </p>
    </div>
  );
};

export default IntroCard;
