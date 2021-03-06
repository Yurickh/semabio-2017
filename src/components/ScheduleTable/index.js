import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ReactSVG from 'react-svg'

import scheduleData from '../../helpers/scheduleData'

import sun from './sun.svg'

import './styles.css'

class ScheduleTable extends Component {
  scheduleData = scheduleData()
  oddTimes = ['small', 'full', 'medium', 'minimal']
  evenTimes = ['half', 'medium', 'small', 'moon']

  static propTypes = {
    selected: PropTypes.oneOf(Object.keys(scheduleData()))
  }

  static defaultProps = {
    selected: 'SEG'
  }

  schedule = () => {
    return this.scheduleData[this.props.selected]
  }

  eventsOfType = (type) => {
    // grab all the even or the odd indexes, depending on type
    const isOfType = index => index % 2 === +(type === 'even')
    return this.schedule().filter((_, index) => isOfType(index))
  }

  renderEvents = (type) => {
    const events = this.eventsOfType(type)
    return events.map(event => (
      <div className="event" key={`${event.time} - ${event.name}`}>
        <p className="time">{event.time}</p>
        { event.name && <p className="name">{event.name}</p> }
				{ event.names && event.names.map(name => {
					return <p className="name" key={name}>{name}</p>
				})}
      </div>
    ))
  }

  renderTimes = (type) => {
    let times = type === 'even' ? this.evenTimes : this.oddTimes

    if (this.props.selected === 'SAB') return null

    return times
    .filter((time, index) => {
      // check if there's an event with given index present
      return this.eventsOfType(type)[index]
    })
    .map(time => (
      <div
        key={time}
        className={`sun -${time}`}
      >
        <ReactSVG path={sun} />
      </div>
    ))
  }

  tableVariant = () => {
    return this.props.selected === 'SAB' ? '-saturday' : ''
  }

  render() {
    return (
      <div className={`schedule-table ${this.tableVariant()}`}>
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
