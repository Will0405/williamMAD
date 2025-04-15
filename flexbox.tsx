import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redcontainer} />
      <View style={styles.greencontainer} />
      <View style={styles.bluecontainer} />
    </View>
  );
};

export default flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly', // for main axis
    alignItems: 'center', //for cross axis
  },
  redcontainer: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  greencontainer: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
  },
  bluecontainer: {
    backgroundColor: 'blue',
    height: 100,
    width: 100,
  },
});
