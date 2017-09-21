import React, { Component } from 'react'

import ShopClient from '../../helpers/ShopClient'
import GraphQL from '../../helpers/GraphQL'
import PackageIds from '../../helpers/PackageIds'

import Button from '../../components/Button'
import VariantSelector from '../../components/VariantSelector'

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
		const validProducts = ['B', 'C', 'D', 'E']

		if (!validProducts.includes(product)) {
			return this.redirectToHome()
		}

		this.blocks = ['A'].concat(validProducts)

		this.totalCourses = {
			'B': 1,
			'C': 1,
			'D': 2,
			'E': 3,
		}[product]

		this.currentColor = {
			color: {
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

	refreshCourseList = (courseList) => {
		this.setState({
			selectedCourses: courseList
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

	nextStep = () => {
		const { product } = this.props.match.params
		const shopClient = ShopClient()

    shopClient.createCheckout()
		.then(checkout => {
			if (product !== 'B') return checkout

			const checkoutId = GraphQL.read(checkout).get('id')
			const lineItems = {
				variantId: PackageIds(product),
				quantity: 1,
			}

			return shopClient.addLineItems(checkoutId, lineItems)
		})
    .then(checkout => {
      const checkoutId = GraphQL.read(checkout).get('id')
      const lineItems = this.state.selectedCourses.map(course => ({
				variantId: course.id,
				quantity: 1,
			}))

      return shopClient.addLineItems(checkoutId, lineItems)
    })
    .then(checkout => {
			if (product === 'B') {
				return window.location.href = GraphQL.read(checkout).get('webUrl')
			}

			const checkoutId = GraphQL.read(checkout).get('id')
			window.location.href = `/comprar/${product}/${checkoutId}`
    })
	}

	render() {
		const { product } = this.props.match.params
		const { currentBlock } = this.state
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
						Bloco {currentBlock}
						<div className={`chevron -back ${this.backVariant()}`} onClick={this.previousBlock} />
						<div className={`chevron -next ${this.nextVariant()}`} onClick={this.nextBlock} />
					</nav>
				</section>

				<VariantSelector
					product={currentBlock}
					currentColor={this.currentColor.color}
					onChange={this.refreshCourseList}
				/>

				<footer>
					<span>ATENÇÃO: Não haverá reembolso em caso de desistência</span>
					<Button
						color='green'
						onClick={this.nextStep}
						className={!!this.remainingCourses() ? '-disabled' : ''}>
						Continuar
					</Button>
				</footer>

			</div>
		)
	}
}

export default BuyPackage
