// import React from 'react';
// import { GluestackUIProvider } from '@gluestack-ui/themed';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Image } from '@gluestack-ui/themed';
// import HomeScreen from './screens/HomeScreen';
// import TransactionsScreen from './screens/TransactionsScreen';
// import SettingsScreen from './screens/SettingsScreen';
// import { customConfig } from './theme';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();


// export default function App() {
//   return (
//     <GluestackUIProvider config={customConfig}>
//       <NavigationContainer>
//         <Tab.Navigator
//           screenOptions={({ route }) => ({
//             tabBarIcon: ({ color, focused }) => {
//               let iconSource;
//               const iconStyle = {
//                 tintColor: color,
//                 width: 24,
//                 height: 24,
//               };

//               if (route.name === 'Home') {
//                 iconSource = require('./assets/images/home.png');
//               } else if (route.name === 'Transactions') {
//                 iconSource = require('./assets/images/multiple_stop.png');
//               } else if (route.name === 'Settings') {
//                 iconSource = require('./assets/images/settings.png');
//               }

//               return (
//                 <Image
//                   source={iconSource}
//                   alt={`${route.name} tab icon`}
//                   style={[iconStyle, focused ? { tintColor: '#199F65' } : {}]}
//                   resizeMode="contain"
//                 />
//               );
//             },
//             tabBarActiveTintColor: '#199F65',
//             tabBarInactiveTintColor: '#848484',
//             headerShown: false,
//             tabBarStyle: {
//               paddingBottom: 4,
//               height: 60,
//             },
//           })}
//         >
//           <Tab.Screen name="Home" component={HomeScreen} />
//           <Tab.Screen name="Transactions" component={TransactionsScreen} />
//           <Tab.Screen name="Settings" component={SettingsScreen} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </GluestackUIProvider>
//   );
// }




import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from '@gluestack-ui/themed';
import HomeScreen from './screens/HomeScreen';
import TransactionsScreen from './screens/TransactionsScreen';
import SettingsScreen from './screens/SettingsScreen';
import { customConfig } from './theme';
import OnboardingScreen from './screens/OnboardingScreen';
import OwnerDetailsScreen from './screens/OwnerDetailsScreen';
import BusinessDetailsScreen from './screens/BusinessDetailsScreen';
import BankDetailsScreen from './screens/BankDetailsScreen';
import TradingInfoScreen from './screens/TradingInfoScreen';
import DetailsScreen from './screens/DetailsScreen';
import Contact from './screens/Contact';
import Address from './screens/Address';
import DocumentsUpload from './screens/DocumentsUpload';
import Review from './screens/Review';
import OrganisationType from './screens/OrganizationType';
import CompanyDetails from './screens/CompanyDetails';
import ContactBusiness from './screens/ContactBusiness';
import AddressBusiness from './screens/AddressBusiness';
import DocumentsBusiness from './screens/DocumentsBusiness';
import ReviewBusiness from './screens/ReviewBusiness';
import DocumentsBank from './screens/DocumentsBank';
import CongoScreen from './screens/CongoScreen';
import { Provider } from 'react-redux';
import store from "./store/store"
import HomeOnboard from './screens/HomeOnboard';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Create a stack navigator for the Home tab
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="Details" component={DetailsScreen} />
  <Stack.Screen name="OwnerDetails" component={OwnerDetailsScreen} />
  <Stack.Screen name="BusinessDetails" component={BusinessDetailsScreen} />
  <Stack.Screen name="TradingInfo" component={TradingInfoScreen} />
  <Stack.Screen name="BankDetails" component={BankDetailsScreen} />
  <Stack.Screen name="Contact" component={Contact} />
  <Stack.Screen name="Documents" component={DocumentsUpload} />
  <Stack.Screen name="Review" component={Review} />
  <Stack.Screen name="Organization" component={OrganisationType} />
  <Stack.Screen name="Company" component={CompanyDetails} />
  <Stack.Screen name="ContactBusiness" component={ContactBusiness} />
  <Stack.Screen name="DocumentsBusiness" component={DocumentsBusiness} />
  <Stack.Screen name="ReviewBusiness" component={ReviewBusiness} />
  <Stack.Screen name="DocumentsBank" component={DocumentsBank} />
  <Stack.Screen name="Congo" component={CongoScreen} />
  <Stack.Screen name="HomeOnboard" component={HomeOnboard} />
  <Stack.Screen name="AddressBusiness" component={AddressBusiness} />







    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
    <GluestackUIProvider config={customConfig}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, focused }) => {
              let iconSource;
              
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
                  width={24}
                  height={24}
                  resizeMode="contain"
                  style={{ 
                    tintColor: focused ? '#199F65' : '#848484' 
                  }}
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
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Transactions" component={TransactionsScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
    </Provider>
  );
}