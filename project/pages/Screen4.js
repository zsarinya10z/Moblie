/*Example to open a screen out of the Navigation Drawer*/
import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';

export default class Screen4 extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <Text style={{fontSize: 23}}> Packget </Text>
        <Text style={{fontSize: 18}}>
          {' '}
          แหล่งท่องเที่ยวแห่งเดียวที่มีจุดเด่นที่สุด
          ในประเทศที่มีการสปาโคลนสดในทะเล
        </Text>
        <Text style={{fontSize: 20}}> ลักษณะเด่น </Text>

        <Text style={{fontSize: 18}}>
          เป็นพื้นที่ ที่มีแหล่งโคลนที่มีความอุดมสมบูรณ์สูงในการทำสปา
          มีเมนูอาหารที่เป็นเอกลักษณ์คือข้าวมันทะเลโคลนและใบโกงกางทอดเทมปุระที่อร่อยที่สุด
        </Text>
        <Text style={{fontSize: 20}}> เวลาทำการ</Text>
        <Text style={{fontSize: 18}}>วันอาทิตย์: 08:30 - 16:00</Text>
        <Text style={{fontSize: 18}}>วันจันทร์: 08:30 - 16:00</Text>
        <Text style={{fontSize: 18}}>วันอังคาร: 08:30 - 16:00</Text>
        <Text style={{fontSize: 18}}>วันพุธ: 08:30 - 16:00</Text>
        <Text style={{fontSize: 18}}>วันพฤหัสบดี: 08:30 - 16:00</Text>
        <Text style={{fontSize: 18}}>วันศุกร์: 08:30 - 16:00</Text>
        <Text style={{fontSize: 18}}>วันเสาร์: 08:30 - 16:00</Text>
        <Text style={{fontSize: 18}}>
          หมายเหตุเวลาทำการ : เปิดทำการทุกวันไม่เว้นวันหยุดราชการ
        </Text>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});
