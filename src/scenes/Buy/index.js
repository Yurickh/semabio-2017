import React, { Component } from 'react'

import Button from '../../components/Button'
import miniCoursesData from '../../helpers/miniCoursesData'

import './styles.css'

class Buy extends Component {
	miniCourses = miniCoursesData()
	validProducts = ['A', 'B', 'C', 'D', 'E', 'camiseta']

	isInvalid = () => {
		const { product } = this.props.match.params

		if (!product) {
			return true
		}

		if (!this.validProducts.includes(product)) {
			return true
		}

		return false
	}

	redirectToHome = () => {
		window.location.href = '/'
	}

	renderShirtPicker = () => {
		return (
			<div className="shirt-picker">
				Selecione o tamanho da sua camiseta:
				<select ref={selector => this.shirtSizeSelector = selector}>
					<option value="PP">PP</option>
					<option value="P">P</option>
					<option value="M">M</option>
					<option value="G">G</option>
					<option value="GG">GG</option>
				</select>
			</div>
		)
	}

	amountOfMiniCoursesToChoose = () => {
		const { product } = this.props.match.params

		switch(product) {
			case 'A':
			case 'camiseta':
				return 0

			case 'B': return 1
			case 'C': return 2
			case 'D': return 3
			case 'E': return 4

			default: return 0
		}
	}

	renderCoursePicker = () => {
		const courseAmount = this.amountOfMiniCoursesToChoose()

		if (courseAmount === 0) return null

		return (
			<div className="course-picker">
				Escolha seus mini-cursos:
				<ul>
					{ this.miniCourses.map(miniCourse => <li>{miniCourse}</li>) }
				</ul>
			</div>
		)
	}

	buy = () => {
		console.log(this.shirtSizeSelector.value)
	}

	render() {
		const { product } = this.props.match.params

		if (this.isInvalid()) {
			this.redirectToHome()
			return null
		}

		this.hasShirt = product !== 'A'

		return (
			<div className="page-buy">

				{ this.hasShirt ? this.renderShirtPicker() : ''}

				{ this.renderCoursePicker() }

				<Button color='outline' onClick={this.buy}>
					Comprar!
				</Button>
			</div>
		)
	}
}

export default Buy
