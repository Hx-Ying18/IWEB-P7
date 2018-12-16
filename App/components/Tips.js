import React from 'react'
import { Text, StyleSheet, View, Image, TextInput, FlatList} from 'react-native'

export default class Tips extends React.Component {

    render(){
        // console.log('currentQuestion in Answer');
        // console.log(this.props.currentQuestion);
        // console.log('It gets the onIntroduceAnswer in Answer');
        // console.log(this.props.onIntroduceAnswer);
        return(
            <FlatList
                data={this.props.currentQuestion.tips}
                renderItem={({item}) =>
                    <Text style={{fontSize: 30}}> {item.key} </Text>
                }
            />
        )

    }
}