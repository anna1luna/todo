const ADD_TASK = "ADD-TASK";
const UPD_NEW_TASK_TEXT = "UPD-NEW-TASK-TEXT";
const CHANGE_TASK_STATUS = "CHANGE-TASK-STATUS";
const TOGGLE_SWITCH = "TOGGLE-SWITCH";

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
  switchStates: {
    "custom-switch-1": true,
    "custom-switch-2": false,
    "custom-switch-3": false,
    "custom-switch-4": false,
  },
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const highestId = Math.max(...state.todoData.map((task) => task.id));

      let newTask = {
        task: state.todoText,
        description: state.todoDescription,
        status: state.todoStatus === "0" ? "1" : state.todoStatus,
        id: highestId + 1,
      };
      if (newTask.task.length > 30) {
        return {
          ...state,
          todoData: [...state.todoData, newTask],
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
      return {
        ...state,
        todoData: updatedTodoData,
      };
    }
    case UPD_NEW_TASK_TEXT:
      console.log("action.newStatus:", action.newStatus);
      const updatedState = {
        ...state,
        todoText: action.newText,
        todoDescription: action.newDescription,
        todoStatus:
          typeof action.newStatus !== "undefined"
            ? action.newStatus
            : state.todoStatus,
      };
      console.log(updatedState);
      return updatedState;
    case TOGGLE_SWITCH: {
      const { switchId } = action;
      const updatedSwitchStates = {
        ...state.switchStates,
        [switchId]: !state.switchStates[switchId],
      };
      if (switchId === "custom-switch-1" && updatedSwitchStates[switchId]) {
        // If switch1 is turned on, turn off the other switches
        Object.keys(updatedSwitchStates).forEach((key) => {
          if (key !== switchId) {
            updatedSwitchStates[key] = false;
          }
        });
      } else if (
        switchId !== "custom-switch-1" &&
        updatedSwitchStates[switchId]
      ) {
        // If any other switch is turned on, turn off switch1
        updatedSwitchStates["custom-switch-1"] = false;
      }
      console.log("New Switch States:", updatedSwitchStates);
      return { ...state, switchStates: updatedSwitchStates };
    }
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

export const toggleSwitchAC = (switchId) => {
  return { type: TOGGLE_SWITCH, switchId };
};

export default todoReducer;
