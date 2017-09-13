import React, { Component } from 'react'

import './styles.css'

class Buy extends Component {
	render() {
		console.log(this.props);

		return (
			<div> Você quer comprar produto {this.props.match.params.product} </div>
		)
	}
}

export default Buy
