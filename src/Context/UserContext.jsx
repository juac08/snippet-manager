import axios from 'axios';
import React, { createContext,useState,useEffect } from 'react';

const UserContext = createContext();

const UserContextProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [logout, isLogout]=React.useState(false);


    async function getUser(){
    const userRes= await axios.get('http://localhost:5000/auth/loggedin/');
     setUser(userRes.data);   
    }
useEffect(()=>{
getUser();
    },[]);

    return (
        <UserContext.Provider
        value={{
            user,
            getUser,
            logout,
            isLogout
            
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export {UserContextProvider};
export default UserContext;
