import React from 'react'
import { Text, StyleSheet, View, Image, TextInput, FlatList} from 'react-native'

export default class Tips extends React.Component {

    render(){
        // console.log('currentQuestion in Answer');
        // console.log(this.props.currentQuestion);
        // console.log('It gets the onIntroduceAnswer in Answer');
        // console.log(this.props.onIntroduceAnswer);

        let tips = {key: '"'+this.props.currentQuestion.tips[0]+'"'};

        //  data={{key: '"'+this.props.currentQuestion.tips[0]+'"'}}
        return(
            <View style={{flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around'}}>
                    <Text style={styles.h2} > Tips: </Text>
                    <FlatList
                        data={tips}
                        renderItem={({item}) =>
                            <Text style={{fontSize: 30}}> {item.key} </Text>
                        }
                    />
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
