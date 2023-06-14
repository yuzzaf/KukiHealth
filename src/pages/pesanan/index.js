import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Shoplist} from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  app,
  db,
  collection,
  addDoc,
  getFirestore,
} from '../../components/firebase/config';

const pesanan = () => {
  const [title, setTitle] = useState('');

  const addMedicineItem = async () => {
    try {
      const docRef = await addDoc(collection(db, 'Medicine'), {
        title: title,
        isChecked: false,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Medicine List</Text>
        <Text style={styles.number}>4</Text>
        <Pressable>
          <Icon.Button
            name="trash"
            backgroundColor="#1ED0F7"
            size={22}
            color="black"
            backgroundColor="#ffffff"
          />
        </Pressable>
      </View>
      <Shoplist />
      <Shoplist />
      <Shoplist />
      <Shoplist />
      <TextInput
        placeholder="Enter Medicine Item"
        style={styles.inputtext}
        value={title}
        onChangeText={text => setTitle(text)}
        onSubmitEditing={addMedicineItem}
      />
    </SafeAreaView>
  );
};

export default pesanan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 30,
    color: 'black',
    marginHorizontal: 10,
    marginVertical: 10,
    flex: 1,
  },
  number: {
    fontSize: 30,
    fontFamily: 'Poppins-SemiBold',
    marginRight: 20,
    color: 'black',
  },
  inputtext: {
    backgroundColor: 'lightgrey',
    padding: 10,
    fontSize: 17,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 'auto',
  },
});
