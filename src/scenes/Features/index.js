import React, { Component } from 'react'
import { Element } from 'react-scroll'

import Title from '../../components/Title'
import ModeSelector from '../../components/ModeSelector'
import BlockSelector from '../../components/BlockSelector'

import featuresData from '../../helpers/featuresData'

import './styles.css'

class Features extends Component {
  data = featuresData()

  state = {
    currentMode: 0,
    currentBlock: 0,
  }

  changeMode = (mode) => {
    this.setState({ currentMode: mode })
  }

  changeBlock = (block) => {
    this.setState({ currentBlock: block })
  }

  fileNameFor = (index) => {
    const block = ['A', 'B', 'C', 'D', 'E'][this.state.currentBlock]
    const number = ('00' + index).slice(-2)
    const PUBLIC_URL = process.env.PUBLIC_URL

    return `${PUBLIC_URL}/ementas/${block}${number}.pdf`
  }

  renderContent = () => {
    switch(this.state.currentMode) {
      case 0: // Minicursos
        return this.data.minicourses[this.state.currentBlock]
          .map((miniCourse, index) => (
            <a href={this.fileNameFor(index+1)}
              target="_blank"
              key={miniCourse.name}
              rel="noopener noreferrer"
              className="minicourse"
              >
              {miniCourse.name}
            </a>
          ))
      case 1: // Palestras
        return this.data.lectures.map(lecture => {
          return (
            <div key={lecture.name} className="lecture">
              <div className="name">{lecture.name}</div>
              <div className="responsible">{lecture.responsible}</div>
            </div>
          )
        })
      case 2: // Rodas de conversa
        return this.data.talkingCircles.map(talkingCircle => {
          return (
            <div key={talkingCircle.name} className="circle">
              <div className="name">{talkingCircle.name}</div>
              <div className="responsible">{talkingCircle.name}</div>
            </div>)
        })
      default: return null
    }
  }

  render() {
    return (
      <Element name="features" className="page-features">
        <Title>Programação</Title>

        <ModeSelector
          currentMode={this.state.currentMode}
          onChange={this.changeMode}
        />

        {
          this.state.currentMode === 0 // Minicursos
          ? <BlockSelector
            currentBlock={this.state.currentBlock}
            onChange={this.changeBlock}
          />
          : null
        }

        <div className="content">
          { this.renderContent() }
        </div>

      </Element>
    )
  }
}

export default Features
