import CredentialsCard from '../components/ui/resume/CredentialsCard';
import SkillCard from '../components/ui/resume/SkillCard';
import IntroCard from '../components/ui/resume/IntroCard';

import 'bulma/css/bulma.min.css';

const Resume = () => {
  return (
    <section className="section pr-0 pl-0">
      <div className="container mt-5">
        <div className="columns is-desktop">
          <div className="column is-two-thirds-desktop">
            <IntroCard />
            <CredentialsCard />
          </div>
          <div className="column is-one-third-desktop">
            <SkillCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
