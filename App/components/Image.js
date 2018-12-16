import React from 'react'
import { Text, StyleSheet, View, Image} from 'react-native'

export default class Imagen extends React.Component {
    // style={{flex:1, height: undefined, width: undefined}}
    render(){
        return(
            <div>
                <View>
                    <Image
                    source={this.props.question.attachment.url} alt={this.props.question.filename}
                    style={{flex:1}}
                    resizeMode="center"
                    />
                </View>
            </div>
        )
    }
}