import React from 'react'
import { Text, StyleSheet, View, Image, TouchableHighlight} from 'react-native'

export default class ActionBar extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    // }
    render(){
        // console.log('It gets the onChangeQuestion in ActionBar');
        // console.log(this.props.onChangeQuestion);

        // console.log('Length of questions')
        // console.log(this.props.questionsLength);

        // If it's index is the first it disable the button
        return(
            <View>
                <TouchableHighlight onPress ={() => {
                    if ((this.props.currentIndex ) !== 0) {
                        this.props.onChangeQuestion('previuosQ')
                    }
                }
                }
                >
                    <Text style={styles.h2}>
                        Previous
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={ () => {
                    this.props.onSubmit()
                    }
                }
                >
                    <Text style={styles.h2}>
                        Submit
                    </Text>

                </TouchableHighlight>

                <TouchableHighlight
                    onPress = {  () =>{
                        // Only if the index + 1 is not the length, it runs.
                        if((this.props.currentIndex+1) !== this.props.questionsLength){
                            this.props.onChangeQuestion('nextQ')
                        }
                    }
                }
                >
                    <Text style={styles.h2}>
                        Next
                    </Text>
                </TouchableHighlight>

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