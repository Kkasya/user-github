import {makeAutoObservable} from "mobx";
import {getUsers} from "../common/fetch";

class Search {
  searchValue = '';
  users = [];
  pageActive = 1;
  pagesTotal = 1;
  per_page = 10;

  constructor() {
    makeAutoObservable(this)
  };

  setSearchValue = (value) => this.searchValue = value;

  getUsers = async () => {
    const data = await getUsers(this.searchValue);
    this.users = data.items;
    this.pagesTotal = Math.ceil(data.total_count / 10)
  };

  setPageActive = async (page) => {
    this.pageActive = page;
    await this.getUsers();
  };
}

export default new Search();