import React, { Component } from 'react'
import PropTypes from 'prop-types'

import scheduleData from '../../helpers/scheduleData'

import './styles.css'

class ScheduleTable extends Component {
	scheduleData = scheduleData()
	evenTimes = ['medium', 'big', 'small', 'moon']
	oddTimes = ['small', 'big', 'medium', 'minimal']

	static propTypes = {
		selected: PropTypes.oneOf(Object.keys(scheduleData()))
	}

	schedule = () => {
		return this.scheduleData[this.props.selected]
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

	renderTimes = (type) => {
		let times = type === 'even' ? this.evenTimes : this.oddTimes

		return times.map(time => (
			<div
				key={time}
				className={`sun -${time}`}
			/>
		))
	}

	render() {
		return (
			<div className="schedule-table">
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
			</div>
		)
	}
}

export default ScheduleTable
