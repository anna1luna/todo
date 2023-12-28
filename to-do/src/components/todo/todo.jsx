import React from "react";
import s from "./todo.module.css";
import { Form } from "react-bootstrap";

const Todo = (props) => {
  let todoTaskRef = React.createRef();
  let todoDescriptionRef = React.createRef();
  let todoStatusRef = React.createRef();

  let addTask = () => {
    props.addTask();
    todoTaskRef.current.value = "";
    todoDescriptionRef.current.value = "";
    todoStatusRef.current.value = "1";
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

  const handleSwitchToggle = (switchId) => {
    props.toggleSwitch(switchId);
  };

  const filterTasksByStatus = () => {
    return props.todoData.map((task) => {
      if (props.switchStates["custom-switch-2"] && task.status === "1") {
        return (
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
        );
      } else if (props.switchStates["custom-switch-3"] && task.status === "2") {
        return (
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
        );
      } else if (props.switchStates["custom-switch-4"] && task.status === "3") {
        return (
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
        );
      } else if (
        props.switchStates["custom-switch-1"] &&
        ["1", "2", "3"].includes(task.status)
      ) {
        return (
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
        );
      } else {
        return null;
      }
    });
  };
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
          </div>
        </div>

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
        <select
          className={`form-select ${s.selection}`}
          aria-label="Default select"
          onChange={updNewTaskText}
          ref={todoStatusRef}
          value={props.todoStatus}
        >
          <option selected value="1">
            В работе
          </option>
        </select>
        <button className={`btn btn-primary ${s.add}`} onClick={addTask}>
          Добавить
        </button>
      </div>

      <ul className={s.filtersList}>
        <li className={s.filter}>
          <Form.Check
            type="switch"
            id="custom-switch-1"
            label="Все"
            checked={props.switchStates["custom-switch-1"]}
            onChange={() => handleSwitchToggle("custom-switch-1")}
          />
        </li>
        <li className={s.filter}>
          <Form.Check
            type="switch"
            id="custom-switch-2"
            label="В работе"
            checked={props.switchStates["custom-switch-2"]}
            onChange={() => handleSwitchToggle("custom-switch-2")}
          />
        </li>
        <li className={s.filter}>
          <Form.Check
            type="switch"
            id="custom-switch-3"
            label="Ожидание"
            checked={props.switchStates["custom-switch-3"]}
            onChange={() => handleSwitchToggle("custom-switch-3")}
          />
        </li>
        <li className={s.filter}>
          <Form.Check
            type="switch"
            id="custom-switch-4"
            label="Выполнено"
            checked={props.switchStates["custom-switch-4"]}
            onChange={() => handleSwitchToggle("custom-switch-4")}
          />
        </li>
      </ul>

      <table className={`table table-dark table-hover`}>
        <thead>
          <tr>
            <th scope="col">Задача</th>
            <th scope="col">Описание</th>
            <th scope="col">Статус</th>
          </tr>
        </thead>
        <tbody>
          {filterTasksByStatus()}
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
