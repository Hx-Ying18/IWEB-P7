import React from 'react'

import { Text, StyleSheet, View, Image, TextInput} from 'react-native'

export default class Answer extends React.Component {

    render(){
        // console.log('currentQuestion in Answer');
        // console.log(this.props.currentQuestion);
        // console.log('It gets the onIntroduceAnswer in Answer');
        // console.log(this.props.onIntroduceAnswer);
        return(
            <View>
                <View style={{flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around'}}>
                    <Text style={styles.h2}> Answer</Text>
                    <TextInput
                        style={{height: 80, fontSize: 20}}
                        placeholder={this.props.currentQuestion.userAnswer || 'Type here'}
                        onChangeText={(text)=>{this.props.onIntroduceAnswer(text);}}/>
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