import { createStore, combineReducers } from 'redux';
import loginReducers from '../reducers/loginReduces';
import employeeReducer from '../reducers/employeeReducer';

const reducer = combineReducers({
	login: loginReducers,
	employee: employeeReducer
});

export const store = createStore(reducer);
