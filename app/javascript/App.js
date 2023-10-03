import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Greeting from "./Greeting";
import store from "../../store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
