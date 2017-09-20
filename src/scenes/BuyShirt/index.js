import React, { Component } from 'react'

import './styles.css'

class BuyShirt extends Component {
	redirectToHome = () => {
		window.location.href = '/'
	}

	componentWillMount() {
		const { product } = this.props.match.params
		if (product && ['A', 'B'].includes(product)) {
			return this.redirectToHome()
		}
	}

	render() {
		return (
			<div className="page-shirt">
			</div>
		)
	}
}

export default BuyShirt
