import { INCREASE_ACTION, DECREASE_ACTION } from '../actions/types.js';

function rootReducer(state, action) {
	
	switch( action.type ) {
		case INCREASE_ACTION:
			return {
				value: state.value + 1
			};
		case DECREASE_ACTION:
			return {
				value: state.value - 1
			};
		default:
			return Object.assign({}, state);
	}
}

export default rootReducer;
