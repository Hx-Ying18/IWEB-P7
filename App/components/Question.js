import React from 'react'
import { Text, StyleSheet, View} from 'react-native'

export default class Question extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    // }
    render(){
        // console.log('indexCurrent');
        // console.log(this.props.currentIndex);
        return(
            <View style={{flex:1,
                flexDirection: 'row',
                alignItems: 'center',
                margin: 20
            }}>
                <Text style={styles.h2}>Question {this.props.currentIndex + 1} </Text>
                <Text style={styles.h1}>{this.props.currentQuestion.question} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    h1:{
        textAlign: 'center',
        fontSize: 16,
        padding: 20
    },
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
