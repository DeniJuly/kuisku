import { Card, Grid } from '@material-ui/core';
import React from 'react';
import { classList } from 'utils';

const CardNomorSoal = ({ title, soal, no_soal, id_quis }) => {
	return (
		<Card elevation={6} className="px-6 py-5 h-full card-soal">
			<h5
				className={classList({
					"card-title": true,
				})}
			>
				{title}
			</h5>
			<div className="bordered mb-5"></div>
			<Grid container spacing={2}>
				{soal.map((item, index) => (
					<Grid item lg={3} md={3} sm={3} xs={3}>
						<a href={`/kerjakan/${id_quis}/${index + 1}`} className={`btn-nomor-soal m-auto ${no_soal == index + 1 ? "active" : ""}`}>
							{index + 1}
						</a>
					</Grid>
				))}
			</Grid>
		</Card>
	);
};

export default CardNomorSoal;
