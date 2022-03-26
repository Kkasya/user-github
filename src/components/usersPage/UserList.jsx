import React from 'react';
import UserListItem from "./UserListItem";

const UserList =({users}) => {

  return (
    <div className="usersList">
      {users.map((user, index) =>
        <UserListItem
          userItem={user}
          index={index}
          key={user.id}/>)}
    </div>)
};

export default UserList;