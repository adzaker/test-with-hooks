import {defaultState, types, zero, cross, memorizDefaultState} from "../Constants";
import { combineReducers } from 'redux';

export function app(state = defaultState, action){
	let newState = {...state};
	switch (action.type) {
		case types.CHANGE_COUNTER:
			newState.counter += action.value;
			return newState;
		case types.ADD_TO_LIST:
			if (action.data) {
				newState.data.push(action.data);
			} else {
				newState.data.push(newState.counter);
				newState.counter = 0;
			}
			return newState;
		default:
			return newState;
	}
}

export function tic(state = defaultState, action) {
	let newState = {...state};
	switch (action.type) {
		case types.CHANGE_VALUE:
			console.log(action);
			const {value, index} = action;
			newState.data[index] = value;
			return newState;
		case types.CHANGE_CELL:
			const i = action.index;
			const isFirstUser = action.isFirstUser;
			newState.tictactoe[i] = isFirstUser ? zero : cross;
			return newState;
		default:
			return newState;
	}
}

export function memoriz(state = memorizDefaultState, action) {
	let newState = {...state};
	switch (action.type) {
		case types.SET_MEMO_COUNT:
			const {value, side} = action;
			newState.cellCount[side] = value;
			newState.openedCellsNum = [];
			return newState;
		case types.SET_UNIC_IMAGES_ARR:
			const {arr} = action;
			newState.unicImages = [...arr];
			newState.cells = [...arr, ...arr].sort(() => {
				return Math.random() - 0.5;
			});
			newState.openedCellsNum = [];
			return newState;
		case types.SET_ACTIVE_CELL:
			if (action.cellKey === null) {
				newState.currentActiveNum = null
				return newState;
			}
			const {cellKey} = action;
			if (Number(newState.currentActiveNum) === Number(cellKey)) {
				newState.openedCellsNum.push(cellKey);
			} else {
				newState.currentActiveNum = cellKey;
			}
			return newState;
		default:
			return newState;
	}
}

export const rootReducer = combineReducers({
	app,
	tic,
	memoriz,
});


