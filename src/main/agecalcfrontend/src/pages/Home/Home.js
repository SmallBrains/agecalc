import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import moment from "moment";


class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dateFrom: new Date(),
			dateTo: new Date(),
			msg: ""
		};
		this.handleDateFromChange = this.handleDateFromChange.bind(this);
		this.handleDateToChange = this.handleDateToChange.bind(this);
		this.performCalculation = this.performCalculation.bind(this);

	}

	handleDateFromChange(date) {
		this.setState({ dateFrom: date });
	}

	handleDateToChange(date) {
		this.setState({ dateTo: date });
	}

	performCalculation() {
		axios.get(`/api/calc/ageCalc?fromDt=${moment(this.state.dateFrom).format("YYYY-MM-DD")}&toDt=${moment(this.state.dateTo).format("YYYY-MM-DD")}`)
			.then(response => this.setState({ msg: response.data }))
			.catch(error => {
				this.setState({ msg: error.message });
				console.error('There was an error!', error);
			});
	}

	render() {
		return (
			<div>
				<Container>
					<Row >
						<Col >Age Calculator </Col>
					</Row>
					<Row >
						<Col > Date Of Birth /From Date </Col>
						<Col><DatePicker selected={this.state.dateFrom}
							onChange={this.handleDateFromChange} dateFromat='YYYY-MM-dd' /></Col>
					</Row>
					<Row >
						<Col > Age upto date </Col>
						<Col><DatePicker selected={this.state.dateTo}
							onChange={this.handleDateToChange} dateFromat='YYYY-MM-dd' /></Col>

					</Row>
					<Row >
						<Col ><button onClick={this.performCalculation}>
							Calculate
								</button> </Col>
					</Row>
					<Row >
						<Col >{this.state.msg} 
						</Col>
					</Row>
				</Container>
			</div >
		)
	}
}

export default Home;