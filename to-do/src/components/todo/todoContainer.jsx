import { connect } from "react-redux";
import Todo from "./todo";
import {
  addTaskAC,
  updNewTaskTextAC,
  changeTaskStatusAC,
} from "../../redux/todoReducer";
const mapStateToProps = (state) => {
  return {
    todoData: state.todo.todoData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: () => {
      dispatch(addTaskAC());
    },
    updNewTaskText: (text, description, status) => {
      dispatch(updNewTaskTextAC(text, description, status));
    },
    changeTaskStatus: (taskId, newStatus) => {
      dispatch(changeTaskStatusAC(taskId, newStatus));
    },
  };
};

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);
export default TodoContainer;
