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
          <div className={s.counter}>
            <p>*Задача должна содержать больше 30 символов</p>
            <p> 0 </p>
          </div>
        </div>
        <select
          className={`form-select ${s.selection}`}
          aria-label="Default select"
        >
          <option selected>Выберите статус</option>
          <option value="1">В работе</option>
          <option value="2">Ожидание</option>
        </select>
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
            <td>
              <select
                className={`form-select ${s.selectionTasks}`}
                aria-label="Default select"
              >
                <option selected>Выберите статус</option>
                <option value="1">В работе</option>
                <option value="2">Ожидание</option>
                <option value="3">Выполнено</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>купить яблоки</td>
            <td>пойди в Магнит за яблоками</td>
            <td>
              <select
                className={`form-select ${s.selectionTasks}`}
                aria-label="Default select"
              >
                <option selected>Выберите статус</option>
                <option value="1">В работе</option>
                <option value="2">Ожидание</option>
                <option value="3">Выполнено</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>купить корм</td>
            <td>пойди в Магнит за кормом для Яры</td>
            <td>
              <select
                className={`form-select ${s.selectionTasks}`}
                aria-label="Default select"
              >
                <option selected>Выберите статус</option>
                <option value="1">В работе</option>
                <option value="2">Ожидание</option>
                <option value="3">Выполнено</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colspan="2" className={`table-active`}>
              Общее количество задач:
            </td>
            <td className={`table-active ${s.total}`}>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
