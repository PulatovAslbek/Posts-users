import { React } from 'react';
import './App.scss';
import Private from './Routes/Private'
import Public from './Routes/Public'
import useToken from './Hooks/useToken';

function App() {

	
	const [token] = useToken();

	if(token){
		return <Public />

	}else{
		return <Private />
	}

}

export default App;
