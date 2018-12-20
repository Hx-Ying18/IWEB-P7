import React from 'react'
import Question from "./Question";
import Answer from "./Answer";
import Imagen from "./Imagen";
import Score from './Score'

import { Text, StyleSheet, View} from 'react-native'
import Tips from "./Tips";

export default class Content extends React.Component {

    render(){
        // console.log('It gets the currentQuestion in Content');
        // console.log(this.props.currentQuestion);

        // console.log('It gets the onIntroduceAnswer in Content');
        // console.log(this.props.onIntroduceAnswerGame);


        return(
            <View style={{
                flex: 3,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>

                <Imagen question={this.props.currentQuestion}/>

                <Question
                    currentIndex = {this.props.currentIndex}
                    currentQuestion={this.props.currentQuestion}
                />



                <Answer
                    currentQuestion={this.props.currentQuestion}
                    onIntroduceAnswer = { this.props.onIntroduceAnswerGame}
                />

                <Tips currentQuestion = {this.props.currentQuestion} />

                <Score
                    score = {this.props.score}
                    finished = {this.props.finished}
                />
            </View>

        )
    }
}
