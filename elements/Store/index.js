import { createStore } from 'redux'
import {rootReducer} from '../Reducer'

export default function configureStore(initialState) {
	return createStore(
		rootReducer,
		typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
}
