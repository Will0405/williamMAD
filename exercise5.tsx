import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Title from './components/Title';
import Input from './src/components/atom/Input';
import Button from './src/components/atom/Button';
import React, {useState} from 'react';
const Signin = () => {
  // let title = 'Welcome!!!'; //Variabel biasa
  const [title, setTitle] = useState('Welcome!!!');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    //title = 'Selamat Datang';
    setTitle('Selamat Datang');
    console.log(username, password);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
          <Input
            label={'Username'}
            placeholder={'enter your username'}
            onChangeText={e => setUsername(e)}
          />
          <Input
            label={'Password'}
            placeholder={'enter your password'}
            onChangeText={e => setPassword(e)}
            secureTextEntry={true}
          />
          <Button
            label={'Sign In With Google'}
            color="red"
            onPress={onSubmit}
          />
          <Button
            label={'Sign In With FaceBook'}
            color="blue"
            onPress={onSubmit}
          />
          <Button
            label={'Sign In With Apple'}
            color="black"
            onPress={onSubmit}
          />
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
