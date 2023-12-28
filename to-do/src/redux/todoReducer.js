const ADD_TASK = "ADD-TASK";
const UPD_NEW_TASK_TEXT = "UPD-NEW-TASK-TEXT";
const CHANGE_TASK_STATUS = "CHANGE-TASK-STATUS";
const TOGGLE_SWITCH = "TOGGLE-SWITCH";

let initialState = {
  todoData: [
    {
      task: "Сделать приложение React-Redux в соответствии с ТЗ ARC REACH",
      status: "3",
      description:
        "1) добавление новой задачи, 2) добавление описания, 3) новая задача больше 30 символов, 4) отображеие списка задач, 5) переключение статуса задач, 6) фильтрация по статусу, 7) счетчик выполненных задач",
      id: 1,
    },
    {
      task: "Отправить приложение на гит/ гит страницы",
      status: "2",
      description: "После окончания задачи отправить вместе с резюме ссылку",
      id: 2,
    },
    {
      task: "Написать RTK запрос",
      status: "1",
      description: "ВНИМАНИЕ! Шаблон запроса будет в txt формате",
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
        status: "1",
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
      console.log("typeof action.newStatus:", typeof action.newStatus);
      const newStatus = parseInt(action.newStatus, 10);
      const updatedState = {
        ...state,
        todoText: action.newText,
        todoDescription: action.newDescription,
        todoStatus: "1",
      };

      return updatedState;

    case TOGGLE_SWITCH: {
      const { switchId } = action;
      const updatedSwitchStates = {
        ...state.switchStates,
        [switchId]: !state.switchStates[switchId],
      };
      if (switchId === "custom-switch-1" && updatedSwitchStates[switchId]) {
        Object.keys(updatedSwitchStates).forEach((key) => {
          if (key !== switchId) {
            updatedSwitchStates[key] = false;
          }
        });
      } else if (
        switchId !== "custom-switch-1" &&
        updatedSwitchStates[switchId]
      ) {
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
