import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class GradeList extends React.Component {
  render() {
    return (
      <View>
        {
          this.props.gradeBySemester.gradeList.map((grade, index) => (
            <View style={styles.ui_container}>
              <Text style={styles.lb_courseCode}>{grade.courseCode}</Text>
              <Text style={styles.lb_grade}>{grade.grade}</Text>
              <Text style={styles.lb_courseName}>{grade.courseTitle}</Text>
              <View style={styles.ui_line}></View>
            </View>
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ui_container: {
    paddingVertical: 10,
    paddingBottom: 0,
  },
  lb_courseCode: {
    color: "#e50000",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 3
  },
  lb_courseName: {
    color: "#222222",
    fontSize: 13,
    marginTop: -2,
    marginRight: 50
  },
  lb_grade: {
    fontSize: 15,
    color: "#2485DB",
    fontWeight: 'bold',
    alignSelf: "flex-end",
    marginTop: -12,
    width:35,
    textAlign: 'center',
  },
  lb_grade_wp: {
    fontSize: 14,
    color: "#BFBFBF",
    fontWeight: 'bold',
    alignSelf: "flex-end",
    marginTop: -12,
    width:35,
    textAlign: 'center',
  },
  ui_line: {
    height: 1,
    backgroundColor: '#E8E8E8',
    marginTop: 10
  }
});

export default GradeList;