import axios from "axios";

const getUserProfile = async (searchValue) => {
  const response = await axios.get('https://api.github.com/search/users', {
    params: {
      q: searchValue,
      per_page: 20,
      page: 1
    }
  });

  return await response.data.items;
};

export {getUserProfile};