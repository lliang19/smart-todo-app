import React, { FC, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrentUser } from '../selectors/global';
import { username } from '../stores/global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
});

const App: FC = () => {
  const user = useSelector(getCurrentUser);
  const dispatch = useDispatch();
  const [currUser, setCurrUser] = useState<string>('');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>
        Current User:
        {` ${user ?? ''}`}
      </Text>
      <TextInput
        label="User"
        value={currUser}
        onChangeText={(usr: string) => setCurrUser(usr)}
        style={{ width: '100%' }}
      />
      <Button onPress={() => dispatch(username(currUser))}>Submit User</Button>
    </View>
  );
};

export default App;
