import React, { Component } from 'react'

import Button from '../../components/Button'

import './styles.css'

class BuyPackage extends Component {
	state = {
		selectedCourses: [],
		currentBlock: 'A',
	}

	redirectToHome = () => {
		window.location.href = '/'
	}

	componentWillMount() {
		const { product } = this.props.match.params
		const validProducts = ['A', 'B', 'C', 'D', 'E']

		if (!validProducts.includes(product)) {
			return this.redirectToHome()
		}

		// we happen to have 5 packages AND 5 blocks so, why not?
		this.blocks = validProducts
		this.totalCourses = validProducts.indexOf(product)
		this.currentColor = {
			color: {
				'A': '#FF7381',
				'B': '#FCB755',
				'C': '#58C166',
				'D': '#2CABCA',
				'E': '#911AEC',
			}[product]
		}
	}

	remainingCourses = () => {
		return this.totalCourses - this.state.selectedCourses.length
	}

	backVariant = () => {
		return this.state.currentBlock === this.blocks[0] ? '-disabled' : ''
	}

	nextVariant = () => {
		const [ last ] = this.blocks.slice(-1)
		return this.state.currentBlock === last ? '-disabled' : ''
	}

	selectedCourses = (course) => {
		this.setState({
			selectedCourses: this.state.selectedCourses.concat(course)
		})
	}

	previousBlock = () => {
		const currentIndex = this.blocks.indexOf(this.state.currentBlock)

		if (currentIndex === 0) return

		this.setState({
			currentBlock: this.blocks[currentIndex - 1]
		})
	}

	nextBlock = () => {
		const currentIndex = this.blocks.indexOf(this.state.currentBlock)

		if (currentIndex === this.blocks.length - 1) return

		this.setState({
			currentBlock: this.blocks[currentIndex + 1]
		})
	}

	render() {
		const { product } = this.props.match.params
		return (
			<div className="page-package">
				<div className="arrow" onClick={this.redirectToHome} />

				<h1 className="title">
					Legal! Você escolheu o <span style={this.currentColor}>pacote {product}</span>
				</h1>

				<section className="subtitle">
					{
						this.totalCourses > 0 && (
							<p>
								Escolha <b>{this.remainingCourses()}/{this.totalCourses} Minicursos</b>
							</p>)
					}
					<nav className="navigator">
						Bloco {this.state.currentBlock}
						<div className={`chevron -back ${this.backVariant()}`} onClick={this.previousBlock} />
						<div className={`chevron -next ${this.nextVariant()}`} onClick={this.nextBlock} />
					</nav>
				</section>

				{/* <CourseSelector
					selected={this.state.selectedCourses}
					selectCourse={this.selectCourse}
				/> */}

				<Button color='outline'>
					Comprar!
				</Button>
			</div>
		)
	}
}

export default BuyPackage
