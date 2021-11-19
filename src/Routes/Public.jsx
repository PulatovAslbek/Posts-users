import React from 'react';
import Users from '../Pages/Users/Users';
import Profile from '../Pages/Profile/Profile';
import { Routes, Route } from 'react-router-dom';
import Header from '../Components/Header/Header';


function Public() {
	return (<>
		<Header/>
		<Routes>
			<Route path='/Users' element={<Users/>}/>
			<Route path='/Profile/:id' element={<Profile/>}/>
		</Routes>
	</>);
}

export default Public;
