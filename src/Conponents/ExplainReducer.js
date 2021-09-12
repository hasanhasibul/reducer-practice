 export const initialState ={
     topNews:[],
     user:[]
 };


export const reducer = ( state,action)=>{
    switch(action.type){
        case "ADD_NEWs":
            const newData = action.newData ;
            const allData = {...state.topNews,newData}
        return {allData}
        case "ADD_USERS":
            const data = action.data;
                const allNewUser = {...state.user,data}
                return {allNewUser}

        default: 
            return state;
    }

}