import "./App.css";
import Header from "./components/header/header";
import TodoContainer from "./components/todo/todoContainer";

const App = (props) => {
  return (
    <div>
      <Header />
      <div className="body">
        <TodoContainer />
      </div>
    </div>
  );
};

export default App;
