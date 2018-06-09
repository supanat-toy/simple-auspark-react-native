import React, { Component } from 'react';
import { Text, View, ListView, StyleSheet } from 'react-native';
// import Row from './Row';

class academic_record extends Component {
  state = {
    gradeList: [
      {
        courseCode: "CS1101",
        courseName: "Computer Programming I",
        grade: "A"
      },
      {
        courseCode: "CS1102",
        courseName: "Computer Programming II",
        grade: "B"
      },
      {
        courseCode: "BG2000",
        courseName: "English IV",
        grade: "B+"
      },
      {
        courseCode: "SC4201",
        courseName: "Computer Network",
        grade: "A+"
      }
    ]
  };

  render() {
    return (
      <View>
        <ListView
          style={style.ui_container}
          dataSource={this.state.gradeList}
          renderRow={(data) => <View><Text>{1}</Text></View>}
        // renderRow={this.renderRow.bind(this)}
        />;
      </View>
    );
  }

  // renderRow(item) {
  //   return (
  //     <TouchableHighlight underlayColor='#dddddd' style={{ height: 44 }}>
  //       {/* <View>
  //        <Text style={{fontSize: 20, color: '#000000'}} numberOfLines={1}>{rowData}</Text>
  //        <View style={{height: 1, backgroundColor: '#dddddd'}}/>
  //        </View> */}
  //       <View style={style.ui_grade}>
  //         <Text style={style.lb_courseCode}>{item}</Text>
  //         <Text style={style.lb_grade}>{item}</Text>
  //         <Text style={style.lb_courseName}>{item}</Text>
  //       </View>
  //     </TouchableHighlight>
  //   );
  // }
}

export default academic_record

const style = StyleSheet.create({
  ui_container: {
    flex: 1,
    marginTop: 20,
  },
  ui_grade: {
    width: 350,
    padding: 5,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderStyle: "solid"
  },
  lb_courseCode: {
    color: "#e50000",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 3
  },
  lb_courseName: {
    color: "#222222",
    fontSize: 14,
    marginTop: -2
  },
  lb_grade: {
    fontSize: 15,
    color: "#e50000",
    alignSelf: "flex-end",
    marginTop: -12
  }
});