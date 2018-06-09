import React, { Component, PropTypes } from 'react'
import { Platform, Text, View, StyleSheet } from 'react-native';
import NavigationBar from 'react-native-navbar';

class UINavigationBar extends Component {
  render() {
    return (
      <NavigationBar
        style={styles.navigationBar}
        title={titleConfig}
        statusBar={statusBarConfig}
      />
    );
  }
}

export default UINavigationBar;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = {
  container: {
    flex: 1,
  },
  navigationBar: {
    backgroundColor:'#e50000',
  },
  appBar: {
    backgroundColor:'#e50000',
    height: APPBAR_HEIGHT,
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:0,
    lineHeight:42,
  },
};

const titleConfig = {
  title: 'Academic Record',
  style: styles.appBar,
  tintColor: '#ffffff'
};

const statusBarConfig = {
  style: "light-content",
  tintColor: "#e50000"
};