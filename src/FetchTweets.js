import React from 'react';

const FetchTweets = ({ fetchTweets }) => {
  return (
    <section className="FetchTweets">
      <button onClick={fetchTweets}>Fetch Tweets</button>
    </section>
  );
};

export default FetchTweets;
