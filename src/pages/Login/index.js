import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import GoogleButton from 'react-google-button';
import {signInWithPopup} from 'firebase/auth';
import {auth} from '../../components/firebase/config';
import {key} from '../../assets';

const login = () => {
  function SignUp() {}
  return (
    <View style={styles.background}>
      <Image source={key} style={styles.key} />
      <Text style={styles.text}>Welcome</Text>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  key: {
    marginTop: 150,
  },
  text: {
    marginTop: 15,
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
    fontSize: 35,
  },
});
