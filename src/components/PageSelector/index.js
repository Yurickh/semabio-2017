import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

class PageSelector extends Component {
	static propTypes = {
		currentPage: PropTypes.number,
	}

	isSelected = (index) => {
		return this.props.currentPage === index ? '-selected' : ''
	}

	selectPage = (index) => {
		this.props.onChange(index)
	}

	render() {
		return (
			<nav className="page-selector">
				{
					[0, 1, 2, 3].map(index => <div
						key={index}
						className={`page ${this.isSelected(index)}`}
						onClick={() => this.selectPage(index)}
					/>)
				}
			</nav>
		)
	}
}

export default PageSelector
