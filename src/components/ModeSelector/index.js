import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

class ModeSelector extends Component {
	static propTypes = {
		currentMode: PropTypes.number,
		onChange: PropTypes.func,
	}

	isSelected = (index) => {
		return this.props.currentMode === index ? '-selected' : ''
	}

	selectMode = (index) => {
		this.props.onChange(index)
	}

	render() {
		return (
			<div className="mode-selector">
				{
					['Minicursos', 'Palestras', 'Rodas de conversa'].map((mode, index) => {
						return <div
							className={`mode ${this.isSelected(index)}`}
							onClick={() => this.selectMode(index)}
							key={mode}
						>
							{mode}
						</div>
					})
				}
			</div>
		)
	}
}

export default ModeSelector
