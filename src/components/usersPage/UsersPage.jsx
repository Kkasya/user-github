import React from 'react';
import {observer} from "mobx-react-lite";
import SearchInput from "../searchInput/SearchInput";
import search from "../../store/search";
import './UsersPage.css';

const UsersPage = observer(() => {
return (
  <div className="usersPage">
    <SearchInput />
    <div className="usersList">
      {search.users.map((user, index) => {
        return <div className="userItem" key={user.id}>
          {index+1}. <span className="userLogin"> {user.login} </span>
          <img className="usersList_avatar" src={user.avatar_url}/>
        </div>
      })}
    </div>
  </div>
)
});

export default UsersPage;