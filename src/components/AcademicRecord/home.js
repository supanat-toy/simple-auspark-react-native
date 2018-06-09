import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Home extends Component {
    state = {
        myState: '123'
    }
    updateState = this.setState({
        myState: '456'
    })
    render() {
        return (
            <View>
                <Text onPress = {this.updateState}>
                    123{this.state.myState}
                </Text>
            </View>
        );
    }
}

export default Home;