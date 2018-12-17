import React from 'react'
import Content from "./Content";
import ActionBar from "./ActionBar";
import { Text, StyleSheet, View} from 'react-native'
import Question from "./Question";
import Answer from "./Answer";
import Score from "./Score";

export default class Game extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    // }

    render(){

        // console.log('It gets the currentQuestion in Game');
        // console.log(this.props.currentQuestion);

        // console.log('It gets the onIntroduceAnswer in Game');
        // console.log(this.props.onIntroduceAnswer);

        // console.log('It gets the onChangeQuestion in Game');
        // console.log(this.props.onChangeQuestion);

        // console.log("The object fetch gets to game");
        // console.log(this.props.fetch);

        if(this.props.fetch.fetching){
            return <Text style={styles.h3}> Wait while we fetch </Text>
        } else if(this.props.fetch.fetching === false && this.props.fetch.error){
            console.log(this.props.fetch.error);
            return <Text style={styles.h3}> Error getting state from server </Text>
        } else {
            return(

                <View style={{flex: 1, alingments: 'stretch'}}>
                    <View style={{flex:1}}>
                        <Content
                            currentQuestion={this.props.currentQuestion}
                            currentIndex = {this.props.currentIndex}
                            onIntroduceAnswerGame = {this.props.onIntroduceAnswer}
                            finished = {this.props.finished}
                            score = {this.props.score}
                        />
                    </View>

                </View>
            )
        }

    }
}

const styles = StyleSheet.create({
    h3:{
        textAlign: 'center',
        fontSize: 10,
        padding: 10
    }
});