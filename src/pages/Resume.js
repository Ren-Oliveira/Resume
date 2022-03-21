import { useTheme } from '../store/ThemeContext';

import IntroCard from '../components/ui/resume/IntroCard';
import ContactsCard from '../components/ui/resume/ContactsCard';
import SkillCard from '../components/ui/resume/SkillCard';
import ListCard from '../components/ui/resume/ListCard';

import { listOfCourses } from '../information/CoursesInfo';
import { listOfJobs } from '../information/WorkInfo';
import { listOfUniversities } from '../information/UniversityInfo';

import 'bulma/css/bulma.min.css';
import { useState } from 'react';

const Resume = props => {
  // const [workData, setWorkData] = useState();
  // const [coursesData, setCoursesData] = useState();
  // const [educationData, setEducationData] = useState();

  const darkTheme = useTheme();
  const classDark = 'section has-background-black-ter';
  const classLight = 'section has-background-danger-light';

  const jobTxt =
    "Until now, I had the opportunity to work in a variety of different  positions. Besides the jobs listed below, I worked at a college bar, a carwashing business, and did some volunteer work as a forest guard. I've always maintained a good relationship with all my coworkers and superiors and pride myself on always fulfilling my position as best as I can.";

  return (
    <section className={darkTheme ? classDark : classLight}>
      <div className="container mt-5">
        <div className="columns is-desktop">
          <div className="column is-two-thirds-desktop">
            <IntroCard />
            <ListCard list={listOfCourses} title={'Certifications'} />
            <ListCard
              list={listOfUniversities}
              title={'Educational Background'}
            />
            <ListCard
              list={listOfJobs}
              title={'Professional Background'}
              text={jobTxt}
            />
          </div>
          <div className="column is-one-third-desktop">
            <ContactsCard />
            <SkillCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
