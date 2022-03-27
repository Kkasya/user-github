import React from 'react';
import ItemList from "./ItemList";

const ListItems =({users}) => {

  return (
    <div className="usersList">
      {users.map((user, index) =>
        <ItemList
          userItem={user}
          index={index}
          key={user.id}/>)}
    </div>)
};

export default ListItems;