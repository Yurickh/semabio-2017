import React, { Component } from 'react'

import Title from '../../components/Title'

import scheduleData from '../../helpers/scheduleData'

import './styles.css'

class Schedule extends Component {
	state = {
		selected: 'SEG',
	}


	choose = (day) => {
		this.setState({
			selected: day
		})
	}

	renderTimes = () => null

	schedule = () => {
		return scheduleData[this.state.selected]
	}

	renderEvents = (type) => {
		// grab all the even or the odd indexes, depending on type
		const isOfType = index => index % 2 === +(type === 'even')

		const events = this.schedule().filter((_, index) => isOfType(index))

		return events.map(event => (
			<div className="event" key={`${event.time} - ${event.name}`}>
				<p className="time">{event.time}</p>
				<p className="name">{event.name}</p>
			</div>
		))
	}

	render() {
		return (
			<section className="page-schedule">
				<Title>Cronograma</Title>

				<nav className="week-picker">
					{
						['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'].map(day => {
							const selected = day === this.state.selected
							return (
								<div
									key={day}
									className={`day ${selected ? '-selected' : ''}`}
									onClick={() => this.choose(day)}
								>
									{day}
								</div>
							)
						})
					}
				</nav>

				<main className="schedule">
					<div className="events -odd">
						{this.renderEvents('odd')}
					</div>
					<div className="times -odd">
						{this.renderTimes('odd')}
					</div>
					<div className="times -even">
						{this.renderTimes('even')}
					</div>
					<div className="events -even">
						{this.renderEvents('even')}
					</div>
				</main>
			</section>
		)
	}
}

export default Schedule
