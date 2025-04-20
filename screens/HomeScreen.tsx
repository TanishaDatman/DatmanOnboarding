// // screens/HomeScreen.tsx
// import React, { useState } from 'react';
// import {
//   Box,
//   Text,
//   VStack,
//   HStack,
//   Progress,
//   ProgressFilledTrack,
//   Divider,
//   Button,
//   ButtonText,
//   Badge,
//   BadgeText,
//   ScrollView,
//   Image,
//   Icon,
//   AlertCircleIcon,
//   ImageBackground,
//   useBreakpointValue,
// } from '@gluestack-ui/themed';
// import { AlertCircle, Phone, Clock, ArrowUpRight } from 'lucide-react-native';
// import { Pressable, useWindowDimensions } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// // import { AlertCircle, Phone, Clock, ArrowUpRight } from 'lucide-react';

// export default function HomeScreen() {

//     const [activeItem, setActiveItem] = useState<string | null>(null);


//     const navigation=useNavigation<any>();;

//   const actions = [
//     { 
//       id: 'lastPayout',
//       label: 'Last payout', 
//       icon: require('../assets/images/card_travel.png')
//     },
//     { 
//       id: 'alerts',
//       label: 'Alerts', 
//       icon: require('../assets/images/notifications_unread.png')
//     },
//     { 
//       id: 'callStatus',
//       label: 'Call status', 
//       icon: require('../assets/images/perm_phone_msg.png')
//     },
//     { 
//       id: 'recentPayments',
//       label: 'Recent Payments', 
//       icon: require('../assets/images/credit_card_clock.png')
//     },
//   ];

//   const { width } = useWindowDimensions();

//   // Calculate items per row based on screen width
//   const getItemsPerRow = () => {
//     if (width < 768) return 2;    // Mobile
//     if (width < 1024) return 3;   // Tablet
//     return 4;                     // Desktop
//   };
//   const itemsPerRow = getItemsPerRow();
//   const boxWidth = `${100 / itemsPerRow -2}%`; // Account for small margin


//   return (
//     <ScrollView bg="$white" marginTop="$5" bgColor='#F5F5F5' flex={1} p="$4">
//         <HStack marginBottom="$7" alignItems="center" space="sm">
//           <Image
//             source={require('../assets/images/logo.png')}
//             alt="John's Takeaway Logo"
//             h="$8"  // 16px
//             w="$8"  // 16px
//             resizeMode="contain"
//           />
//           <Text fontSize="$xl" fontWeight="$bold">
//             John's Takeaway  
//           </Text>
//         </HStack>
//       <VStack space="md">
//         {/* <Text fontSize="$xl" marginTop="$20" fontWeight="$bold">
//           John's Takeaway
//         </Text> */}

//         <Box bg="$" p="$2" borderRadius="$md">
//           <Text fontSize="$xl" letterSpacing="$lg" fontWeight="$700" color="$black">
//             Hey John, 👋
//           </Text>
//           <Text fontSize="$lg" letterSpacing="$xl" marginTop="$1" color="$grey">
//             Here's the latest update on your store.
//           </Text>
//         </Box>

      
// <Box borderRadius="$lg" overflow="hidden" width="100%" height={200}>
//   <ImageBackground
//     source={require('../assets/images/card.png')}
//     resizeMode="cover" 
//     style={{ flex: 1 }}
//     imageStyle={{ borderRadius: 16 }}
//   >
//     {/* Internal container for padding */}
//     <Box p="$4" flex={1} justifyContent="space-between">
//       <VStack space="sm">
//         <Text fontSize="$lg" fontWeight="$bold" color="$black">
//           Available balance
//         </Text>
//         <Text fontSize="$3xl" fontWeight="$bold" color="$black">
//           **********
//         </Text>
//       </VStack>

