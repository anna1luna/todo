import React from "react";
import s from "./todo.module.css";

const Todo = (props) => {
  let todoTaskRef = React.createRef();
  let todoDescriptionRef = React.createRef();
  let todoStatusRef = React.createRef();

  let addTask = () => {
    props.addTask();
    todoTaskRef.current.value = "";
    todoDescriptionRef.current.value = "";
    todoStatusRef.current.value = 0;
  };

  let updNewTaskText = (e) => {
    let text = todoTaskRef.current.value;
    let description = todoDescriptionRef.current.value;
    let status = e.target.value;
    props.updNewTaskText(text, description, status);
  };

  let changeTaskStatus = (taskId, newStatus) => {
    props.changeTaskStatus(taskId, newStatus);
  };
  const countCompletedTasks = () => {
    const completedTasks = props.todoData.filter((task) => task.status === "3");
    return completedTasks.length;
  };
  const todoReady = props.todoData.map((task) => (
    <tr key={task.id}>
      <td className={`${s.tasks} col-3`}>{task.task}</td>
      <td className={`${s.tasks} col-6`}>{task.description}</td>
      <td>
        <select
          className={`form-select ${s.selectionTasks}`}
          aria-label="Default select"
          onChange={(e) => changeTaskStatus(task.id, e.target.value)}
          value={task.status}
        >
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
            value={props.todoText}
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
          value={props.todoStatus}
        >
          <option selected disabled value="0">
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
            value={props.todoDescription}
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
              Общее количество выполненных задач:
            </td>
            <td className={`table-active ${s.total}`}>
              {countCompletedTasks()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
