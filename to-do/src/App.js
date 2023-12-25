import "./App.css";
import Header from "./components/header/header";
import SideContainer from "./components/side/sideContainer";
import TasksContainer from "./components/tasks/tasksContainer";

const App = (props) => {
  return (
    <div>
      <Header />
      <div className="body">
        <SideContainer />
        <TasksContainer />
      </div>
    </div>
  );
};

export default App;
