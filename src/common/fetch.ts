import axios from "axios";
import search from "../store/search";
import user from "../store/user";

const getUsers = async (searchValue: string) => {
    const response = await axios.get('https://api.github.com/search/users', {
        params: {
            q: searchValue,
            per_page: search.per_page,
            page: search.pageActive
        }
    });

    return await response.data;
};

const getUserFollowing = async (userCurrent: string) => {
    const response = await axios.get(`https://api.github.com/users/${userCurrent}/following`, {
        params: {
            per_page: search.per_page,
            page: user.pageFollowing
        }
    });
    return await response.data;
};

const getUserFollowers = async (userCurrent: string) => {
    const response = await axios.get(`https://api.github.com/users/${userCurrent}/followers`, {
        params: {
            per_page: search.per_page,
            page: user.pageFollowers
        }
    });
    return await response.data;
};

const getUserRepos = async (userCurrent: string) => {
    const response = await axios.get(`https://api.github.com/users/${userCurrent}/repos`, {
        params: {
            per_page: search.per_page,
            page: user.pageRepos
        }
    });
    return await response.data;
};

const getUserFollowingAll = async (userCurrent: string) => {
    const response = await axios.get(`https://api.github.com/users/${userCurrent}/following`);
    return await response.data.length;
};

const getUserFollowersAll = async (userCurrent: string) => {
    const response = await axios.get(`https://api.github.com/users/${userCurrent}/followers`);
    return await response.data.length;
};

const getUserReposAll = async (userCurrent: string) => {
    const response = await axios.get(`https://api.github.com/users/${userCurrent}/repos`);
    return await response.data.length;
};

export {
    getUsers,
    getUserFollowers,
    getUserFollowing,
    getUserRepos,
    getUserFollowersAll,
    getUserFollowingAll,
    getUserReposAll
};