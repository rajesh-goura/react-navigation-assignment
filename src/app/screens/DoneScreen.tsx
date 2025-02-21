import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DoneScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Done Screen</Text>
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

export default DoneScreen;