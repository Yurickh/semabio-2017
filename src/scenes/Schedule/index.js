import React, { Component } from 'react'

import Title from '../../components/Title'

import './styles.css'

class Schedule extends Component {
	render() {
		return (
			<section className="page-schedule">
				<Title>Cronograma</Title>

				<div className="week-picker">
					<div className="day -selected">SEG</div>
					<div className="day">TER</div>
					<div className="day">QUA</div>
					<div className="day">QUI</div>
					<div className="day">SEX</div>
					<div className="day">SAB</div>
					<div className="day">DOM</div>
				</div>
			</section>
		)
	}
}

export default Schedule
