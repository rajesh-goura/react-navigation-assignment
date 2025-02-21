import 'react-native-gesture-handler';
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import DoneScreen from "./screens/DoneScreen";
import DoingScreen from "./screens/DoingScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ProfileScreen from "./screens/ProfileScreen";

export type RootStackParamList = {
  Welcome: undefined;
  Main: undefined;
  Profile: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Work: { screen: keyof WorkTabParamList };
  Profile:undefined;
};

export type WorkTabParamList = {
  Done: undefined;
  Doing: undefined;
};

export type DrawerParamList = {
  DashBoard: undefined;
  Settings: undefined;
  Profile:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const TopTab = createMaterialTopTabNavigator<WorkTabParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

const WorkTabs = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Done" component={DoneScreen} />
      <TopTab.Screen name="Doing" component={DoingScreen} />
    </TopTab.Navigator>
  );
};

const MyTabs = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <BottomTab.Screen name="Work" component={WorkTabs} options={{ headerShown: false }}/>
    </BottomTab.Navigator>
  );
};

const DrawerContent = () => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="DashBoard" component={MyTabs}  />
      <Drawer.Screen name="Settings" component={SettingsScreen}  />
      <Drawer.Screen name='Profile' component={ProfileScreen}/>
    </Drawer.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Main" component={DrawerContent} options={{ headerShown: false }}/>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default MainNavigation;

