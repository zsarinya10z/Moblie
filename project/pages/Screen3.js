/*Example to open a screen out of the Navigation Drawer*/
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';

export default class ExampleOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['CID', 'CName', 'CTelephon', 'CSex'],
      tableData: [
        [' 1002', 'Chutima	', '084-352-6578', 'M'],
        ['1003', 'Pathompong', '084-733-0422', 'F'],
        ['  1004', 'Siwakorn', '092-958-6655', 'F'],
        [' 1005	', 'Thitipong', '089-744-5678', 'M'],
      ],
    };
    this.state = {
      tableHead: ['CID', 'GTour', 'BTour', 'Lunch', 'Dinner', 'Date'],
      tableData: [
        [' 1002', '1', '1', '1', '1', '12/10/2020'],
        ['1005', '1', '0', '1', '0', '13/10/2020'],
      ],
    };
  }
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 23}}> TABLE CUSTOMER</Text>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={state.tableData} textStyle={styles.text} />
        </Table>
        <Text style={{fontSize: 23}}> TABLE CUSTOMER FOR DATE</Text>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={state.tableData} textStyle={styles.text} />
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6},
});
