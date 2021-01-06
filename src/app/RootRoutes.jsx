import React from 'react';
import { Redirect } from 'react-router-dom';

import dashboardRoutes from './views/dashboard/DashboardRoutes';
import dragAndDropRoute from './views/Drag&Drop/DragAndDropRoute';
import formsRoutes from './views/forms/FormsRoutes';
import KuisRoute from './views/Kuis/KuisRoute';
import mapRoutes from './views/map/MapRoutes';
import materialRoutes from './views/material-kit/MaterialRoutes';
import sessionRoutes from './views/sessions/SessionRoutes';
import utilitiesRoutes from './views/utilities/UtilitiesRoutes';

const redirectRoute = [
	{
		path: "/",
		exact: true,
		component: () => <Redirect to="/dashboard/analytics" />,
	},
];

const errorRoute = [
	{
		component: () => <Redirect to="/session/404" />,
	},
];

const routes = [
	...KuisRoute,
	...sessionRoutes,
	...dashboardRoutes,
	...materialRoutes,
	...utilitiesRoutes,
	...dragAndDropRoute,
	...formsRoutes,
	...mapRoutes,
	...redirectRoute,
	...errorRoute,
];

export default routes;
