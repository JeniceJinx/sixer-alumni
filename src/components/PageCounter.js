import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const PageCounter = () => {
  const [pageViews, setPageViews] = useState(0);

  useEffect(() => {
    // Simulate fetching the page view count from a server
    const fetchPageViews = async () => {
      const response = await fetch('/api/page-views'); // Adjust the API endpoint accordingly
      const data = await response.json();
      setPageViews(data.count);
    };
    fetchPageViews();
  }, []);

  return (
    <div className="page-counter">
      <h3>Total Page Views</h3>
      <CountUp start={0} end={pageViews} duration={2} />
    </div>
  );
};

export default PageCounter;
