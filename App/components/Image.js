import React from 'react'
import { Text, StyleSheet, View, Image} from 'react-native'

export default class Imagen extends React.Component {
    // style={{flex:1, height: undefined, width: undefined}}
    render(){
        return(

            <View>
                <Image
                source={{uri: this.props.question.attachment.url}}
                style={{flex:1}}
                resizeMode="center"
                />
            </View>

        )
    }
}