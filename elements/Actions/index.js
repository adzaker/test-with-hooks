import {types} from '../Constants'

export function counter(value) {
	return {
		type: types.CHANGE_COUNTER,
		value
	};
}

export function addToList(data = null) {
	return {
		type: types.ADD_TO_LIST,
		data: data,
	};
}

export function changeValue(value, index) {
	return {
		type: types.CHANGE_VALUE,
		value,
		index,
	};
}

export function changeCell(index, isFirstUser) {
	return {
		type: types.CHANGE_CELL,
		index,
		isFirstUser,
	}
}

export function setMemoCount(side, value) {
	return {
		type: types.SET_MEMO_COUNT,
		side,
		value,
	}
}

export function setUnicImagesArr(arr) {
	return {
		type: types.SET_UNIC_IMAGES_ARR,
		arr,
	}
}

export function setActiveCell(cellKey) {
	return {
		type: types.SET_ACTIVE_CELL,
		cellKey,
	}
}
