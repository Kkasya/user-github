import {makeAutoObservable} from "mobx";
import {getUserProfile} from "../common/fetch";

class User {
  following = [];
  followers = [];
  repos = [];

  constructor() {
    makeAutoObservable(this)
  };

  getUserProfile = async() => {
    this.users = await getUserProfile(this.searchValue);
  };
}

export default new User();