import React, { Component } from 'react'

import ShopClient from '../../helpers/shopClient'
import GraphQL from '../../helpers/GraphQL'

import Button from '../../components/Button'
import VariantSelector from '../../components/VariantSelector'

import './styles.css'

class BuyShirt extends Component {
	state = {
		selectedShirtSize: null,
		ready: false,
	}

	redirectToHome = () => {
		window.location.href = '/'
	}

	componentWillMount() {
		const { product } = this.props.match.params
		if (product && !['C', 'D', 'E'].includes(product)) {
			return this.redirectToHome()
		}
	}

	goBack = () => {
		const { product } = this.props.match.params
		window.location.href = `/comprar/${product}`
	}

	refreshShirtSize = ([selectedShirtSize]) => {
		this.setState({ selectedShirtSize })
	}

	loading = () => {
		this.setState({
			ready: false
		})

		setTimeout(() => {
			this.setState({
				ready: true
			})
		}, 2000)
	}

	finishHim = () => {
		const { checkoutId } = this.props.match.params
		const shopClient = ShopClient()

		this.loading()

		const lineItems = {
			variantId: this.state.selectedShirtSize.id,
			quantity: 1,
		}

		if (checkoutId) {
			shopClient.addLineItems(checkoutId, lineItems)
			.then(checkout => {
				window.location.href = GraphQL.read(checkout).get('webUrl')
			})
		} else {
			shopClient.createCheckout()
			.then(checkout => {
				const checkoutId = GraphQL.read(checkout).get('id')

				return shopClient.addLineItems(checkoutId, lineItems)
			})
			.then(checkout => {
				window.location.href = GraphQL.read(checkout).get('webUrl')
			})
		}
	}

	onLoad = () => {
		this.setState({
			ready: true
		})
	}

	render() {
		const { product } = this.props.match.params
		return (
			<div className="page-shirt">
				<div className="arrow" onClick={this.goBack} />

				<h1 className="title">
					{
						this.props.match.params.checkoutId
						? 'Agora só falta você escolher o tamanho da sua camiseta :)'
						: 'Escolha o tamanho da sua camiseta :)'
					}
				</h1>

				<VariantSelector
					product="shirt"
					package={product}
					currentColor="#58C166" // color-forest
					onChange={this.refreshShirtSize}
					onLoad={this.onLoad}
					allowedToSelect={true}
				/>

				<footer>
					<span>ATENÇÃO: Não haverá reembolso em caso de desistência</span>
					<Button
						color='green'
						onClick={this.finishHim}
						onLoad={this.onLoad}
						loading={!this.state.ready}
						className={!this.state.selectedShirtSize ? '-disabled' : ''}>
						Finalizar Compra
					</Button>
				</footer>
			</div>
		)
	}
}

export default BuyShirt
