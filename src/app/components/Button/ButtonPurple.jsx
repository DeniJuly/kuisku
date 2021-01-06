import { Button, Icon } from '@material-ui/core';
import React from 'react';

const ButtonPurple = ({ text, icon, href }) => {
	return (
		<Button color="primary" variant="contained" href={href} className="button-purple">
			<Icon>{icon}</Icon>
			<span className="pl-4 text-button">{text}</span>
		</Button>
	);
};

export default ButtonPurple;
