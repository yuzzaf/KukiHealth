import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {kupay, scan} from '../../assets';
import ButtonIcon from '../buttonicon';

const saldo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container_text}>
        <View style={styles.container_subtext}>
          <Image source={kupay} style={styles.kupay} />
          <Text style={styles.text}>Kupay</Text>
        </View>
        <View>
          <Text style={styles.rupiah}>Rp 500.000</Text>
        </View>
      </View>
      <View style={styles.button_}>
        <ButtonIcon style={styles.button_icon} />
      </View>
    </View>
  );
};

export default saldo;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1EF7F7',
    padding: 19,
    marginTop: windowHeight * 0.01,
    marginHorizontal: 50,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    flexDirection: 'row',
  },
  container_text: {
    backgroundColor: '#ffffff',
    padding: 13,
    borderRadius: 10,
    marginEnd: 15,
  },
  container_subtext: {
    flexDirection: 'row',
  },
  text: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    marginLeft: 10,
  },
  rupiah: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    marginTop: 10,
    color: '#000',
  },
  kupay: {
    width: 20,
    height: 20,
  },
  button: {
    flexDirection: 'row',
    marginLeft: 15,
  },
});
