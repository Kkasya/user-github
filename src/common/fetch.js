import axios from "axios";
import search from "../store/search";

const getUsers = async (searchValue) => {
  const response = await axios.get('https://api.github.com/search/users', {
    params: {
      q: searchValue,
      per_page: search.per_page,
      page: search.pageActive
    }
  });

  return await response.data;
};

const getUserFollowing = async (user) => {
  const response = await axios.get(`https://api.github.com/users/${user}/following`, {
    params: {
      per_page: search.per_page,
      page: user.pageFollowing
    }
  });
  return await response.data;
};

const getUserFollowers = async (user) => {
  const response = await axios.get(`https://api.github.com/users/${user}/followers`, {
    params: {
      per_page: search.per_page,
      page: user.pageFollowers
    }
  });
  return await response.data;
};

const getUserRepos = async (user) => {
  const response = await axios.get(`https://api.github.com/users/${user}/repos`, {
    params: {
      per_page: search.per_page,
      page: user.pageRepos
    }
  });
  return await response.data;
};

export {getUsers, getUserFollowers, getUserFollowing, getUserRepos};