import { Fragment } from 'react';
import { listOfSkills } from '../../../information/SkillsInfo';
import { useTheme } from '../../../store/ThemeContext';
import SkillItem from './SkillItem';
import 'bulma/css/bulma.min.css';

const SkillCard = () => {
  const darkTheme = useTheme();

  const classDark = 'box content has-background-dark has-text-danger-light';
  const classLight = 'box content has-background-light has-text-success-dark';
  const classTitleDark = 'subtitle has-text-centered has-text-danger-light';
  const classTitleLight = 'subtitle has-text-centered has-text-success-dark';

  const typesOfSkills = [...new Set(listOfSkills.map(skill => skill.type))];
  const Skills = typesOfSkills.map((type, key) => (
    <div className={darkTheme ? classDark : classLight} key={key}>
      <h2 className={darkTheme ? classTitleDark : classTitleLight}>{type}</h2>
      {listOfSkills.map(skill =>
        skill.type === type ? (
          <SkillItem
            theme={darkTheme}
            name={skill.name}
            key={skill.key}
            value={skill.value}
          />
        ) : null
      )}
    </div>
  ));

  return <Fragment>{Skills}</Fragment>;
};

export default SkillCard;
