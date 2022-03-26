import axios from "axios";

const getUsers = async (searchValue) => {
  const response = await axios.get('https://api.github.com/search/users', {
    params: {
      q: searchValue,
      per_page: 10,
      page: 1
    }
  });

  return await response.data.items;
};

const getUserFollowing = async (user) => {
  const response = await axios.get(`https://api.github.com/users/${user}/following`, {
    params: {
      per_page: 10,
      page: 1
    }
  });
  return await response.data;
};

const getUserFollowers = async (user) => {
  const response = await axios.get(`https://api.github.com/users/${user}/followers`, {
    params: {
      per_page: 10,
      page: 1
    }
  });
  return await response.data;
};

const getUserRepos = async (user) => {
  const response = await axios.get(`https://api.github.com/users/${user}/repos`, {
    params: {
      per_page: 10,
      page: 1
    }
  });
  return await response.data;
};

export {getUsers, getUserFollowers, getUserFollowing, getUserRepos};