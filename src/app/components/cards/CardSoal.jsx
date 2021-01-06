import { Card, FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import React from 'react';
import { classList } from 'utils';

import { ButtonPurple } from '..';

const CardSoal = ({ title, subtitle, icon, soal, jawaban, id_quis, id_soal }) => {
	return (
		<Card elevation={6} className="px-6 py-5 h-full card-soal">
			<h5
				className={classList({
					"card-title": true,
					"mb-4": !subtitle,
				})}
			>
				{title}
			</h5>
			{subtitle && <div className="card-subtitle mb-4">{subtitle}</div>}
			<div className="bordered mb-5"></div>
			<p className="soal">{soal}</p>
			<FormControl component="fieldset" className="w-full">
				<RadioGroup aria-label="jawaban" name="jawaban">
					{jawaban.map((item) => (
						<FormControlLabel
							value={item.kode_jawaban}
							control={<Radio color="primary" />}
							label={`${item.kode_jawaban}. ${item.jawaban}`}
						/>
					))}
				</RadioGroup>
			</FormControl>
			<div className="mb-5"></div>
			<ButtonPurple icon="chevron_right" text="Selanjutnya" href={`/kerjakan/${id_quis}/${parseInt(id_soal) + 1}`} />
		</Card>
	);
};

export default CardSoal;
