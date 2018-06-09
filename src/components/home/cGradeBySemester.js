import React, { Component } from 'react';
import GradeList from './cGradeList.js';
import Header from './cGradeSemester.js';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';



var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let apiURL = "http://13.76.93.129/ws-888-student/auspark/student/GetGradeListBySemesterAndByCurriculum?studentcode=5611779";
// let apiURL = "https://facebook.github.io/react-native/movies.json";
class GradeBySemester extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        byCurriculum: ds,
        bySemester: ds,
    };
  }

  componentWillMount() {
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ 
            byCurriculum: ds.cloneWithRows(responseJson.byCurriculum),
            bySemester: ds.cloneWithRows(responseJson.bySemester)
         });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
      return (
        <View style={styles.container}>
          <ListView
            style={styles.listView}
            dataSource={this.state.bySemester}
            renderRow={(data) => BySemester(data)}
          />
        </View>
      );
  }
}

const BySemester = (props) => (
    <View>
        <Header gradeBySemester={props} />
        <GradeList gradeBySemester={props} />
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  listView: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  }
});


export default GradeBySemester;