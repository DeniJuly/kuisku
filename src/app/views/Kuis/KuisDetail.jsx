import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import { ButtonDanger, ButtonPurple } from 'app/components';
import { Breadcrumb, SimpleCard } from 'matx';
import React from 'react';
import { Component } from 'react';

import Quis from '../../../fake-db/db/quis';

class KuisDetail extends Component {
	constructor() {
		super();
		this.state = {
			id: "",
			title: "",
			subtitle: "",
			jml_soal: "",
			waktu: "",
		};
	}
	componentDidMount() {
		const { id } = this.props.match.params;
		let detailQuis = Quis.list.filter((item) => item.id == id);
		if (detailQuis.length > 0) {
			this.setState({
				id: detailQuis[0].id,
				title: detailQuis[0].title,
				subtitle: detailQuis[0].subtitle,
				jml_soal: detailQuis[0].jml_soal,
				waktu: detailQuis[0].waktu,
			});
		}
	}
	render() {
		const { title, subtitle, jml_soal, waktu, id } = this.state;
		return (
			<div className="m-sm-30">
				<div className="mb-sm-30">
					<Breadcrumb routeSegments={[{ name: "kuis", path: "/kuis" }, { name: "Kuis Detail" }]} />
				</div>
				<SimpleCard title={title} subtitle={subtitle}>
					<Table className="mb-10">
						<TableBody>
							<TableRow>
								<TableCell className="px-0 py-4 font-semibold">Jumlah Soal</TableCell>
								<TableCell className="px-0 py-4 capitalize">{jml_soal}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="px-0 py-4 font-semibold">Waktu Pengerjaan</TableCell>
								<TableCell className="px-0 py-4 capitalize">{waktu}</TableCell>
							</TableRow>
						</TableBody>
					</Table>
					<div className="flex">
						<ButtonPurple text="Kerjakan Sekarang" icon="library_books" href={`/kerjakan/${id}/1`} />
						<div className="ml-3"></div>
						<ButtonDanger text="Batal" icon="block" href={`kuis`} />
					</div>
				</SimpleCard>
			</div>
		);
	}
}

export default KuisDetail;
