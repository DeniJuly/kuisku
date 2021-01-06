import { Button, Icon } from '@material-ui/core';
import React from 'react';

const ButtonDanger = ({ text, icon, href }) => {
	return (
		<Button color="danger" variant="contained" href={href} className="button-danger">
			<Icon>{icon}</Icon>
			<span className="pl-4 text-button">{text}</span>
		</Button>
	);
};

export default ButtonDanger;
