import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

class Balloon extends Component {
	static propTypes = {
		type: PropTypes.oneOf(['question', 'answer']).isRequired,
		children: PropTypes.string.isRequired,
	}

	render() {
		return (
			<div className={`balloon-bubble -${this.props.type}`}>
				{this.props.children}
			</div>
		)
	}
}

export default Balloon