//       <VStack space="sm">
//         <HStack space="sm" alignItems="center">
//           <Icon as={AlertCircleIcon} color="$amber600" />
//           <Text fontSize="$sm" marginTop="$2" color="$black">
//   Complete the onboarding verification to withdraw money.{' '}
//   <Pressable onPress={() => navigation.navigate('Onboarding')} >
//     <Text fontSize="$sm" color="$amber600" >
//       Complete
//     </Text>
//   </Pressable>
// </Text>

//         </HStack>

//         <VStack space="xs">
//           <HStack justifyContent="space-between" alignItems="center">
//             <Text fontSize="$sm" color="$black">Verification progress</Text>
//             <Text fontSize="$sm" fontWeight="$bold" color="$black">30%</Text>
//           </HStack>
//           <Progress value={30} h="$1.5" bgColor="$coolGray300" rounded="$full">
//             <ProgressFilledTrack h="$1.5" bgColor="$black" />
//           </Progress>
//         </VStack>
//       </VStack>
//     </Box>
//   </ImageBackground>
// </Box>



//         <Divider my="$2" />





// <HStack 
//       flexWrap="wrap" 
//       justifyContent="space-between"
//       // mt="$4" 
//       // mb="$2" 
//       px="$2"
//     >
//       {actions.map((action) => (
//         <Box 
//           key={action.id}
//           width={boxWidth}
//           mb="$2"
//           px="$1"
//         >
//           <Pressable
//             onPress={() => setActiveItem(activeItem === action.id ? null : action.id)}
//           >
//             <Box
//               bg="$white"
//               p="$3"
//               borderRadius="$md"
//               alignItems="center"
//               justifyContent="space-between"
//               borderWidth={1}
//               borderColor={activeItem === action.id ? '$brandSecondary' : 'transparent'}
//               height={100}
//             >
//               <Box
//                 bg={activeItem === action.id ? '$warningLight' : 'white'}
//                 p="$2"
//                 borderRadius="$full"
//                 mb="$2"
//               >
//                 <Image
//                   source={action.icon}
//                   alt={action.label}
//                   width={24}
//                   height={24}
//                   resizeMode="contain"
//                   style={{
//                     tintColor: activeItem === action.id ? '$warningLight' : '$backgroundTertiary'
//                   }}
//                 />
//               </Box>
//               <Text
//                 fontSize="$sm"
//                 fontWeight={activeItem === action.id ? '$bold' : '$normal'}
//                 color={activeItem === action.id ? '$brandSecondary' : '$textPrimary'}
//                 textAlign="center"
//                 numberOfLines={1}
//                 ellipsizeMode="tail"
//               >
//                 {action.label}
//               </Text>
//             </Box>
//           </Pressable>
//         </Box>
//       ))}
//     </HStack>



//       </VStack>
//     </ScrollView>
//   );
// }



// screens/HomeScreen.tsx
import React, { useState } from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  Progress,
  ProgressFilledTrack,
  Divider,
  ScrollView,
  Image,
  Icon,
  AlertCircleIcon,
  ImageBackground,
} from '@gluestack-ui/themed';
import { Pressable, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AlertCircle } from 'lucide-react-native';

