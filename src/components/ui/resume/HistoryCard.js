import { useState, useCallback, useEffect } from 'react';

import { listOfCourses } from '../../../information/CoursesInfo';
import { listOfJobs } from '../../../information/WorkInfo';

import ListCard from './ListCard';

const HistoryCard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [education, setEducation] = useState(null);

  const getData = useCallback(async () => {
    const res = await fetch(
      'https://ren-oliveira-default-rtdb.europe-west1.firebasedatabase.app/education.json'
    );
    const newData = await res.json();
    setData(newData);
  }, []);

  useEffect(() => {
    if (loading) getData().then(() => setLoading(false));

    if (data && !loading) {
      const fetchedItems = [];
      for (const key in data) {
        fetchedItems.push({
          key,
          name: data[key].name,
          location: data[key].location,
          link: data[key].link,
          dateStart: data[key].dateStart,
          dateEnd: data[key].dateEnd,
          description: data[key].description,
        });
      }
      setEducation(fetchedItems);
    }
  }, [data, getData, loading]);

  const jobTxt =
    "Until now, I had the opportunity to work in a variety of different  positions. Besides the jobs listed below, I worked at a college bar, a carwashing business, and did some volunteer work as a forest guard. I've always maintained a good relationship with all my coworkers and superiors and pride myself on always fulfilling my position as best as I can.";

  return (
    <>
      <ListCard list={listOfCourses} title={'Certification'} />
      {education && <ListCard list={education} title={'Education'} />}
      <ListCard list={listOfJobs} title={'Work Experience'} text={jobTxt} />
    </>
  );
};

export default HistoryCard;
