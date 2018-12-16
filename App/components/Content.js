import React from 'react'
import Question from "./Question";
import Answer from "./Answer";
import Imagen from "./Image";
import Score from './Score'
import "../assets/styles/index.css"
import { Text, StyleSheet, View} from 'react-native'

export default class Content extends React.Component {

    render(){
        // console.log('It gets the currentQuestion in Content');
        // console.log(this.props.currentQuestion);
        // console.log('It gets the onIntroduceAnswer in Content');
        // console.log(this.props.onIntroduceAnswerGame);
        return(
            <View style={{flex: 1}}>
                <View style={{flex:1}}>
                    <Question
                        currentIndex = {this.props.currentIndex}
                        currentQuestion={this.props.currentQuestion}
                    />
                    <Answer
                        currentQuestion={this.props.currentQuestion}
                        onIntroduceAnswer = { this.props.onIntroduceAnswerGame}
                    />
                    <Score 
                        score = {this.props.score}
                        finished = {this.props.finished}
                    />
                    <Imagen question={this.props.currentQuestion}/>
                </View>
            </View>
        )
    }
}