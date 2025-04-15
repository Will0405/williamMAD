/* eslint-disable react/react-in-jsx-scope */
//1. import core component react-native
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native'; // <== component
//2. buat component
//component adalah function yg return JSX
const App = () => {
  return (
    //JSX = extended dari javascript yang dikembangkan oleh facebook
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={Styles.container}>
        <Text style={Styles.title}>Text Inside The Border</Text>
      </View>
      <TextInput style={Styles.input} placeholder="Enter Your Email" />
      <TouchableOpacity style={Styles.button}>
        <Text style={Styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <Text style={Styles.subTitle}>Image From Local Directory</Text>
      <Image style={Styles.img1} source={require('./assets/image1.jpg')} />
      <Text style={Styles.subTitle}>Image From Public</Text>
      <Image
        style={Styles.img1}
        source={{
          uri: 'https://tse3.mm.bing.net/th?id=OIP.vSBybIkF-ZVU1G6NAC3z9gHaEK&pid=Api&P=0&h=220',
        }}
      />
    </ScrollView>
  );
};
//3. export component
export default App; //<== panggil nama fungsi
//4. styling
const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'crimson',
    borderColor: 'darkblue',
    borderWidth: 10,
    padding: 30,
    margin: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: '800',
    color: 'yellow',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 25,
    marginLeft: 20,
    marginBottom: 20,
    fontWeight: '800',
    color: 'lime',
    textAlign: 'center',
  },
  img1: {
    height: 200,
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
    padding: 25,
    fontSize: 25,
    borderRadius: 15,
  },
  button: {
    backgroundColor: 'blue',
    margin: 20,
    padding: 30,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
});
