const ADD_TASK = "ADD-TASK";
const UPD_NEW_TASK_TEXT = "UPD-NEW-TASK-TEXT";
const CHANGE_TASK_STATUS = "CHANGE-TASK-STATUS";

let initialState = {
  todoData: [
    {
      task: "купить тыкву",
      status: "1",
      description: "пойди в Магнит за тыквой",
      id: 1,
    },
    {
      task: "купить яблоки",
      status: "2",
      description: "пойди в Магнит за яблоками",
      id: 2,
    },
    {
      task: "купить корм",
      status: "3",
      description: "пойди в Магнит за кормом для Яры",
      id: 3,
    },
  ],
  todoText: "",
  todoDescription: "",
  todoStatus: "0",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const highestId = Math.max(...state.todoData.map((task) => task.id));
      let newTask = {
        task: state.todoText,
        description: state.todoDescription,
        status: state.todoStatus !== 0 ? state.todoStatus : 1,
        id: highestId + 1,
      };
      if (newTask.task.length > 30) {
        return {
          ...state,
          todoData: [...state.todoData, newTask],
          todoText: "",
          todoDescription: "",
          todoStatus: 0,
        };
      } else {
        alert("Задача должна содержать более 30 символов");
        return state;
      }
    }
    case CHANGE_TASK_STATUS: {
      const { taskId, newStatus } = action;
      const updatedTodoData = state.todoData.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      );
      console.log(updatedTodoData);
      return {
        ...state,
        todoData: updatedTodoData,
      };
    }
    case UPD_NEW_TASK_TEXT:
      const updatedState = {
        ...state,
        todoText: action.newText,
        todoDescription: action.newDescription,
        todoStatus:
          action.newStatus === "number" ? action.newStatus : state.todoStatus,
      };
      return updatedState;
    default:
      return state;
  }
};

export const addTaskAC = () => {
  return { type: ADD_TASK };
};

export const changeTaskStatusAC = (taskId, newStatus) => {
  return {
    type: CHANGE_TASK_STATUS,
    taskId,
    newStatus,
  };
};
export const updNewTaskTextAC = (text, description, status) => {
  return {
    type: UPD_NEW_TASK_TEXT,
    newText: text,
    newDescription: description,
    newStatus: status,
  };
};

export default todoReducer;
