import { useState, useCallback, useEffect } from 'react';

import Spinner from '../ui/Spinner';
import ListCard from '../ui/resume/ListCard';

const FetchData = props => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [processedData, setProcessedData] = useState(null);

  const getData = useCallback(async () => {
    try {
      const res = await fetch(
        `https://ren-oliveira-default-rtdb.europe-west1.firebasedatabase.app/${props.type}.json`
      );
      const newData = await res.json();
      setData(newData);
    } catch (err) {
      console.log(err);
    }
  }, [props.type]);

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
      setProcessedData(fetchedItems);
    }
  }, [data, getData, loading]);

  return (
    <>
      {!processedData && <Spinner />}
      {processedData && (
        <ListCard list={processedData} title={`${props.title}`} />
      )}
    </>
  );
};

export default FetchData;
