import React, { useEffect, useState } from 'react';

const TestComponent = () => {

  const [total, setTotal] = useState(0);

  function getNumberCommits() {
    fetch("https://api.github.com/repos/elvinhung/SpotifyStats/stats/contributors")
      .then((res) => res.json())
      .then((data) => {
        setTotal(data[0].total);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getNumberCommits();
  }, []);

  return(
    <div>
      <h1>Number of commits</h1>
      <p>{total}</p>
    </div>
  );
}

export default TestComponent;
