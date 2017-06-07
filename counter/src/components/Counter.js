import React, { Component } from 'react';
import { increaseAction, decreaseAction } from '../actions/actions.js';
import { connect } from 'react-redux';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.handleIncreaseClick = this.handleIncreaseClick.bind(this);
		this.handleDecreaseClick = this.handleDecreaseClick.bind(this);
	}
	render() {
		return (
			<div>
				Värdet är: {this.props.value} <br/>
				<button onClick={this.handleIncreaseClick}>+1</button>
				<button onClick={this.handleDecreaseClick}>-1</button>
			</div>
		)
	}
	// event functions
	handleIncreaseClick(event) {
		// bara React: this.setState({ value: this.props.value + 1 })
		this.props.dispatch(increaseAction());
		// connect lägger till store.dispatch i props
	}
	handleDecreaseClick(event) {
		this.props.dispatch(decreaseAction());
	}
}

function mapStateToProps(state) {
	if( state === undefined )
		return { value: 101}; // TODO
	return {
		value: state.value
	}
}

let fun = connect(mapStateToProps);
export default fun(Counter);
	
	
	
	
	
	
	
	