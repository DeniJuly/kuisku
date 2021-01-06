import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import CardBeranda from 'app/components/cards/CardBeranda';
import { SimpleCard } from 'matx';
import React, { Component, Fragment } from 'react';

class Beranda extends Component {
	state = {};

	render() {
		let { theme } = this.props;

		return (
			<div className="m-sm-30">
				<SimpleCard noBorder>
					<Grid container spacing={3}>
						<Grid item lg={3} md={3} sm={3} xs={3}>
							<CardBeranda href="/skd" title="Paket SKD" total={4} bg="bg-gradient-primary" />
						</Grid>
						<Grid item lg={3} md={3} sm={3} xs={3}>
							<CardBeranda href="/skb" title="Paket SKB" total={0} bg="bg-gradient-danger" />
						</Grid>
						<Grid item lg={3} md={3} sm={3} xs={3}>
							<CardBeranda href="/bimbel" title="Paket BIMBEL" total={5} bg="bg-gradient-warning" />
						</Grid>
						<Grid item lg={3} md={3} sm={3} xs={3}>
							<CardBeranda href="/p3k" title="Paket P3K" total={14} bg="bg-gradient-info" />
						</Grid>
					</Grid>
				</SimpleCard>
			</div>
		);
	}
}

export default withStyles({}, { withTheme: true })(Beranda);
