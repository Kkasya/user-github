import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import search from "../../store/search";
import './SearchInput.css';
import UsersPage from "../usersPage/UsersPage";
import MainPage from "../mainPage/MainPage";

const SearchInput = observer(() => {
  const [isError, setIsError] = useState(false);
  const classError = isError ? 'error__visible' : 'error__hide';
  const classSearch = search.users.length ? 'search__right' : 'search__center';

  const setSearchValue = (value) => search.setSearchValue(value);

  const getUsers = () => {
    if (search.searchValue) {
      setIsError(false);
      search.getUsers();
    } else {
      setIsError(true);
    }
  };

  return (
    <div className={`search ${classSearch}`}>
      {!search.users.length && <p className="search_value">Search by value: </p>}
      <div>
        <input className="search_input text" onChange={(e) => setSearchValue(e.target.value)} />
        <button className="search_button text" onClick={() => getUsers()}>Search</button>
      </div>
      <p className={`error text ${classError}`}>You must enter a value</p>
    </div>
  )
});

export default SearchInput;