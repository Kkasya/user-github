import {makeAutoObservable} from "mobx";
import {getUserFollowers, getUserFollowing, getUserProfile, getUserRepos} from "../common/fetch";

class User {
  tab = 1;
  login = 'User'
  following = [];
  followers = [];
  repos = [];

  constructor() {
    makeAutoObservable(this)
  };

  getUserProfile = async(login) => {
    this.following = await getUserFollowing(login);
    this.followers = await getUserFollowers(login);
    this.repos = await getUserRepos(login);
    console.log(this.repos)
  };

  setTab = (number) => this.tab = number;

  setLogin = (login) => {
    this.login = login;
    this.getUserProfile(login);
  }
}

export default new User();