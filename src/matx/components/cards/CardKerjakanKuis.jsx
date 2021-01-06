import { Card, Icon } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { classList } from 'utils';

const CardKerjakanKuis = ({ children, title, subtitle, icon, expired }) => {
	const [Countdown, setCountdown] = useState("");
	const handleCountdown = () => {
		var countDownDate = new Date("Jan 6, 2021 15:41:00").getTime() + expired * 60000;
		var x = setInterval(function () {
			var now = new Date().getTime();
			var distance = countDownDate - now;
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);
			setCountdown(minutes + ":" + seconds);
			if (distance < 0) {
				clearInterval(x);
				setCountdown("EXPIRED");
			}
		}, 1000);
	};
	handleCountdown();
	return (
		<Card elevation={0} className="px-6 py-5 h-full" style={{ background: "transparent" }}>
			<div className="flex justify-between">
				<div
					className={classList({
						"card-title": true,
						"mb-4": !subtitle,
					})}
				>
					{title}
				</div>
				{subtitle && <div className="card-subtitle mb-4">{subtitle}</div>}
				{expired && (
					<div className="flex items-center">
						<Icon>access_time</Icon>
						<h5 className="m-0 ml-2">{Countdown}</h5>
					</div>
				)}
			</div>
			<div className="bordered mb-5"></div>
			{children}
		</Card>
	);
};

export default CardKerjakanKuis;
