import React from "react";

import s from "./home.module.scss";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className={s.home}>
          <h1>
            <div>
              Stay <span>organized</span> and
            </div>
            <div>
              manage your tasks <span>easily</span>.
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
