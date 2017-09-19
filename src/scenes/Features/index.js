import React, { Component } from 'react'

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

  renderContent = () => {
    switch(this.state.currentMode) {
      case 0: // Minicursos
        return this.data.minicourses[this.state.currentBlock].map(miniCourse => {
          return <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                  key={miniCourse} className="minicourse">{miniCourse}
                </a>
        })
      case 1: // Palestras
        return this.data.lectures.map(lecture => {
          return <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                  key={lecture} className="lecture">{lecture}
                </a>
        })
      case 2: // Rodas de conversa
        return this.data.talkingCircles.map(talkingCircle => {
          return <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                  key={talkingCircle} className="circle">{talkingCircle}
                </a>
        })
      default: return null
    }
  }

  render() {
    return (
      <section className="page-features">
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

      </section>
    )
  }
}

export default Features
