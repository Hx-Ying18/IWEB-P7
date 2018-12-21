import React from 'react'
import { Text, StyleSheet, View, Image, TextInput, FlatList, ScrollView} from 'react-native'

export default class Tips extends React.Component {

    render(){
        // console.log('currentQuestion in Answer');
        // console.log(this.props.currentQuestion);
        // console.log('It gets the onIntroduceAnswer in Answer');
        // console.log(this.props.onIntroduceAnswer);

        // let tips1 = {key: '"'+this.props.currentQuestion.tips[0]+'"'};

        let tips = this.props.currentQuestion.tips.map((tip, i)=> {
            console.log(this.props.currentQuestion.tips[i])
            return {key: '"' + this.props.currentQuestion.tips[i] + '"'}
        }
    )


        //  data={{key: '"'+this.props.currentQuestion.tips[0]+'"'}}
        return(
            <View style={{flex: 3,
                flexDirection: 'column',
                alignItems: 'center'}}>
                    <Text style={styles.h2} > Tips: </Text>
                    <FlatList
                        data={tips}
                        renderItem={({item}) =>
                            <Text style={{fontSize: 10}}> {item.key} </Text>
                        }
                    />
            </View>

        )

    }
}

const styles = StyleSheet.create({

    h2:{
        textAlign: 'center',
        fontSize: 12,
        padding: 10,

    }
});
