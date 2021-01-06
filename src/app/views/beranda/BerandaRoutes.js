import React from 'react';

import { authRoles } from '../../auth/authRoles';

const BerandaRoutes = [
	{
		path: "/beranda",
		component: React.lazy(() => import("./Beranda")),
		auth: authRoles.admin,
	},
];

export default BerandaRoutes;
