import React from "react";
import s from "./todo.module.css";

const Todo = (props) => {
  let todoTaskRef = React.createRef();
  let todoDescriptionRef = React.createRef();
  let todoStatusRef = React.createRef();

  let addTask = () => {
    props.addTask();
  };

  let updNewTaskText = (e) => {
    let text = todoTaskRef.current.value;
    let description = todoDescriptionRef.current.value;
    let status = e.target.value;
    props.updNewTaskText(text, description, status);
  };

  const todoReady = props.todoData.map((task) => (
    <tr key={task.id}>
      <td>{task.task}</td>
      <td>{task.description}</td>
      <td>
        <select
          className={`form-select ${s.selectionTasks}`}
          aria-label="Default select"
          onChange={(e) => updNewTaskText(e, task.id)}
          value={task.status}
        >
          <option value="0" selected>
            {task.status}
          </option>
          <option value="1">В работе</option>
          <option value="2">Ожидание</option>
          <option value="3">Выполнено</option>
        </select>
      </td>
    </tr>
  ));

  return (
    <div className={s.container}>
      <h2>Мои Задачи</h2>
      <div className={s.formContainer}>
        <div className={s.form}>
          <label htmlFor="task" className={`form-label`}>
            Новая задача
          </label>
          <input
            type="text"
            className={`form-control`}
            ref={todoTaskRef}
            onChange={updNewTaskText}
            placeholder="Введите название задачи"
          />
          <div className={s.counter}>
            <p>*Задача должна содержать больше 30 символов</p>
            <p>0</p>
          </div>
        </div>
        <select
          className={`form-select ${s.selection}`}
          aria-label="Default select"
          onChange={updNewTaskText}
          ref={todoStatusRef}
          value="0"
        >
          <option disabled value="0">
            Выберите статус
          </option>
          <option value="1">В работе</option>
          <option value="2">Ожидание</option>
        </select>
        <div className={s.form}>
          <label htmlFor="taskDescription" className={`form-label`}>
            Описание задачи
          </label>
          <textarea
            className={`form-control`}
            ref={todoDescriptionRef}
            onChange={updNewTaskText}
            defaultValue={props.todoDescription}
          />
        </div>
        <button className={`btn btn-primary ${s.add}`} onClick={addTask}>
          Добавить
        </button>
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
          {todoReady}
          <tr>
            <td colSpan="2" className={`table-active`}>
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
