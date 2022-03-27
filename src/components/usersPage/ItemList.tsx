import React from 'react';
import user from "../../store/user";
import {ItemListProps} from "../../common/types";

const ItemList: React.FC<ItemListProps> = ({userItem, index, page}) => {
    const numberItem = (page - 1) * 10 + (index + 1);

    return (
        <>
            {userItem.login ?
                <div className="userItem" onClick={() => user.setLogin(userItem.login!)}>
                    {numberItem}. <span className="userLogin"> {userItem.login} </span>
                    <img className="usersList_avatar" alt="Avatar" src={userItem.avatar_url}/>
                </div> :
                <div className="userItem">
                    {numberItem}. <a className="userLogin" href={userItem.html_url} rel="noreferrer" target="_blank"> {userItem.name} </a>
                </div>
            }
        </>
    )
};

export default ItemList;