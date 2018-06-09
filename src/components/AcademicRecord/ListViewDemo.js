import React from 'react';
import { View, ListView, StyleSheet, Text } from 'react-native';
// import Row from './Row.js'



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

class ListViewDemo extends React.Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      // dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      dataSource: [
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
        },
        {
          courseCode: "SC4201",
          courseName: "Computer Network",
          grade: "A+"
        },
        {
          courseCode: "SC4201",
          courseName: "Computer Network",
          grade: "A+"
        },
        {
          courseCode: "SC4201",
          courseName: "Computer Network",
          grade: "A+"
        },
        {
          courseCode: "SC4201",
          courseName: "Computer Network",
          grade: "A+"
        },
        {
          courseCode: "SC4201",
          courseName: "Computer Network",
          grade: "A+"
        },
        {
          courseCode: "SC4201",
          courseName: "Computer Network",
          grade: "A+"
        },
        {
          courseCode: "SC4201",
          courseName: "Computer Network",
          grade: "A+"
        },
        {
          courseCode: "SC4201",
          courseName: "Computer Network",
          grade: "A+"
        },
        {
          courseCode: "SC4201",
          courseName: "Computer Network",
          grade: "A+"
        },
        {
          courseCode: "SC4201",
          courseName: "Computer Network",
          grade: "A+"
        },
        {
          courseCode: "SC4201",
          courseName: "Computer Network",
          grade: "A+"
        }
      ]
    
    };
  }
  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        // renderRow={(data) => <View><Text>{data}</Text></View>}
        renderRow={(rowData) =>  <Text>{rowData}</Text>} //Row(data)}
        // renderRow={(data) => Row(data)}
      />
    );
  }
}

const Row = (props) => (
    <View><Text>123</Text></View>
)
    // return (
    //     <View style={styles.container}>
    //         {/* <Image source={{ uri: props.picture.large }} style={styles.photo} />
    //         <Text style={styles.text}>
    //             {`${props.name.first} ${props.name.last}`}
    //         </Text> */}
    //     </View>
    // )


export default ListViewDemo;