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
  Button,
  ButtonText,
  Badge,
  BadgeText,
  ScrollView,
  Image,
} from '@gluestack-ui/themed';
import { AlertCircle, Phone, Clock, ArrowUpRight } from 'lucide-react-native';
import { Pressable } from 'react-native';
// import { AlertCircle, Phone, Clock, ArrowUpRight } from 'lucide-react';

export default function HomeScreen() {

    const [activeItem, setActiveItem] = useState<string | null>(null);

  const actions = [
    { 
      id: 'lastPayout',
      label: 'Last payout', 
      icon: require('../assets/images/card_travel.png')
    },
    { 
      id: 'alerts',
      label: 'Alerts', 
      icon: require('../assets/images/notifications_unread.png')
    },
    { 
      id: 'callStatus',
      label: 'Call status', 
      icon: require('../assets/images/perm_phone_msg.png')
    },
    { 
      id: 'recentPayments',
      label: 'Recent Payments', 
      icon: require('../assets/images/credit_card_clock.png')
    },
  ];

  return (
    <ScrollView bg="$white" marginTop="$5" flex={1} p="$4">
        <HStack marginBottom="$7" alignItems="center" space="sm">
          <Image
            source={require('../assets/images/logo.png')}
            alt="John's Takeaway Logo"
            h="$8"  // 16px
            w="$8"  // 16px
            resizeMode="contain"
          />
          <Text fontSize="$xl" fontWeight="$bold">
            John's Takeaway
          </Text>
        </HStack>
      <VStack space="md">
        {/* <Text fontSize="$xl" marginTop="$20" fontWeight="$bold">
          John's Takeaway
        </Text> */}

        <Box bg="$" p="$4" borderRadius="$md">
          <Text fontSize="$sm" color="$blue800">
            Hey John,
          </Text>
          <Text fontSize="$sm" color="$blue800">
            Here's the latest update on your store.
          </Text>
        </Box>

        <VStack space="sm">
          <Text fontSize="$lg" fontWeight="$bold">
            Available balance
          </Text>
          <Text fontSize="$3xl" fontWeight="$bold">
            $0.00
          </Text>
          <Button size="sm" variant="link" alignSelf="flex-start">
            <ButtonText fontSize="$sm" color="$blue600">
              Complete the onboarding verification to withdraw money.
            </ButtonText>
          </Button>
        </VStack>

        <VStack space="sm">
          <HStack justifyContent="space-between" alignItems="center">
            <Text fontSize="$sm">Verification progress</Text>
            <Text fontSize="$sm" fontWeight="$bold">
              25%
            </Text>
          </HStack>
          <Progress value={25} h="$1">
            <ProgressFilledTrack h="$1" />
          </Progress>
        </VStack>

        <Divider my="$2" />


// Inside your HomeScreen component
<HStack justifyContent="space-between" mt="$4" mb="$2" px="$4">
      {actions.map((action) => (
        <Pressable
          key={action.id}
          onPress={() => setActiveItem(activeItem === action.id ? null : action.id)}
          style={{
            width: '23%', // Slightly less than 25% to account for spacing
          }}
        >
          <Box
            bg={activeItem === action.id ? '$warningLight' : '$backgroundTertiary'}
            p="$3"
            borderRadius="$md"
            alignItems="center"
            borderWidth={1}
            borderColor={activeItem === action.id ? '$brandSecondary' : 'transparent'}
          >
            <Box
              bg="$white"
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
                  tintColor: activeItem === action.id ? '$brandSecondary' : '$textPrimary'
                }}
              />
            </Box>
            <Text 
              fontSize="$sm"
              fontWeight={activeItem === action.id ? '$bold' : '$normal'}
              color={activeItem === action.id ? '$brandSecondary' : '$textPrimary'}
            >
              {action.label}
            </Text>
          </Box>
        </Pressable>
      ))}
    </HStack>
      </VStack>
    </ScrollView>
  );
}