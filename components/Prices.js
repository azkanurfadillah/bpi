import React, {Component} from 'react';

export default class Prices extends Component {
	state = {currency: 'EUR'};

	render() {
		const {USD, GBP, EUR} = this.props.bpi.bpi;
		console.log(this.props.bpi, USD);
		let list = '';
		if (this.state.currency === 'USD') {
			list = (
				<li className='list-group-item'>
					Bitcoin rate for {USD.description}: <span className='badge badge-primary'>{USD.code}</span>
					<strong>{USD.rate}</strong>
				</li>
			);
		} else if (this.state.currency === 'GBP') {
			list = (
				<li className='list-group-item'>
					Bitcoin rate for {GBP.description}: <span className='badge badge-primary'>{GBP.code}</span>
					<strong>{GBP.rate}</strong>
				</li>
			);
		} else if (this.state.currency === 'EUR') {
			list = (
				<li className='list-group-item'>
					Bitcoin rate for {EUR.description}: <span className='badge badge-primary'>{EUR.code}</span>
					<strong>{EUR.rate}</strong>
				</li>
			);
		}

		return (
			<div>
				<ul className='list-group'>{list}</ul>
				<br />
				<select onChange={e => this.setState({currency: e.target.value})} className='form-control'>
					<option value='USD'> USD</option>
					<option value='GBP'> GBP</option>
					<option value='EUR'> EUR</option>
				</select>
			</div>
		);
	}
}
