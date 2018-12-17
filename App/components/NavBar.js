import React from "react"
import { Text, StyleSheet, View} from 'react-native'

export default class NavBar extends React.Component {
    render() {
        return(
            <View style={{flex: 1}}>
                <Text style={styles.h1}>
                    RandomQuiz
                </Text>

                <Text style={styles.h2}>
                    Hengxuan Ying y Adrián Blázquez
                </Text>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    h1:{
        textAlign: 'center',
        fontSize: 25,
        padding: 10
    },
    h2:{
        textAlign: 'center',
        fontSize: 16,
        padding: 10
    }
});