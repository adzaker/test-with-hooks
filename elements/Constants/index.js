const CHANGE_COUNTER = 'CHANGE_COUNTER';
const ADD_TO_LIST = 'ADD_TO_LIST';
const CHANGE_VALUE = 'CHANGE_VALUE';
const CHANGE_CELL = 'CHANGE_CELL';
const SET_MEMO_COUNT = 'SET_MEMO_COUNT';
const SET_UNIC_IMAGES_ARR = 'SET_UNIC_IMAGES_ARR';
const SET_ACTIVE_CELL = 'SET_ACTIVE_CELL';

export const types = {
	CHANGE_COUNTER,
	ADD_TO_LIST,
	CHANGE_VALUE,
	CHANGE_CELL,
	SET_MEMO_COUNT,
	SET_UNIC_IMAGES_ARR,
	SET_ACTIVE_CELL,
};

export const defaultState = {
	data: [],
	counter: 0,
	tictactoe: [
		null, null, null, null, null, null, null, null, null,
	]
};

export const memorizDefaultState = {
	cellCount: {
		N: 5,
		M: 4,
	},
	unicImages: [],
	currentActiveNum: null,
	openedCellsNum: [],
	isFinished: null,
	cells: [],
	showGame: true,
};

export const zero = 'Ⓐ';
export const cross = '✘';

export const fullOctave = ['white', 'black', 'white', 'black', 'white', 'white', 'black','white', 'black', 'white', 'black', 'white'];
export const halfOctave = ['white', 'black', 'white', 'black', 'white'];
export const lettersArray = ['a', 'w', 's', 'e', 'd', 'f', 't','g', 'y', 'h', 'u', 'j', 'k', 'o', 'l', 'p', ';'];
export const soundsArray = [
	'c4.mp3',
	'c4+.mp3',
	'd4.mp3',
	'd4+.mp3',
	'e4.mp3',
	'f4.mp3',
	'f4+.mp3',
	'g4.mp3',
	'g4+.mp3',
	'a4.mp3',
	'a4+.mp3',
	'b4.mp3',
	'c5.mp3',
	'c5+.mp3',
	'd5.mp3',
	'd5+.mp3',
	'e5.mp3'];
