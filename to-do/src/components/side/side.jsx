import React from "react";
import s from "./side.module.css";
import { Form } from "react-bootstrap";
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
      <div>
        <h3>Фильтры:</h3>
        <ul className={s.filtersList}>
          <li className={s.filter}>
            <Form.Check type="switch" id="custom-switch-1" label="Выполнено" />
          </li>
          <li className={s.filter}>
            <Form.Check type="switch" id="custom-switch-2" label="В работе" />
          </li>
          <li className={s.filter}>
            <Form.Check type="switch" id="custom-switch-3" label="Ожидание" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Side;
