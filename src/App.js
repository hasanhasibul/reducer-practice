
import React,{ createContext, useReducer } from 'react';
import './App.css';
import TopHeadLine from './Conponents/TopHeadLine/TopHeadLine';
import VarChart from './Conponents/VarChart/VarChart';
import Userdata from './Conponents/Userdata';
import User from './Conponents/User';
import { reducer, initialState } from './Conponents/ExplainReducer';


 
export const userContest = createContext();

//  const initialState ={
//   topNews:[],
//   user:[]
// };


//  const reducer =(state,action)=>{
//  switch(action.type){
//      case "ADD_NEWs":
//          const takeData = action.dataNew ;
//          const allData = {...state.topNews,takeData}
//      return {topNews:allData}
//      case "ADD_USERS":
//          const data = action.data;
//              const allNewUser = {...state.user,data}
//              return {user:allNewUser}

//      default: 
//          return state;
//  }

// }

function App() {
  const [state,dispatch] =useReducer(reducer,initialState)
  console.log(state);
  return (
    <userContest.Provider value={{state:state,dispatch:dispatch}}>
      <VarChart></VarChart>
      
      <Userdata></Userdata>
      <TopHeadLine></TopHeadLine>
      <User></User>
      
    </userContest.Provider>
  );
}

export default App;
