import React from 'react';
import s from './Friends.module.css';
import Friend from "./Friend/Friend";
import StoreContext from "../../StoreContext";
import Friends from "./Friends";

const FriendsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let friends = store.getState().sidebar.friends;
                    return (<Friends friends={friends}/>)
                }
            }
        </StoreContext.Consumer>
    )
};

export default FriendsContainer;