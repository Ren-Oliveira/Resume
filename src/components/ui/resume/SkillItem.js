import 'bulma/css/bulma.min.css';

const SkillItem = skill => {
  const darkTheme = skill.theme;
  const classTitleDark = 'pl-4 has-text-danger-light';
  const classTitleLight = 'pl-4 has-text-success-dark';
  const classProgressDark = 'progress is-danger';
  const classProgressLight = 'progress is-success';

  return (
    <>
      <h4 className="subtitle mb-5">
        <span className={darkTheme ? classTitleDark : classTitleLight}>
          {skill.name}
        </span>
        <div className="pt-2">
          <progress
            id={skill.name}
            className={darkTheme ? classProgressDark : classProgressLight}
            value={skill.value}
            max="100"
          />
        </div>
      </h4>
    </>
  );
};

export default SkillItem;
