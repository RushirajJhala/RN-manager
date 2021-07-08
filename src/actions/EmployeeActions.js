import firebase from 'firebase';
import {EMPLOYEE_UPDATE,EMPLOYEE_CREATE,EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS,EMPLOYEE_DELETE_SUCCESS} from './types'
import {Actions} from 'react-native-router-flux';

export const employeeUpdate = ({props,value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {props, value}

    };

}

export const employeeCreate = ({name,phone,shift}) => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {       
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({name,phone,shift})
        .then( () => {
            dispatch({
                type: EMPLOYEE_CREATE
            })
            Actions.pop()
        })  // Actions.employeeList()
    }
}

export const employeesFetch = () => {
    const {currentUser} = firebase.auth();
    return (disptach) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on ('value' , snapshot => {
            disptach({type: EMPLOYEES_FETCH_SUCCESS, payload : snapshot.val()})
        })
    }
}

export const employeeSave = ({name, phone, shift, uid}) => {
    const {currentUser} = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
        .set({name, phone, shift})
        .then( () => {
            dispatch({ type: EMPLOYEE_SAVE_SUCCESS})
             Actions.pop()
        })
    }
} 

export const employeeDelete = ({uid}) => {
    const {currentUser} = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(()=> {
            dispatch({ type: EMPLOYEE_DELETE_SUCCESS})
            Actions.pop()
        })
    }
}