import {makeAutoObservable} from "mobx";
import {getUserFollowers, getUserFollowing, getUserProfile, getUserRepos} from "../common/fetch";

class User {
  tab = 1;
  login = 'User'
  following = [];
  followers = [];
  repos = [];
  pageFollowing = 1;
  pageFollowers = 1;
  pageRepos = 1;

  constructor() {
    makeAutoObservable(this)
  };

  getUserProfile = async(login) => {
    this.following = await getUserFollowing(login);
    this.followers = await getUserFollowers(login);
    this.repos = await getUserRepos(login);
  };

  setTab = (number) => this.tab = number;

  setLogin = async (login) => {
    this.login = login;
    await this.getUserProfile(login);
  };

  setPageFollowing = async (page) => {
    this.pageFollowing = page;
    this.following = await getUserFollowing(this.login);
  };

  setPageFollowers = async (page) => {
    this.pageFollowers = page;
    this.followers = await getUserFollowers(this.login);
  };

  setPageRepos = async (page) => {
    this.pageRepos = page;
    this.repos = await getUserRepos(this.login);
  };
}

export default new User();