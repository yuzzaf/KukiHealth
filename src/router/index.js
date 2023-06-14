import React from 'react';
import {home, splash, pesanan, login} from '../pages';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="User"
        component={login}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Home" component={home} options={{headerShown: false}} />
      <Tab.Screen
        name="Pharmacy"
        component={pesanan}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
