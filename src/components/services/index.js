import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {eyedoc, gigi, liver, lambung, konsul, bone} from '../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const services = () => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={eyedoc} style={styles.img} />
        </TouchableOpacity>
        <View>
          <TouchableOpacity>
            <Image source={konsul} style={styles.img} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image source={liver} style={styles.img} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <TouchableOpacity>
            <Image source={bone} style={styles.img} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image source={lambung} style={styles.img} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image source={gigi} style={styles.img} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default services;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 50,
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 31,
  },
  img: {
    // width: windowWidth * 0.15,
    // height: windowHeight * 0.15,
  },
});
