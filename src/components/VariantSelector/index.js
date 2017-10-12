import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ShopClient from '../../helpers/shopClient'
import GraphQL from '../../helpers/GraphQL'

import checkMark from './check-mark.svg'

import './styles.css'

class VariantSelector extends Component {
	state = {
		variants: [],
		selected: [],
	}

	static propTypes = {
		product: PropTypes.oneOf(['A', 'B', 'C', 'D', 'E', 'shirt']).isRequired,
		currentColor: PropTypes.string.isRequired,
		onChange: PropTypes.func,
		onLoad: PropTypes.func,
	}

	componentDidMount() {
		this.shopClient = ShopClient()

		this.componentDidUpdate({})
	}

	componentDidUpdate(prevProps) {
		if (this.props.product !== prevProps.product) {
			this.fetchProduct()
		}
	}

	fetchProduct = () => {
		const { product } = this.props

		this.shopClient.fetchQueryProducts({ title: this.nameFor(product)})
		.then(data => {
			const productData = GraphQL.read(data)

			this.setState({
				variants: productData.first().get('variants')
					.map(variant => ({
						id: variant.get('id'),
						name: variant.get('title'),
						available: variant.get('available')
					}))
			}, this.props.onLoad)
		})
	}

	nameFor = (product) => {
		if (product.length === 1) {
			return `Bloco ${product}`
		} else if (this.props.package) {
			return `Pacote ${this.props.package}`
		} else {
			return 'Camiseta'
		}
	}

	allowedToSelect = () => {
		const { variants } = this.state

		return this.props.allowedToSelect && variants.filter(this.variantIsSelected).length === 0
	}

	selectVariant = (variant) => {
		if (!this.allowedToSelect()) return

		this.setState({
			selected: this.state.selected.concat(variant)
		}, () => this.props.onChange(this.state.selected))
	}

	removeVariant = (variant) => {
		this.setState({
			selected: this.state.selected.filter(x => x.id !== variant.id)
		}, () => this.props.onChange(this.state.selected))
	}

	toggleVariant = (variant) => {
		if (this.variantIsSelected(variant)) {
			this.removeVariant(variant)
		} else {
			this.selectVariant(variant)
		}
	}

	variantIsSelected = (variant) => {
		const { selected } = this.state

		return !!selected.filter(selection => selection.id === variant.id).length
	}

	variant = (variant) => {
		if (!variant.available) {
			return '-disabled'
		} else if (this.variantIsSelected(variant)) {
			return '-selected'
		} else {
			return ''
		}
	}

	isShirtSelector = () => {
		return !!this.props.package
	}

	selectorVariant = () => {
		return this.isShirtSelector() ? '-shirt' : ''
	}

	variantName = (variant) => {
		if (!this.isShirtSelector()) return variant.name

		return variant.name.replace('Camiseta (', '').replace(')', '')
	}

	render() {
		return (
			<div className={`variant-selector ${this.selectorVariant()}`}>
				{
					this.state.variants
						.map((variant, index) => (
							<div key={index}
								className={`variant ${this.variant(variant)}`}
								onClick={() => this.toggleVariant(variant)}
							>
								{this.variantName(variant)}
								{this.variantIsSelected(variant) && (
									<div className="tick" style={{ backgroundColor: this.props.currentColor }}>
										<img src={checkMark} alt="check mark" />
									</div>
								)}
							</div>
						))
				}
			</div>
		)
	}
}

export default VariantSelector
