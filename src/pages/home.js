import React from "react";

const Home = () => {
  return (
    <body className="home_body">
      <div className="home_middle_column">
        <div className="home_logo">
          <img alt="logo" />
        </div>
        <div className="home_description">
          <h1>Star Align</h1>
          <p>
            A space for artists to post and share their work, completely free
          </p>
        </div>
        <button className="home_enter">Enter</button>
      </div>
    </body>
  );
};

export default Home;
