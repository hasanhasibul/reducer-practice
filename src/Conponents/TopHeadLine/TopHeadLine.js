
import React, { useContext, useEffect, useReducer, useState } from 'react';
import News from '../News/News';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { userContest } from './../../App';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const TopHeadLine = () => {
    
  const {state,dispatch} = useContext(userContest)
  

  useEffect (()=>{
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c10b8cb120554afe876392e892046eba')
      .then(res =>res.json())
      .then(data =>{
       const newData =  data.data.articles;
       dispatch({type:"ADD_NEWs",newData})
      })
        
  },[])
    const classes = useStyles();
    console.log(state);
    return (
        <div style={{padding:'0px 20px'}}>
        <Grid container spacing={3}>
          
            {
               state.topNews.takeData && state.topNews.takeData.map(nw => <News article={nw}></News>)
            }
        </Grid>
        </div>
    );
};

export default TopHeadLine;