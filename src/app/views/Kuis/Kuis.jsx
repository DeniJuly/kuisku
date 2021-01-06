import { Grid } from '@material-ui/core';
import { CardKuis } from 'app/components';
import { Breadcrumb, SimpleCard } from 'matx';
import React from 'react';

import Quis from '../../../fake-db/db/quis';

const Kuis = () => {
	return (
		<div className="m-sm-30">
			<div className="mb-sm-30">
				<Breadcrumb routeSegments={[{ name: "kuis", path: "/kuis" }]} />
			</div>
			<SimpleCard title="Kuis Ku" subtitle="Berikut daftar materi kuisku">
				<Grid container spacing={3}>
					{Quis.list.map((item) => (
						<Grid item lg={4} md={4} sm={12} xs={12}>
							<CardKuis title={item.title} subtitle={item.subtitle} id={item.id} soal={item.jml_soal} waktu={item.waktu} />
						</Grid>
					))}
				</Grid>
			</SimpleCard>
		</div>
	);
};

export default Kuis;
