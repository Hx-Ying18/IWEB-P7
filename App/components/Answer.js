import React from 'react'
import Tips from "./Tips";
import { Text, StyleSheet, View, Image, TextInput} from 'react-native'

export default class Answer extends React.Component {

    render(){
        // console.log('currentQuestion in Answer');
        // console.log(this.props.currentQuestion);
        // console.log('It gets the onIntroduceAnswer in Answer');
        // console.log(this.props.onIntroduceAnswer);
        return(
            <View>
                <Text style={styles.h2}> Answer</Text>
                <TextInput
                    style={{height: 80, fontSize: 20}}
                    placeholder={this.props.currentQuestion.userAnswer || 'Type here'}
                    onChangeText={(text)=>{this.props.onIntroduceAnswer(text);}}/>
                <Text style={styles.h2} > Tips </Text>
                <Tips currentQuestion = {this.props.currentQuestion} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    h2:{
        textAlign: 'center',
        fontSize: 16,
        padding: 10
    }
});