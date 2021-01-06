import { Card } from '@material-ui/core';
import React from 'react';

import { ButtonPurple } from '..';

const CardKuis = ({ title, subtitle, soal, waktu, id }) => {
	return (
		<Card elevation={6} className="px-6 py-5 h-full card-kuis">
			<h5 className="title-card">{title}</h5>
			<p className="subtitle-card m-0">{subtitle}</p>
			<p className="text">Jumlah Soal: {soal}</p>
			<p className="text">Waktu Pengerjaan: {waktu}</p>
			<ButtonPurple text="Kerjakan" icon="library_books" href={`/detail/${id}`} />
		</Card>
	);
};

export default CardKuis;
