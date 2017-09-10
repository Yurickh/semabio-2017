import React, { Component } from 'react'

import Title from '../../components/Title'

import './styles.css'

class Schedule extends Component {
	state = {
		selected: 'SEG',
		schedule: [
			{ time:'08:00', name: 'Minicursos Bloco A'},
			{ time:'11:30', name: 'Almoço'},
			{ time:'13:00', name: 'Palestra de Abertura'},
			{ time:'14:30', name: 'Palestra'},
			{ time:'15:45', name: 'Coffee Break'},
			{ time:'16:00', name: 'Roda da Conversa'},
			{ time:'17:30', name: 'Jantar'},
			{ time:'19:00 às 22:00', name: 'Minicursos Bloco B'},
		]
	}

	choose = (day) => {
		this.setState({
			selected: day
		})
	}

	renderTimes = () => null

	renderEvents = (type) => {
		// grab all the even or the odd indexes, depending on type
		const isOfType = index => index % 2 === +(type === 'even')

		const events = this.state.schedule.filter((_, index) => isOfType(index))

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
