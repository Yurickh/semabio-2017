import React, { Component } from 'react'
import { Element } from 'react-scroll'

import Title from '../../components/Title'
import ScheduleSelector from '../../components/ScheduleSelector'

import './styles.css'

class Schedule extends Component {
  render() {
    return (
      <Element name="schedule" className="page-schedule">
        <Title>Cronograma</Title>
        <p className="subtitle">
          O evento começa no dia 23 de Outubro
        </p>
        <ScheduleSelector />
      </Element>
    )
  }
}

export default Schedule
