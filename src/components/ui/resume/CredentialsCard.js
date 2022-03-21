import FetchData from '../../helpers/FetchData';

const CredentialsCard = () => {
  return (
    <>
      <FetchData type="certification" title="Certifications" />
      <FetchData type="education" title="Education" />
      <FetchData type="work" title="Work Experience" />
    </>
  );
};

export default CredentialsCard;
