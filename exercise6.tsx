import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Title from './components/Title';
import Input from './components/Input';
import Button from './components/Button';
import React, {useState} from 'react';
const Signin = () => {
  // let title = 'Welcome!!!'; //Variabel biasa
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');

  const onSubmit = () => {
    console.log(name, username, email, address, phonenumber);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Title label={'WELCOME'} />
          <Input
            label={'Name'}
            placeholder={'Masukkan nama lengkap anda'}
            onChangeText={e => setName(e)}
          />
          <Input
            label={'Username'}
            placeholder={'Masukkan username anda'}
            onChangeText={e => setUsername(e)}
          />
          <Input
            label={'Email'}
            placeholder={'Masukkan email anda'}
            onChangeText={e => setEmail(e)}
          />
          <Input
            label={'Address'}
            placeholder={'Masukkan alamat anda'}
            onChangeText={e => setAddress(e)}
          />
          <Input
            label={'Phone Number'}
            placeholder={'Masukkan nomor telepon anda'}
            onChangeText={e => setPhoneNumber(e)}
          />
          <Button label={'Register'} color="magenta" onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};
export default Signin;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  infoContainer: {
    marginTop: 20,
    backgroundColor: 'gray',
    padding: 15,
    borderRadius: 10,
  },
});
