import React from 'react'
import { Text, StyleSheet, View} from 'react-native'

export default class Question extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    // }
    render(){

         console.log('indexCurrent');
         console.log(this.props.currentIndex);

        return(
            <View>
                <Text style={styles.h2}>Question {this.props.currentIndex + 1} </Text>
                <Text style={styles.h3}>{this.props.currentQuestion.question} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    h2:{
        textAlign: 'center',
        fontSize: 16,
        padding: 10
    },
    h3:{
        textAlign: 'center',
        fontSize: 10,
        padding: 10
    }
});