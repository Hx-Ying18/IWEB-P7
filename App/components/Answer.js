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
                <View>
                    <Text style={styles.h2}> Answer</Text>
                    <TextInput
                        style={{height: 80, fontSize: 20}}
                        placeholder={this.props.currentQuestion.userAnswer || ''}
                        onChangeText={(e)=>{this.props.onIntroduceAnswer(e.target.value);}}/>
                </View>
                <View>
                    <Text style={styles.h2} > Tips </Text>
                    <Tips currentQuestion = {this.props.currentQuestion} />
                </View>
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