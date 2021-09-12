import React, { useContext, useEffect} from 'react';
import { userContest } from './../App';
const Userdata = () => {

    const {state,dispatch} = useContext(userContest)

    useEffect(()=>{
         fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data => {
            dispatch({
                type:"ADD_USERS",data
            })
        })
    },[])
    return (
        <div>
            <h2>user data</h2>
        </div>
    );
};

export default Userdata;