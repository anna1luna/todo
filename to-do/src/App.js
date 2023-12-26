import "./App.css";
import Header from "./components/header/header";
import SideContainer from "./components/side/sideContainer";
import TodoContainer from "./components/todo/todoContainer";

const App = (props) => {
  return (
    <div>
      <Header />
      <div className="body">
        <SideContainer />
        <TodoContainer />
      </div>
    </div>
  );
};

export default App;
