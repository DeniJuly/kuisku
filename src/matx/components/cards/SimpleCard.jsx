import { Card } from '@material-ui/core';
import React from 'react';
import { classList } from 'utils';

const SimpleCard = ({ children, title, subtitle, icon, noBorder }) => {
	return (
		<Card elevation={6} className="px-6 py-5 h-full">
			<div
				className={classList({
					"card-title": true,
					"mb-4": !subtitle,
				})}
			>
				{title}
			</div>
			{subtitle && <div className="card-subtitle mb-4">{subtitle}</div>}
			{!noBorder && <div className="bordered mb-5"></div>}
			{children}
		</Card>
	);
};

export default SimpleCard;
