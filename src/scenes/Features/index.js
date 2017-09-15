import React, { Component } from 'react'
import Title from '../../components/Title'
import PageSelector from '../../components/PageSelector'
import ModeSelector from '../../components/ModeSelector'
import BlockSelector from '../../components/BlockSelector'

import './styles.css'

class Features extends Component {
	state = {
		currentPage: 0,
		currentMode: 0,
		currentBlock: 0,
	}

	changePage = (page) => {
		this.setState({ currentPage: page })
	}

	changeMode = (mode) => {
		this.setState({ currentMode: mode })
	}

	changeBlock = (block) => {
		this.setState({ currentBlock: block })
	}

	hasPagination = () => {
		return false
	}

	render() {
		return (
			<section className="page-features">
				<Title>Programação</Title>

				{
					this.hasPagination()
					? <div className="selector">
						<PageSelector
							currentPage={this.state.currentPage}
							onChange={this.changePage}
						/>
					</div>
					: <div className="selector-placeholder" />
				}

				<ModeSelector
					currentMode={this.state.currentMode}
					onChange={this.changeMode}
				/>

				<BlockSelector
					currentBlock={this.state.currentBlock}
					onChange={this.changeBlock}
				/>

				<div className="content">
				</div>

			</section>
		)
	}
}

export default Features