export default function HomeScreen() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const navigation = useNavigation<any>();

  const actions = [
    {
      id: 'lastPayout',
      label: 'Last payout',
      icon: require('../assets/images/card_travel.png'),
    },
    {
      id: 'alerts',
      label: 'Alerts',
      icon: require('../assets/images/notifications_unread.png'),
    },
    {
      id: 'callStatus',
      label: 'Call status',
      icon: require('../assets/images/perm_phone_msg.png'),
    },
    {
      id: 'recentPayments',
      label: 'Recent Payments',
      icon: require('../assets/images/credit_card_clock.png'),
    },
  ];

  const { width } = useWindowDimensions();

  const getItemsPerRow = () => {
    if (width < 768) return 2;
    if (width < 1024) return 3;
    return 4;
  };

  const itemsPerRow = getItemsPerRow();
  const boxWidth = `${100 / itemsPerRow - 2}%`; // string like "48%"

  return (
    <ScrollView bg="$white" marginTop="$5" bgColor="#F5F5F5" flex={1} p="$4">
      <HStack marginBottom="$7" alignItems="center" space="sm">
        <Image
          source={require('../assets/images/logo.png')}
          alt="John's Takeaway Logo"
          h="$8"
          w="$8"
          resizeMode="contain"
        />
        <Text fontSize="$xl" fontWeight="$bold">
          John's Takeaway
        </Text>
      </HStack>

      <VStack space="md">
        <Box p="$2" borderRadius="$md">
          <Text fontSize="$xl" letterSpacing="$lg" fontWeight="$700" color="$black">
            Hey John, 👋
          </Text>
          <Text fontSize="$lg" letterSpacing="$xl" marginTop="$1" color="$grey">
            Here's the latest update on your store.
          </Text>
        </Box>

        <Box borderRadius="$lg" overflow="hidden" width="100%" height={200}>
          <ImageBackground
            source={require('../assets/images/card.png')}
            resizeMode="cover"
            style={{ flex: 1 }}
            imageStyle={{ borderRadius: 16 }}
          >
            <Box p="$4" flex={1} justifyContent="space-between">
              <VStack space="sm">
                <Text fontSize="$lg" fontWeight="$bold" color="$black">
                  Available balance
                </Text>
                <Text fontSize="$3xl" fontWeight="$bold" color="$black">
                  **********
                </Text>
              </VStack>

              <VStack space="sm">
                <HStack space="sm" alignItems="center">
                  <Icon as={AlertCircleIcon} color="$amber600" />
                  <Text fontSize="$sm" marginTop="$2" color="$black">
                    Complete the onboarding verification to withdraw money.{' '}
                    <Pressable onPress={() => navigation.navigate('Onboarding')}>
                      <Text fontSize="$sm" color="$amber600">
                        Complete
                      </Text>
                    </Pressable>
                  </Text>
                </HStack>

                <VStack space="xs">
                  <HStack justifyContent="space-between" alignItems="center">
                    <Text fontSize="$sm" color="$black">
                      Verification progress
                    </Text>
                    <Text fontSize="$sm" fontWeight="$bold" color="$black">
                      30%
                    </Text>
                  </HStack>
                  <Progress value={30} h="$1.5" bgColor="$coolGray300" rounded="$full">
                    <ProgressFilledTrack h="$1.5" bgColor="$black" />
                  </Progress>
                </VStack>
              </VStack>
            </Box>
          </ImageBackground>
        </Box>

        <Divider my="$2" />

        <HStack flexWrap="wrap" justifyContent="space-between" px="$2">
          {actions.map((action) => (
            <Box key={action.id} mb="$2" px="$1" width="$1/2">
              <Pressable onPress={() => setActiveItem(activeItem === action.id ? null : action.id)}>
                <Box
                  bg="$white"
                  p="$3"
                  borderRadius="$md"
                  alignItems="center"
                  justifyContent="space-between"
                  borderWidth={1}
                  borderColor={activeItem === action.id ? '$brandSecondary' : 'transparent'}
                  height={100}
                >
                  <Box
                    bg={activeItem === action.id ? '$warningLight' : 'white'}
                    p="$2"
                    borderRadius="$full"
                    mb="$2"
                  >
                    <Image
                      source={action.icon}
                      alt={action.label}
                      width={24}
                      height={24}
                      resizeMode="contain"
                      style={{
                        tintColor: activeItem === action.id ? '#F59E0B' : '#A3A3A3', // fallback color
                      }}
                    />
                  </Box>
                  <Text
                    fontSize="$sm"
                    fontWeight={activeItem === action.id ? '$bold' : '$normal'}
                    color={activeItem === action.id ? '$brandSecondary' : '$textPrimary'}
                    textAlign="center"
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {action.label}
                  </Text>
                </Box>
              </Pressable>
            </Box>
          ))}
        </HStack>
      </VStack>
    </ScrollView>
  );
}
