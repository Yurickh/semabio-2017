import React, { Component } from 'react'
import PropTypes from 'prop-types'

import GraphQL from '../../helpers/GraphQL'
import ShopClient from '../../helpers/shopClient'

import './styles.css'

class BuyPage extends Component {
	state = {}
	validProducts = {
		A: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzEwOTE4Mzg2MDc2MA==',
		B: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzEwOTIzNDI1Nzk0NA==',
		C: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzEwOTMyMzkxMTE5Mg==',
		D: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzEwOTMyODgyNjM5Mg==',
		E: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzEwOTMzMjAzNzY1Ng==',
		camiseta: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzEwOTE5NzY4ODg1Ng==',
	}

	componentDidMount() {
		this.shopClient = ShopClient()

		this.shopClient.fetchAllProducts()
		.then(productsData => {
			GraphQL.read(productsData)
			.map(product => ({
				name: this.getTitle(product.get('title')),
				variants: product.get('variants').map(variant => ({
					name: variant.get('title'),
					id: variant.get('id'),
				})),
			}))
			.forEach(product => {
				console.log(product);
				this.setState({
					[product.name]: product.variants
				})
			})
		})
		.catch(error => console.error('Error while fetching products: ' + error))
	}

	redirectToHome = () => {
		window.location.href = '/'
	}

	getTitle = (title) => {
		const broken = title.split(' ')

		if (broken[0] === 'Pacote') return broken[1]
		if (broken[0] === 'Camiseta') return 'camiseta'

		return undefined
	}

	isInvalid = () => {
		const { product } = this.props.match.params

		if (!product) {
			return true
		}

		if (!Object.keys(this.validProducts).includes(product)) {
			return true
		}

		return false
	}

	renderShirtPicker = () => {
		const { camiseta } = this.state

		if (!camiseta) return null

		const shirtSizes = this.state.camiseta

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
					{/* { this.miniCourses.map(miniCourse => <li key={miniCourse}>{miniCourse}</li>) } */}
				</ul>
			</div>
		)
	}

	addShirtToCheckout = (checkoutId) => {
		const lineItems = [{
			variantId: this.shirtSizeSelector.value,
			quantity: 1,
		}]
		return this.shopClient.addLineItems(checkoutId, lineItems)
	}

	addCourseToCheckout = (checkoutId) => {
		const { product } = this.props.match.params

		const lineItems = [{
			variantId: this.state[product][0].id,
			quantity: 1,
		}]
		return this.shopClient.addLineItems(checkoutId, lineItems)
	}

	buy = () => {
		if (!this.shopClient) return

		this.shopClient.createCheckout()
		.then(checkout => {
			if (this.shirtSizeSelector) {
				return this.addShirtToCheckout(GraphQL.read(checkout).get('id'))
			} else {
				return checkout
			}
		})
		.then(checkout => {
			const { product } = this.props.match.params

			if (product !== 'camiseta') {
				return this.addCourseToCheckout(GraphQL.read(checkout).get('id'))
			}

			return checkout
		})
		.then(checkout => {
			window.location.href = GraphQL.read(checkout).get('webUrl')
		})
	}


	render() {
		return (
			<div className="buy-page">
			</div>
		)
	}
}

export default BuyPage
