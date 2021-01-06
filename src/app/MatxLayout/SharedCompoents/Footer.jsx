import { AppBar, Toolbar } from '@material-ui/core';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const Footer = ({ theme, settings }) => {
	const footerTheme = settings.themes[settings.footer.theme] || theme;
	return (
		<ThemeProvider theme={footerTheme}>
			<AppBar color="primary" position="static">
				<Toolbar className="footer flex items-center">
					<div className="flex items-center container w-full">
						<span className="m-auto"></span>
						<p className="m-0">
							KuisKu by <a href="https://www.instagram.com/deni_jsa/">Deni Juli Setiawan</a>
						</p>
					</div>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
};

Footer.propTypes = {
	settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	settings: state.layout.settings,
});

export default withStyles({}, { withTheme: true })(connect(mapStateToProps, {})(Footer));
