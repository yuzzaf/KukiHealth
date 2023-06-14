import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {head, news} from '../../assets';
import {Saldo, Services} from '../../components';

const home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={head} style={styles.header}>
        <View style={styles.hello}>
          <Text style={styles.text}>Selamat Datang,</Text>
          <Text style={styles.name}>Yuzzaf</Text>
        </View>
      </ImageBackground>
      <Saldo />
      <Text style={styles.layanan}>Layanan Kami</Text>
      <Services />
      <Image source={news} style={styles.news} />
    </View>
  );
};

export default home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.17,
  },
  hello: {
    marginTop: windowHeight * 0.05,
    marginLeft: windowWidth * 0.05,
  },
  text: {
    fontSize: 25,
    fontFamily: 'Quicksand-SemiBold',
  },
  name: {
    fontSize: 20,
    fontFamily: 'Quicksand-Bold',
  },
  layanan: {
    paddingHorizontal: 30,
    paddingTop: 20,
    fontFamily: 'Poppins-Bold',
    color: 'black',
  },
  news: {
    marginHorizontal: 40,
  },
});
