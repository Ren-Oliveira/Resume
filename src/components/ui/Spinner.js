import classes from './spinner.module.css';

const Spinner = function () {
  return (
    <div className={classes.container}>
      <div className={classes.lds_ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
