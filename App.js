import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ReduxProvider from "./App/redux/ReduxProvider";

export default class App extends React.Component {
  render() {
    return (
        <View>
          <ReduxProvider/>
          <Text>
            Worksss
          </Text>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
