import React from "react"
import { Text, StyleSheet, View, Image} from 'react-native'

export default class Score extends React.Component {
	render() {
		return(
			<View style={{flex:1,
				flexDirection: 'row',
				alignItems: 'center'}}>
				<Text style={styles.h2}>Score:</Text>
				<Text style={styles.h3}>
					{this.props.finished ? this.props.score+'/10' : "No answer, no score"}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	h2:{
		textAlign: 'center',
		fontSize: 16,
		padding: 10,
		flex: 1
	},
	h3:{
		textAlign: 'center',
		fontSize: 10,
		padding: 10,
		flex: 1
	}
});
