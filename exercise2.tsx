import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

const exercise2 = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* Profile Picture */}
        <Image
          style={styles.profileImage}
          source={require('./assets/image2.jpg')}
        />

        {/* Name */}
        <Text style={styles.textName}>Jo, William Benedict</Text>

        {/* Other Details */}
        <View style={styles.infoContainer}>
          <Text style={styles.textBio}>Age: 19</Text>
          <Text style={styles.textBio}>Height: 165cm</Text>
          <Text style={styles.textBio}>Weight: ~58kg</Text>
          <Text style={styles.textBio}>Gender: Male</Text>
          <Text style={styles.textBio}>Hobby: Martial Arts</Text>
          <Text style={styles.textBio}>Faculty: Computer Science</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default exercise2;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: 'black',
  },
  textName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
  },
  infoContainer: {
    marginTop: 20,
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    width: '80%',
  },
  textBio: {
    fontSize: 20,
    marginVertical: 5,
    color: 'white',
  },
});
