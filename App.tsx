import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from '@gluestack-ui/themed';
import HomeScreen from './screens/HomeScreen';
import TransactionsScreen from './screens/TransactionsScreen';
import SettingsScreen from './screens/SettingsScreen';
import { customConfig } from './theme';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GluestackUIProvider config={customConfig}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, focused }) => {
              let iconSource;
              const iconStyle = {
                tintColor: color,
                width: 24,
                height: 24,
              };

              if (route.name === 'Home') {
                iconSource = require('./assets/images/home.png');
              } else if (route.name === 'Transactions') {
                iconSource = require('./assets/images/multiple_stop.png');
              } else if (route.name === 'Settings') {
                iconSource = require('./assets/images/settings.png');
              }

              return (
                <Image
                  source={iconSource}
                  alt={`${route.name} tab icon`}
                  style={[iconStyle, focused ? { tintColor: '#199F65' } : {}]}
                  resizeMode="contain"
                />
              );
            },
            tabBarActiveTintColor: '#199F65',
            tabBarInactiveTintColor: '#848484',
            headerShown: false,
            tabBarStyle: {
              paddingBottom: 4,
              height: 60,
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Transactions" component={TransactionsScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}