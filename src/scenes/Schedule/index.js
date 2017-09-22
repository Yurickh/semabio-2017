import React, { Component } from 'react'

import Title from '../../components/Title'
import ScheduleSelector from '../../components/ScheduleSelector'

import './styles.css'

class Schedule extends Component {
  render() {
    return (
      <section className="page-schedule">
        <Title>Cronograma</Title>
        <p className="subtitle">
          O evento começa no dia 23 de Outubro
        </p>
        <ScheduleSelector />
      </section>
    )
  }
}

export default Schedule
