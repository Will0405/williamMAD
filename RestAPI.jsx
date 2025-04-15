import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserData from './components/UserData';

const RestAPI = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users?per_page=12')
      .then(res => setUsers(res.data.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>User List</Text>
      {users.map(user => (
        <UserData
          key={user.id}
          firstName={user.first_name}
          lastName={user.last_name}
          email={user.email}
          avatar={user.avatar}
        />
      ))}
    </ScrollView>
  );
};

export default RestAPI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
