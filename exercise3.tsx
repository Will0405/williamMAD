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
const exercise3 = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Title label={'Google'} />
          <Input label={'Username'} placeholder={'enter your username'} />
          <Input label={'Password'} placeholder={'enter your password'} />
          <Button label={'Sign In'} color="red" />
        </View>
        <View style={styles.infoContainer}>
          <Title label={'Facebook'} />
          <Input label={'Username'} placeholder={'enter your username'} />
          <Input label={'Password'} placeholder={'enter your password'} />
          <Button label={'Sign In'} color="blue" />
        </View>
        <View style={styles.infoContainer}>
          <Title label={'Apple'} />
          <Input label={'Username'} placeholder={'enter your username'} />
          <Input label={'Password'} placeholder={'enter your password'} />
          <Button label={'Sign In'} color="black" />
        </View>
      </View>
    </ScrollView>
  );
};

export default exercise3;

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
