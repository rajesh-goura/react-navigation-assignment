import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DoingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Doing Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DoingScreen;