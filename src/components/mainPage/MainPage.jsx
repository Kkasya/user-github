import React from 'react';
import {observer} from "mobx-react-lite";
import SearchInput from "../searchInput/SearchInput";

const MainPage = observer(() => {
  return (
    <div className="main">
      <SearchInput />
    </div>
  )
});

export default MainPage;
