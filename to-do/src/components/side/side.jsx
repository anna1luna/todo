import React from "react";
import s from "./side.module.css";
const Side = (props) => {
  return (
    <nav className={s.navigation}>
      <div>
        <h2>Задачи:</h2>
        <ul className={s.tasksList}>
          <li className={s.tasks}>купить тыкву</li>
          <li className={s.tasks}>купить яблоки</li>
          <li className={s.tasks}>купить корм</li>
        </ul>
      </div>
    </nav>
  );
};

export default Side;
