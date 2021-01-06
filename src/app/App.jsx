import '../fake-db';
import '../styles/_app.scss';

import history from 'history.js';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import AppContext from './appContext';
import Auth from './auth/Auth';
import AuthGuard from './auth/AuthGuard';
import MatxLayout from './MatxLayout/MatxLayoutSFC';
import MatxTheme from './MatxLayout/MatxTheme/MatxTheme';
import { Store } from './redux/Store';
import routes from './RootRoutes';

console.log("app id======>", process.env);
const App = () => {
	return (
		<AppContext.Provider value={{ routes }}>
			<Provider store={Store}>
				<MatxTheme>
					<Auth>
						<Router history={history}>
							<AuthGuard>
								<MatxLayout />
							</AuthGuard>
						</Router>
					</Auth>
				</MatxTheme>
			</Provider>
		</AppContext.Provider>
	);
};

export default App;
