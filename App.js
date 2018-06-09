/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View} from 'react-native';
import NavigationBar from './src/components/home/UINavigationBar';
import GradeBySemester from './src/components/home/cGradeBySemester' // https://github.com/react-native-community/react-native-navbar#examples

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar />
        <GradeBySemester />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
};
