// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



// // App.tsx
// import React from 'react';
// import { GluestackUIProvider, UIConfig, Box, Text,Badge,BadgeText } from '@gluestack-ui/themed';
// // import { GluestackUIProvider, UIConfig } from '@gluestack-ui/themed';
// import {config} from '@gluestack-ui/config';

// export default function App() {
//   return (
//     <GluestackUIProvider config={config}>
//       <Box flex={1} justifyContent="center" alignItems="center" bg="$blue100">
//         <Text size="lg" color="$blue800" fontWeight="$bold">
//           Gluestack UI is working! 🎉
//         </Text>
//         <Badge size="md" variant="solid" action="success">
//         <BadgeText>Active</BadgeText>
//       </Badge>
//       </Box>
//     </GluestackUIProvider>
//   );
// }





// App.tsx
import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, CreditCard, Settings } from 'lucide-react-native';
import HomeScreen from './screens/HomeScreen';
import TransactionsScreen from './screens/TransactionsScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              if (route.name === 'Home') {
                return <Home color={color} size={size} />;
              } else if (route.name === 'Transactions') {
                return <CreditCard color={color} size={size} />;
              } else if (route.name === 'Settings') {
                return <Settings color={color} size={size} />;
              }
            },
            tabBarActiveTintColor: '#0066CC',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
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