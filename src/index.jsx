import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider as AuthProvider } from './Context/Authentication';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<App />
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
