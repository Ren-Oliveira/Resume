import 'bulma/css/bulma.min.css';

const SkillItem = skill => {
  const darkTheme = skill.theme;
  const classTitleDark = 'pl-4 has-text-danger-light is-size-6';
  const classTitleLight = 'pl-4 has-text-success-dark is-size-6';
  const classProgressDark = 'progress is-danger';
  const classProgressLight = 'progress is-success';

  return (
    <>
      <h4 className="subtitle mb-4">
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
