import {EMAIL_CHANGED,PASSWORD_CHANGED, LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL, LOGIN_USER} from '../actions/types'

const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    user: null,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload };
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};
        case LOGIN_USER_SUCCESS: 
            return {...state, user: action.payload, error: '', loading: false}
        case LOGIN_USER_FAIL:
            return {...state, error: action.payload, loading: false}
        case LOGIN_USER:
            return {...state , loading: true, error: ''}
        default:
            return state;
    }
}; 