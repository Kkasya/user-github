import React from 'react';
import './App.css';
import search from "../../store/search";
import {observer} from "mobx-react-lite";
import UsersPage from "../usersPage/UsersPage";
import MainPage from "../mainPage/MainPage";

const App = observer( () => {

  return (
    <div className="App">
      <p className="headline">Github users</p>
      {search.users.length ? <UsersPage /> : <MainPage />}
    </div>
  );
});

export default App;
