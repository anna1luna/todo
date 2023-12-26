import React from "react";
import s from "./todo.module.css";
const Todo = (props) => {
  return (
    <div className={s.container}>
      <h2>Мои Задачи</h2>
      <div className={s.formContainer}>
        <div className={s.form}>
          <label for="task" className={`form-label`}>
            Новая задача
          </label>
          <input
            type="task"
            className={`form-control`}
            id="task"
            placeholder="Введите название задачи"
          ></input>
        </div>
        <div className={s.form}>
          <label for="taskDescription" className={`form-label`}>
            Описание задачи
          </label>
          <textarea className={`form-control`} id="taskDescription"></textarea>
        </div>
        <button className={`btn btn-primary ${s.add}`}>Добавить</button>
      </div>

      <table className={`table table-dark table-hover`}>
        <thead>
          <tr>
            <th scope="col">Задача</th>
            <th scope="col">Описание</th>
            <th scope="col">Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>купить тыкву</td>
            <td>пойди в Магнит за тыквой</td>
            <td>В работе</td>
          </tr>
          <tr>
            <td>купить яблоки</td>
            <td>пойди в Магнит за яблоками</td>
            <td>Ожидание</td>
          </tr>
          <tr>
            <td>купить корм</td>
            <td>пойди в Магнит за кормом для Яры</td>
            <td>Выполнено</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
