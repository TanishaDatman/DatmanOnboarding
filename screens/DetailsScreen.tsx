import React from 'react';
import { Image } from 'react-native';
import { Box, Text, VStack, HStack, Pressable, Button, ScrollView } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import {useOwnerApi} from '../hooks/useOwnerApi'

const onboardingData = [
  {
    icon: require('../assets/images/account_box.png'),
    title: 'Owner details',
    description: 'Includes name, address, contact, and identity proof.',
    route: 'OwnerDetails',
  },
  {
    icon: require('../assets/images/cases.png'),
    title: 'Business details',
    description: 'Includes business type, contact, address, proof of business, etc.',
    route: 'BusinessDetails',
  },
  {
    icon: require('../assets/images/store.png'),
    title: 'Trading information',
    description: 'Includes trading name, address, and related details.',
    route: 'TradingInfo',
  },
  {
    icon: require('../assets/images/account_balance.png'),
    title: 'Bank details',
    description: 'Includes account number, bank name, and related information.',
    route: 'BankDetails',
  },
];

export default function DetailsScreen() {
  const navigation :any= useNavigation();

  return (
    <Box flex={1} bg="$white" pt="$8" px="$4">
      <ScrollView>
       

        {/* arrow and stuff */}
        <HStack alignItems="center" mt="$3" mb="$6">
  <Pressable onPress={() => navigation.goBack()}>
    <Image
      source={require('../assets/images/arrow_forward.png')} // Make sure this image exists
      style={{ width: 20, height: 20, marginRight: 8 }}
      
    />
  </Pressable>
  <Text fontSize="$lg" fontWeight="$medium">Onboarding</Text>
</HStack>
        {/* arrow and stuff */}



        {/* Title */}
        <Text fontSize="$xl" fontWeight="$bold" mb="$2">
          Complete Onboarding
        </Text>
        <Text fontSize="$sm" color="$textLight500" mb="$6">
          Onboarding is an essential step to activate my Datman account for accepting payments and receiving payouts.
        </Text>

        {/* Card List */}
        <VStack space="md">
          {onboardingData.map((item, idx) => (
            <Pressable key={idx} onPress={() => navigation.navigate(item.route)}>
              <Box
                borderWidth={1}
                borderColor="$borderLight300"
                borderRadius="$xl"
                p="$4"
                bg="$white"
                shadowColor="rgba(0, 0, 0, 0.05)"
                shadowOpacity={0.1}
              >
                <HStack space="md" alignItems="flex-start">
                  <Image source={item.icon} style={{ height: 22, marginTop: 4 }} />
                  <VStack flex={1}>
                    <Text fontSize="$md" fontWeight="$semibold" mb="$1">
                      {item.title}
                    </Text>
                    <Text fontSize="$sm" color="$textLight500">
                      {item.description}
                    </Text>
                    <Box
                      alignSelf="flex-start"
                      bg="$amber100"
                      px="$3"
                      py="$1"
                      borderRadius="$full"
                      mt="$2"
                    >
                      <Text fontSize="$xs" color="$amber600">Pending</Text>
                    </Box>
                  </VStack>
                </HStack>
              </Box>
            </Pressable>
          ))}
        </VStack>
      </ScrollView>

      {/* Bottom Buttons */}
      <HStack mt="$6" mb="$4" space="md" justifyContent="space-between">
        <Button
          variant="outline"
          borderColor="$borderLight400"
          flex={1}
          borderRadius="$full"
          onPress={() => navigation.goBack()}
        >
          <Text fontSize="$md" fontWeight="$medium">Later</Text>
        </Button>
        <Button
         variant="outline"
         borderColor="$black"
         bgColor='$black'
         flex={1}
         borderRadius="$full"
        onPress={() => console.log('Next')}
        >
          <Text fontSize="$md" color="$white" fontWeight="$medium">Next</Text>
        </Button>
      </HStack>
    </Box>
  );
}
