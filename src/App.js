import { DefaultTransition } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import React ,{ Component} from 'react';
import {View} from 'react-native';
import {Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'
import LoginForm from './component/LoginForm'
import Router from './Router'

class App extends Component {

    componentDidMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyBGM8rZLOzolR4iRBAKUFH-N4FmrbQprj0",
            authDomain: "manager-abd67.firebaseapp.com",
            projectId: "manager-abd67",
            storageBucket: "manager-abd67.appspot.com",
            messagingSenderId: "578674826594",
            appId: "1:578674826594:web:ee340973f7195a11a0603b",
            measurementId: "G-6YHDYDFW42"
          };
          firebase.initializeApp(firebaseConfig);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} >
                <Router />
            </Provider>
        );
    }
}

export default App;