import React from "react";

import s from "./home.module.scss";

const Home = () => {
  return (
    <div className={s.home_outer}>
      <div className={s.home_inner}>
        <h1 className={s.title}>
          <div>
            Stay <span>organized</span> and
          </div>
          <div>
            manage your tasks <span>easily</span>.
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Home;
