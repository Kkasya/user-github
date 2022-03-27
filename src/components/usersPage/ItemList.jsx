import React from 'react';
import user from "../../store/user";

const ItemList = ({userItem, index}) => {

  return (
    <>
      {userItem.login ?
        <div className="userItem" onClick={() => user.setLogin(userItem.login)}>
          {index + 1}. <span className="userLogin"> {userItem.login} </span>
          <img className="usersList_avatar" alt="Avatar" src={userItem.avatar_url}/>
        </div> :
        <div className="userItem" >
          {index + 1}. <a className="userLogin" href={userItem.html_url} target="_blank"> {userItem.name} </a>
        </div>
      }
      </>
   )
};

export default ItemList;