import FetchData from '../../helpers/FetchData';

const HistoryCard = () => {
  return (
    <>
      <FetchData type="certification" title="Certifications" />
      <FetchData type="education" title="Education" />
      <FetchData type="work" title="Work Experience" />
    </>
  );
};

export default HistoryCard;
