import React, { Component } from 'react'

import './styles.css'

class Countdown extends Component {
	state = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	}

	refreshTime = () => {
		const now = new Date()
		const timeDiff = this.props.until - now

		const msInAnSecond = 1000
		const msInAMinute = 60 * msInAnSecond
		const msInAnHour = 60 * msInAMinute
		const msInADay = 24 * msInAnHour

		let remainingMs = timeDiff

		let days = Math.floor(remainingMs / msInADay)
		remainingMs = remainingMs - days * msInADay

		let hours = Math.floor(remainingMs / msInAnHour)
		remainingMs = remainingMs - hours * msInAnHour

		let minutes = Math.floor(remainingMs / msInAMinute)
		remainingMs = remainingMs - minutes * msInAMinute

		let seconds = Math.floor(remainingMs / msInAnSecond)

		this.setState({
			days,
			hours,
			minutes,
			seconds,
		})

		this.timeout = setTimeout(() => this.refreshTime(), 500)
	}

	componentDidMount() {
		this.timeout = setTimeout(() => this.refreshTime(), 500)
	}

	componentWillUnmount() {
		clearTimeout(this.timeout)
	}

	padZero = (num) => {
		return ('0000' + num.toString()).slice(-2)
	}

	render() {
		return (
			<div className="count-down">
				<div className="days">
					<div className="value">{ this.padZero(this.state.days)}</div>
					<div className="label">dias</div>
				</div>
				<div className="separator">:</div>
				<div className="hours">
					<div className="value">{ this.padZero(this.state.hours) }</div>
					<div className="label">horas</div>
				</div>
				<div className="separator">:</div>
				<div className="minutes">
					<div className="value">{ this.padZero(this.state.minutes) }</div>
					<div className="label">minutos</div>
				</div>
				<div className="separator">:</div>
				<div className="seconds">
					<div className="value">{ this.padZero(this.state.seconds) }</div>
					<div className="label">segundos</div>
				</div>
			</div>
		)
	}
}

export default Countdown
