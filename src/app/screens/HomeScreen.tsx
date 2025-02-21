import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { BottomTabParamList } from '../index';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type Props = BottomTabScreenProps<BottomTabParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Doing page"
          onPress={() => navigation.navigate('Work',{screen:"Doing"})}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Profile page"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
  },
});