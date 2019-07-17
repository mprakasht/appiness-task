import { LOGIN_SUCCESS } from '../actions/loginActions';

const user = {
	username: 'hruday@gmail.com',
	password: 'hruday123'
};
const initState = {
	userStatus: false
};
const loginReducers = (state = initState, actions) => {
	switch (actions.type) {
		case LOGIN_SUCCESS:
			if (
				actions.payload.username == user.username &&
				actions.payload.password == user.password
			) {
				return { ...state, userStatus: true };
			}
			return state;

		default:
			return state;
	}
};

export default loginReducers;
