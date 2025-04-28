import React, { useEffect, useState } from 'react';
import LottieView from 'lottie-react-native';

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
import { useOwnerApi } from '../hooks/useOwnerApi';
import { useCompanyApi } from '../hooks/useCompanyApi';
import { useTradingApi } from '../hooks/useTradingApi';
import { useBankApi } from '../hooks/useBankApi';
import {ownerId,companyId,tradeID,bankID} from '../data'


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

  const { getOwnerDetails } = useOwnerApi();
    const {getCompanyDetails}=useCompanyApi()
    const {getTradingDetails}=useTradingApi()
    const {getBankDetails}=useBankApi()

  // const ownerId = 7;
  // const companyId=3;
  // const tradeID=2;
  // const bankID=3;

  const [track, setTrack] = useState<number>(0); 
  const [progress, setProgress] = useState<number>(0); // State for progress


   
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const ownerData = await getOwnerDetails(ownerId);
        console.log('Owner data:', ownerData);
        if (ownerData?.data?.flag === 1) {
          setTrack(1); // Use setTrack to update the state
        }

        const companyData = await getCompanyDetails(companyId);
        console.log('Company data:', companyData);
        if (companyData?.data?.flag === 1) {
          setTrack(2);
        }

        const tradingData = await getTradingDetails(tradeID);
        console.log('Trading data:', tradingData);

        if (tradingData?.data?.flag === 1) {
          setTrack(3);
        }

        const bankData = await getBankDetails(bankID);
        console.log('Banking data:', bankData);
        if (bankData?.data?.flag === 1) {
          setTrack(4);
        }

      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };

    fetchDetails();
  }, []); 

  useEffect(() => {
    switch (track) {
      case 1:
        setProgress(25);
        break;
      case 2:
        setProgress(50);
        break;
      case 3:
        setProgress(75);
        break;
      case 4:
        setProgress(100);
        break;
      default:
        setProgress(0); 

    }
  }, [track]); 

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
        <Text $lg-fontSize="$2xl" $sm-fontSize="$lg" $md-fontSize="$xl" fontWeight="$bold">
          John's Takeaway
        </Text>
      </HStack>

      <VStack space="md">
        <Box p="$2" borderRadius="$md">
          <Text $md-fontSize="$md"  $lg-fontSize="$lg"  letterSpacing="$lg" fontWeight="$700" color="$black">
            Hey John, 👋
          </Text>
          <Text $xs-fontSize="$xs"  $sm-fontSize="$sm" $md-fontSize="$md"  $lg-fontSize="$lg" letterSpacing="$xl" marginTop="$1" color="$grey">
            Here's the latest update on your store.
          </Text>
        </Box>

       
        
<Pressable onPress={() => navigation.navigate('Onboarding')}>
  <Box 
    borderRadius="$lg" 
    overflow="hidden" 
    width="100%" 
    height={200}
    marginRight={-16}
  >
    <ImageBackground
      source={progress === 100
        ? require('../assets/images/new.png') 
        : require('../assets/images/card.png') }
      resizeMode="cover"
      style={{ 
        flex: 1,
        width: '100%',
      }}
      imageStyle={{ 
        borderRadius: 16,
        width: '100%',
      }}
    >
       <Box p="$4" flex={1} justifyContent="space-between">
        <VStack space="sm">
          <Text fontSize="$lg" fontWeight="$bold" color="$black">
            Available balance
          </Text>
          
          <Box flexDirection="row">
  <Box height={50} width={70}>
    <LottieView
      source={require('../assets/lotty.json')}
      autoPlay
      loop
      style={{ height: '100%', width: '100%' }}
    />
  </Box>
 
  </Box>
        </VStack>

        <VStack space="sm">
         

<HStack 
  alignItems="center" 
  space="xs"
  flexWrap="nowrap"
>
<Icon 
  as={AlertCircleIcon} 
  color={progress === 100 ? "$black" : "$amber600"} 
  size="xs" 
/>

  
  <Text 
    fontSize="$2xs" 
    color="$black" 
    underline
    numberOfLines={1}
    ellipsizeMode="tail"
    flexShrink={1}
    $xs={{ fontSize: "$2xs" }} 
    $sm={{ fontSize: "$xs" }} 
    $md={{ fontSize: "$sm" }} 
    $lg={{ fontSize: "$md" }} 
  >
    {
      progress==100 ? "Onboarding verification is pending and will be verified soon." : "Complete the onboarding verification to withdraw money."
    }
    
  </Text>
</HStack>


{
  progress==100 ? "" :
  <VStack space="xs">
            <HStack justifyContent="space-between" alignItems="center">
              <Text fontSize="$sm" color="$black">
                Verification progress
              </Text>
              <Text fontSize="$sm" fontWeight="$bold" color="$black">
                {progress}%
              </Text>
            </HStack>
            <Progress value={progress} h="$1.5" bgColor="$coolGray300" rounded="$full">
        <ProgressFilledTrack h="$1.5" bgColor="$black" />
      </Progress>
          </VStack>
}
          
        </VStack>
      </Box>
    </ImageBackground>
  </Box>
</Pressable>


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
