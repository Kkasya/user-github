import React from 'react';
import search from "../../store/search";
import {observer} from "mobx-react-lite";
import user from "../../store/user";
import UserList from "./UserList";

const UserProfile = observer(() => {
  const tabs = {
    first: (user.tab === 1) ? 'tab__active' : '',
    second: (user.tab === 2) ? 'tab__active' : '',
    third: (user.tab === 3) ? 'tab__active' : ''
  };

  return (
    <div className="userProfile">
      <p className="userProfile_headline">{user.login} profile</p>
      <div className="tabs">
        <div className={`tab ${tabs.first}`} onClick={() => user.setTab(1)}>Following</div>
        <div className={`tab ${tabs.second}`} onClick={() => user.setTab(2)}>Followers</div>
        <div className={`tab ${tabs.third}`} onClick={() => user.setTab(3)}>Repos</div>
      </div>
      <div className="userProfile_data">
        {(user.tab === 1) && <UserList users={user.following}/>}
        {(user.tab === 2) && <UserList users={user.followers}/>}
        {(user.tab === 3) && <UserList users={user.repos}/>}
      </div>
    </div>)
});

export default UserProfile;