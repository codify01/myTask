import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

const App = () => {
	return (
		<Router>
			{/* <AuthProvider> */}
				<AppRoutes />
			{/* </AuthProvider> */}
		</Router>
	);
};

export default App;
