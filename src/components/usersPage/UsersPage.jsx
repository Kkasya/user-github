import React from 'react';
import SearchInput from "../searchInput/SearchInput";
import './UsersPage.css';
import ListItems from "./ListItems";
import UserProfile from "./UserProfile";
import search from "../../store/search";
import {observer} from "mobx-react-lite";
import Pagination from "../Pagination/Pagination";

const UsersPage =  observer(() => {
  return (
    <div className="usersPage">
      <div className="usersBlock">
        <div>
          <SearchInput/>
          <ListItems users={search.users}/>
          <Pagination
            pageActive = {search.pageActive}
            pagesTotal = {search.pagesTotal}
            setPage = {search.setPageActive} />
        </div>
        <UserProfile/>
      </div>
    </div>
  )
});

export default UsersPage;