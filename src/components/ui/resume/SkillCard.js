import { useTheme } from '../../../store/ThemeContext';
import SkillItem from './SkillItem';
import Spinner from '../../ui/Spinner';
import 'bulma/css/bulma.min.css';
import { useState, useEffect, useCallback } from 'react';

const SkillCard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [processedData, setProcessedData] = useState(null);

  const darkTheme = useTheme();
  const classDark = 'box content has-background-dark has-text-danger-light';
  const classLight = 'box content has-background-light has-text-success-dark';
  const classTitleDark = 'subtitle has-text-centered has-text-danger-light';
  const classTitleLight = 'subtitle has-text-centered has-text-success-dark';

  const getData = useCallback(async () => {
    const res = await fetch(
      'https://ren-oliveira-default-rtdb.europe-west1.firebasedatabase.app/skills.json'
    );
    const newData = await res.json();
    setData(newData);
  }, []);

  useEffect(() => {
    if (loading) getData().then(() => setLoading(false));

    if (!loading) {
      const fetchedSkills = [];
      for (const key in data) {
        fetchedSkills.push({
          key,
          name: data[key].name,
          type: data[key].type,
          value: data[key].value,
        });
      }
      const types = [...new Set(fetchedSkills.map(skill => skill.type))].sort();
      const Skills = types.map((type, key) => (
        <div className={darkTheme ? classDark : classLight} key={key}>
          <h3 className={darkTheme ? classTitleDark : classTitleLight}>
            {type}
          </h3>
          {fetchedSkills.map(skill =>
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
      setProcessedData(Skills);
    }
  }, [darkTheme, data, getData, loading]);

  return (
    <>
      {!processedData && <Spinner />}
      {processedData && processedData}
    </>
  );
};

export default SkillCard;
