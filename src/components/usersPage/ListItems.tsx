import React from 'react';
import ItemList from "./ItemList";
import {ListProps} from "../../common/types";

const ListItems: React.FC<ListProps> =({list, pageActive}) => {

  return (
    <div className="usersList">
      {list.map((item, index) =>
        <ItemList
          userItem={item}
          index={index}
          page={pageActive}
          key={item.id}/>)}
    </div>)
};

export default ListItems;