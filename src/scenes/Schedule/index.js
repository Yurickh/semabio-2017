import React, { Component } from 'react'

import Title from '../../components/Title'
import ScheduleSelector from '../../components/ScheduleSelector'

import './styles.css'

class Schedule extends Component {
	render() {
		return (
			<section className="page-schedule">
				<Title>Cronograma</Title>
				<ScheduleSelector />
			</section>
		)
	}
}

export default Schedule
