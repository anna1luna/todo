import { connect } from "react-redux";
import Todo from "./todo";
import {
  addTaskAC,
  updNewTaskTextAC,
  changeTaskStatusAC,
  toggleSwitchAC,
} from "../../redux/todoReducer";
const mapStateToProps = (state) => {
  return {
    todoData: state.todo.todoData,
    switchStates: state.todo.switchStates,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: () => {
      dispatch(addTaskAC());
    },
    updNewTaskText: (text, description, status) => {
      console.log("updNewTaskText values:", text, description, status);
      dispatch(updNewTaskTextAC(text, description, status));
    },
    changeTaskStatus: (taskId, newStatus) => {
      dispatch(changeTaskStatusAC(taskId, newStatus));
    },
    toggleSwitch: (switchId) => {
      dispatch(toggleSwitchAC(switchId));
    },
  };
};

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);
export default TodoContainer;
