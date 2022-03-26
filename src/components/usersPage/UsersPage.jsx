import React from 'react';
import SearchInput from "../searchInput/SearchInput";
import './UsersPage.css';
import UserList from "./UserList";
import UserProfile from "./UserProfile";
import search from "../../store/search";
import {observer} from "mobx-react-lite";

const UsersPage =  observer(() => {
  return (
    <div className="usersPage">
      <div className="usersBlock">
        <div>
          <SearchInput/>
          <UserList users={search.users}/>
        </div>
        <UserProfile/>
      </div>
    </div>
  )
});

export default UsersPage;