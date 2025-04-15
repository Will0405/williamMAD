import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const exercise4 = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.topSection]}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>

      {/* Middle Section */}
      <View style={styles.middleSection}>
        <Image
          style={styles.logo}
          source={require('./assets/logo-with-motto-3.png')}
        />
      </View>

      {/* Bottom Section */}
      <View style={[styles.bottomSection]}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },

  topSection: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  middleSection: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  blackBox: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
  },
  yellowBox: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
  },
  logo: {
    width: 390,
    height: 100,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default exercise4;
