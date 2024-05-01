import "./App.css";
import Todo from "./component/Todo";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
       
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
