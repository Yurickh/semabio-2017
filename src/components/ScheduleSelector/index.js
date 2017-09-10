import React, { Component } from 'react'

import ScheduleTable from '../ScheduleTable'

import './styles.css'

class ScheduleSelector extends Component {
	state = {
		selected: 'SEG',
	}

	choose = (day) => {
		this.setState({
			selected: day
		})
	}

	render() {
		return (
			<main className="schedule-selector">
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

				<ScheduleTable selected={this.state.selected} />
			</main>
		)
	}
}

export default ScheduleSelector
