import React from 'react'
import { Text, StyleSheet, View, Image} from 'react-native'

export default class Imagen extends React.Component {
    // style={{flex:1, height: undefined, width: undefined}}


    render(){
        console.log("Here is the url");
        console.log('"'+this.props.question.attachment.url+'"');
        return(
            <View style={{flex: 1}}>
                <Image
                source={{uri: this.props.question.attachment.url}}
                resizeMode="contain"
                style={{width: 200, height: 200}}
                />
            </View>

        )
    }
}
