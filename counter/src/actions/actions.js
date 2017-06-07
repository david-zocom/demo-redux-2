import { INCREASE_ACTION, DECREASE_ACTION } from './types.js';

function increaseAction() {
	return {
		type: INCREASE_ACTION
		// future improvement: hur mycket man ska öka med
	}
}

function decreaseAction() {
	return {
		type: DECREASE_ACTION
	}
}

export { increaseAction, decreaseAction };
