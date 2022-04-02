import 'bulma/css/bulma.min.css';

const SkillItem = skill => {
  const darkTheme = skill.theme;

  const TitleDark = 'pl-4 has-text-danger-light is-size-6';
  const TitleLight = 'pl-4 has-text-success-dark is-size-6';
  const ProgressDark = 'progress is-danger';
  const ProgressLight = 'progress is-success';

  const ternaryTitle = darkTheme ? TitleDark : TitleLight;
  const ternaryProgress = darkTheme ? ProgressDark : ProgressLight;

  return (
    <>
      <h4 className="subtitle mb-4">
        <span className={ternaryTitle}>{skill.name}</span>
        <div className="pt-2">
          <progress
            id={skill.name}
            className={ternaryProgress}
            value={skill.value}
            max="100"
          />
        </div>
      </h4>
    </>
  );
};

export default SkillItem;
