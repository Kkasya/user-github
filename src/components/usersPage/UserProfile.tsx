import React from 'react';
import {observer} from "mobx-react-lite";
import user from "../../store/user";
import ListItems from "./ListItems";
import Pagination from "../Pagination/Pagination";

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
                {(user.tab === 1) && (
                    user.following.length ? <>
                        <ListItems list={user.following} pageActive={user.pageFollowing}/>
                        <Pagination
                            pageActive={user.pageFollowing}
                            pagesTotal={user.pageFollowingTotal}
                            setPage={user.setPageFollowing}/>
                    </> : 'No data')}
                {(user.tab === 2) && (
                    user.followers.length ? <>
                        <ListItems list={user.followers} pageActive={user.pageFollowers}/>
                        <Pagination
                            pageActive={user.pageFollowers}
                            pagesTotal={user.pageFollowersTotal}
                            setPage={user.setPageFollowers}/>
                    </> : 'No data')}
                {(user.tab === 3) && (
                    user.repos.length ? <>
                        <ListItems list={user.repos} pageActive={user.pageRepos}/>
                        <Pagination
                            pageActive={user.pageRepos}
                            pagesTotal={user.pageReposTotal}
                            setPage={user.setPageRepos}/>
                    </> : 'No data')}
            </div>
        </div>)
});

export default UserProfile;