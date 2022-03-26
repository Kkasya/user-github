import {makeAutoObservable} from "mobx";
import {getUsers} from "../common/fetch";

class Search {
  searchValue = '';
  users = [];

  constructor() {
    makeAutoObservable(this)
  };

  setSearchValue = (value) => {
    this.searchValue = value;
  };

   getUsers = async() => {
     this.users = await getUsers(this.searchValue);
  };
}

export default new Search();