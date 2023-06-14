import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {scan, topup} from '../../assets';

const ButtonIcon = () => {
  return (
    <View style={styles.button_container}>
      <TouchableOpacity>
        <Image source={scan} style={styles.imgscan} />
      </TouchableOpacity>
      <View style={styles.topup}>
        <TouchableOpacity>
          <Image source={topup} style={styles.imgtopup} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ButtonIcon;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  button_container: {
    flexDirection: 'row',
  },
  imgscan: {
    width: windowWidth * 0.2,
    height: windowHeight * 0.1,
  },
  imgtopup: {
    width: windowWidth * 0.2,
    height: windowHeight * 0.1,
    marginRight: 19,
  },
});
