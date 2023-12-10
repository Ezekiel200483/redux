import "./App.css"
import React from "react";
import { Provider } from "react-redux";

import AddTask from "./components/Addtask";

import ListTask from "./components/ListTask"
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>ToDo App</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;
