import { Card } from '@material-ui/core';
import React from 'react';

const CardBeranda = ({ title, total, bg, href }) => {
	return (
		<Card elevation={0} className={`px-4 py-2 h-full card-kuis card-beranda text-center ${bg} text-white`}>
			<a href={href} className="w-100 h-100 items-center justify-center m-auto flex flex-column">
				<h6 className="title-card-beranda">{title}</h6>
				<h2 className="subtitle-card-beranda">{total}</h2>
			</a>
		</Card>
	);
};

export default CardBeranda;
