import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import search from "../../store/search";
import './SearchInput.css';

const SearchInput = observer(() => {
  const [isError, setIsError] = useState(false);
  const classError = isError ? 'error__visible' : 'error__hide';

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
    <div className="search">
      <p className="search_Value">Search by value: </p>
      <input onChange={(e) => setSearchValue(e.target.value)} />
      <button onClick={() => getUsers()}>Search</button>
      <p className={`error ${classError}`}>You must enter a value</p>
    </div>
  )
});

export default SearchInput;