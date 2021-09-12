import React, { useContext } from 'react';
import { userContest } from './../App';

const User = () => {
    const {state,dispatch} = useContext(userContest)
    console.log( "hello", state);
    return (
        <div>
            <h2>hello</h2>
        </div>
    );
};

export default User;