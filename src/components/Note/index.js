import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const shoplist = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Icon.Button name="check" backgroundColor="#1ED0F7" />
      </Pressable>
      <Text style={styles.title}>Paracetamol</Text>
      <Pressable>
        <Icon.Button name="trash" backgroundColor="#1ED0F7" />
      </Pressable>
    </View>
  );
};

export default shoplist;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#1ED0F7',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    flex: 1,
    marginLeft: 10,
    fontSize: 17,
    fontWeight: '500',
  },
});
