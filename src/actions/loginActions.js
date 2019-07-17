export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const getLoginAction = payload => {
	return {
		type: LOGIN_SUCCESS,
		payload: payload
	};
};
