import React, { useEffect, useState} from 'react'
import { app } from 'firebase';
//import {  } from '';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) =>{
	const [currentUser, setCurrentUser]= useState(null);

	useEffect(()=>{
		app.auth.onAuthStateChange(setCurrentUser);
	}, []);

	return (
		<AuthContext.Provider
		value={{
			currentUser
		}}
		>
			{children}
		</AuthContext.Provider>
	);

};