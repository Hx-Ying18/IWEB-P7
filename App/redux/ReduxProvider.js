// It "provides" the Redux's store to the React App

import { Provider } from 'react-redux';
import GlobalState from './reducers.js';
import {compose, createStore, applyMiddleware} from 'redux';
import React from 'react';

import thunk from 'redux-thunk'
import { Text, StyleSheet, View, Image, TouchableHighlight} from 'react-native'

// Import questions
import { questions } from "../../assets/mock-data"
import GameScreen from "../components/GameScreen";

export default class ReduxProvider extends React.Component{

    // It is created a constructor
    constructor(props){
        super(props);

        // State that allows
        this.initialState = {
            score: 0,           // Score while playing
            finished: false,    // When pressed submit to pick teh answer
            indexCurrentQuestion: 0,
            questions: [
                ...questions
            ]
        };
        this.store = this.configureStore();
        // It is given as store the combination of reducers
    }

    render() {
        return (
            <Provider store={this.store}>
                <View>
                    <GameScreen />
                </View>
            </Provider>
        )
    }

    configureStore(){
        return createStore(
            GlobalState,
            this.initialState,
            compose(applyMiddleware(thunk))
        );
    }

}