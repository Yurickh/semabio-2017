import React, { Component } from 'react'

import Button from '../../components/Button'

import miniCoursesData from '../../helpers/miniCoursesData'
import GraphQL from '../../helpers/GraphQL'
import ShopClient from '../../helpers/ShopClient'

import './styles.css'

const shirtId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzEwOTE5NzY4ODg1Ng=='

class Buy extends Component {
	miniCourses = miniCoursesData()
	validProducts = ['A', 'B', 'C', 'D', 'E', 'camiseta']
	state = {
		shirt: null
	}

	componentDidMount() {
		this.shopClient = ShopClient()

		this.shopClient.fetchProduct(shirtId)
		.then(shirt => this.setState({ shirt: GraphQL.read(shirt) }))
		.catch(error => console.error('Error while fetching shirt: ' + error))
	}

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
		const { shirt } = this.state

		if (!shirt) return null

		const shirtSizes = this.state.shirt.get('variants').map(size => ({
			name: size.get('title'),
			id: size.get('id'),
		}))

		return (
			<div className="shirt-picker">
				Selecione o tamanho da sua camiseta:
				<select ref={selector => this.shirtSizeSelector = selector}>
					{
						shirtSizes.map(size => {
							return <option value={size.id} key={size.id}>{size.name}</option>
						})
					}
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
					{ this.miniCourses.map(miniCourse => <li key={miniCourse}>{miniCourse}</li>) }
				</ul>
			</div>
		)
	}

	buy = () => {
		if (!this.shopClient) return

		if (this.shirtSizeSelector) {

			this.shopClient.createCheckout()
			.then(checkout => {
				const lineItems = [{
					variantId: this.shirtSizeSelector.value,
					quantity: 1,
				}]
				return this.shopClient.addLineItems(GraphQL.read(checkout).get('id'), lineItems)
			})
			.then(checkout => {
				window.location.href = GraphQL.read(checkout).get('webUrl')
			})
		}
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
