import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ReduxProvider from "./App/redux/ReduxProvider";
//
// <Text style={{fontSize: 30}}>
//     Worksss
// </Text>

export default class App extends React.Component {
  render() {
    return (
            <ReduxProvider/>
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
