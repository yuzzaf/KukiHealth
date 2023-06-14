import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React, {useEffect} from 'react';
import {logo, splashbackground} from '../../assets';

const splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Tabs');
    }, 3000);
  }, [navigation]);

  return (
    <ImageBackground source={splashbackground} style={styles.background}>
      <Image source={logo} style={styles.logo} />
    </ImageBackground>
  );
};

export default splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 252,
    height: 110,
  },
});
