import React from 'react';

const KuisRoute = [
	{
		path: "/kuis",
		component: React.lazy(() => import("./Kuis")),
	},
	{
		path: "/detail/:id",
		component: React.lazy(() => import("./KuisDetail")),
	},
	{
		path: "/kerjakan/:id_quis/:id_soal",
		component: React.lazy(() => import("./KuisKerjakan")),
	},
];

export default KuisRoute;
