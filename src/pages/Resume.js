import { useTheme } from '../store/ThemeContext';

import CredentialsCard from '../components/ui/resume/CredentialsCard';
import ContactsCard from '../components/ui/resume/ContactsCard';
import SkillCard from '../components/ui/resume/SkillCard';
import IntroCard from '../components/ui/resume/IntroCard';

import 'bulma/css/bulma.min.css';

const Resume = () => {
  const darkTheme = useTheme();
  const classDark = 'section has-background-black-ter pr-0 pl-0';
  const classLight = 'section has-background-success-light pr-0 pl-0';

  return (
    <section className={darkTheme ? classDark : classLight}>
      <div className="container mt-5">
        <div className="columns is-desktop">
          <div className="column is-two-thirds-desktop">
            <IntroCard />
            <CredentialsCard />
          </div>
          <div className="column is-one-third-desktop">
            {/* <ContactsCard /> */}
            <SkillCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
