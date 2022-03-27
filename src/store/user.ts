import {makeAutoObservable} from "mobx";
import {
    getUserFollowers,
    getUserFollowersAll,
    getUserFollowing,
    getUserFollowingAll,
    getUserRepos, getUserReposAll
} from "../common/fetch";

class User {
    tab = 1;
    login = 'User'
    following = [];
    followers = [];
    repos = [];
    pageFollowing = 1;
    pageFollowers = 1;
    pageRepos = 1;
    pageFollowingTotal = 1;
    pageFollowersTotal = 1;
    pageReposTotal = 1;

    constructor() {
        makeAutoObservable(this)
    };

    getUserProfile = async (login: string) => {
        this.following = await getUserFollowing(login);
        this.followers = await getUserFollowers(login);
        this.repos = await getUserRepos(login);
        this.pageFollowingTotal = Math.ceil(await getUserFollowingAll(this.login) / 10);
        this.pageFollowersTotal = Math.ceil(await getUserFollowersAll(this.login) / 10);
        this.pageReposTotal = Math.ceil(await getUserReposAll(this.login) / 10);
    };

    setTab = (number: number) => this.tab = number;

    setLogin = async (login: string) => {
        this.login = login;
        await this.getUserProfile(login);
    };

    setPageFollowing = async (page: number) => {
        this.pageFollowing = page;
        this.following = await getUserFollowing(this.login);
    };

    setPageFollowers = async (page: number) => {
        this.pageFollowers = page;
        this.followers = await getUserFollowers(this.login);
    };

    setPageRepos = async (page: number) => {
        this.pageRepos = page;
        this.repos = await getUserRepos(this.login);
    };
}

export default new User();