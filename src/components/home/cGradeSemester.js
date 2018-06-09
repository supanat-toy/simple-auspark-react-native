
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class GradeSemester extends React.Component {
  render() {
    return (
      <View style={styles.ui_container}>
        <Text style={styles.lb_semesterYear}>
          Semester {this.props.gradeBySemester.semester}/{this.props.gradeBySemester.year}
        </Text>
        <View style={styles.ui_right}>
          <View style={styles.ui_gpa}>
            <Text style={styles.lb_gpa}>{this.props.gradeBySemester.totalGPA}</Text>
          </View>
          <View style={styles.ui_credit}>
            <Text style={styles.lb_credit}>{this.props.gradeBySemester.totalCredit} Credits</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ui_container: {
    paddingHorizontal: 0,
    paddingVertical: 10,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  lb_semesterYear: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    flexWrap:'wrap',
  },
  ui_right: {
    flexDirection:'row',
    alignSelf: 'flex-end',
  },
  ui_gpa: {
    backgroundColor: '#E50000',
    alignSelf: 'flex-end',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 10,
    flexWrap:'wrap'
  },
  lb_gpa: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  ui_credit: {
    backgroundColor: '#E7EFFC',
    alignSelf: 'flex-end',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 10,
    flexWrap:'wrap',
    marginLeft: 10
  },
  lb_credit: {
    color: '#242527',
    fontSize: 14,
    fontWeight: 'bold',
  }
});

export default GradeSemester;