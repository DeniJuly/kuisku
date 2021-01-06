import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { CardNomorSoal, CardSoal } from 'app/components';
import { setDefaultSettings, setLayoutSettings } from 'app/redux/actions/LayoutActions';
import { merge } from 'lodash';
import { CardKerjakanKuis } from 'matx';
import PropTypes from 'prop-types';
import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { isMdScreen } from 'utils';

import Quis from '../../../fake-db/db/quis';

const styles = (theme) => ({});
class KuisKerjakan extends Component {
	constructor() {
		super();
		this.state = {
			id_soal: "",
			id_quis: "",
			soal: "",
			title: "",
			jawaban: [],
			no_soal: "",
			dataSoal: [],
		};
	}

	handleSidenavToggle = () => {
		let {
			settings: {
				layout1Settings: {
					leftSidebar: { mode },
				},
			},
		} = this.props;

		console.log(mode);

		this.updateSidebarMode({ mode: mode === "compact" ? "full" : "compact" });
	};

	updateSidebarMode = (sidebarSettings) => {
		let { settings, setLayoutSettings, setDefaultSettings } = this.props;
		const updatedSettings = merge({}, settings, {
			layout1Settings: {
				leftSidebar: {
					...sidebarSettings,
				},
			},
		});

		setLayoutSettings(updatedSettings);
		setDefaultSettings(updatedSettings);
	};

	componentDidMount() {
		this.handleSidebar();
		const { id_soal, id_quis } = this.props.match.params;
		let detailSoal = Quis.soal.filter((item) => item.id_quis == id_quis);
		let detailQuis = Quis.list.filter((item) => item.id == id_quis);
		let jawaban = Quis.pilgan.filter((item) => item.id_soal == detailSoal[id_soal - 1].id);
		if (detailSoal.length > 0) {
			this.setState({
				id_soal: detailSoal[id_soal - 1].id,
				id_quis: id_quis,
				soal: detailSoal[id_soal - 1].soal,
				title: detailQuis[0].title,
				jawaban: jawaban,
				no_soal: id_soal,
				dataSoal: detailSoal,
			});
		}
	}
	componentWillUnmount() {
		this.handleSidebar();
	}
	handleSidebar = () => {
		let {
			settings: {
				layout1Settings: {
					leftSidebar: { mode },
				},
			},
		} = this.props;
		let sideMode;
		if (isMdScreen()) {
			sideMode = "close";
		} else {
			sideMode = "compact";
		}
		this.updateSidebarMode({ mode: sideMode });
	};
	render() {
		const { title, soal, id_soal, jawaban, id_quis, no_soal, dataSoal } = this.state;
		return (
			<div className="m-sm-30">
				<CardKerjakanKuis title={title} expired={60}>
					<Grid container spacing={3}>
						<Grid item lg={9} m={9} sm={12} xs={12}>
							<CardSoal title={`Soal Nomor ${id_soal}`} soal={soal} jawaban={jawaban} id_quis={id_quis} id_soal={no_soal} />
						</Grid>
						<Grid item lg={3} m={3} sm={12} xs={12}>
							<CardNomorSoal title="Nomor Soal" soal={dataSoal} no_soal={no_soal} id_quis={id_quis}></CardNomorSoal>
						</Grid>
					</Grid>
				</CardKerjakanKuis>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	setDefaultSettings: PropTypes.func.isRequired,
	setLayoutSettings: PropTypes.func.isRequired,
	logoutUser: PropTypes.func.isRequired,
	user: state.user,
	settings: state.layout.settings,
});

export default withStyles(styles, { withTheme: true })(
	withRouter(
		connect(mapStateToProps, {
			setLayoutSettings,
			setDefaultSettings,
		})(KuisKerjakan)
	)
);
