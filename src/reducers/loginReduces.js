import { LOGIN_SUCCESS } from '../actions/loginActions';

const user = {
	username: 'hruday@gmail.com',
	password: 'hruday123'
};
const initState = {
	userStatus: false,
	message: ''
};
const loginReducers = (state = initState, actions) => {
	switch (actions.type) {
		case LOGIN_SUCCESS:
			if (
				actions.payload.username === user.username &&
				actions.payload.password === user.password
			) {
				return {
					...state,
					userStatus: true,
					message: 'Successfully logged in'
				};
			}else if (!(actions.payload.username.length > 0 && actions.payload.password.length > 0)){
				return {
					...state,
					userStatus: false,
					message: 'Username and password is required '
				};
			}
			else{
				return {
					...state,
					userStatus: false,
					message: 'Invalid credentials'
				};
			}

		default:
			return state;
	}
};

export default loginReducers;
