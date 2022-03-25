import {makeAutoObservable} from "mobx";
import {getUserProfile} from "../common/fetch";

class Search {
  searchValue = '';
  users = [];

  constructor() {
    makeAutoObservable(this)
  };

  setSearchValue = (value) => {
    console.log(value)

    this.searchValue = value;
  };

   getUsers = async() => {

     this.users = await getUserProfile(this.searchValue);
    console.log(this.users)
  };
}

export default new Search();