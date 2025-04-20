import React from 'react';
import { ScrollView } from 'react-native';
import { 
  GluestackUIProvider,
  Box,
  Text,
  VStack,
  HStack,
  Button,
  ButtonText,
  CheckIcon,
  Image,
  
} from '@gluestack-ui/themed';
import { customConfig } from '../theme';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {

    const navigation:any=useNavigation();

  return (
    <GluestackUIProvider config={customConfig}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Box bg="$white" flex={1} p="$6">
          {/* Header */}
          
          
          {/* <Box h="$px" bg="$borderLight200" my="$4" /> */}
          
          {/* Main Title */}
          <Text fontSize="$xl" marginTop="$6" fontWeight="$bold" mb="$4">
            Onboarding
          </Text>
          
          {/* Description */}
          <Text fontSize="$md" mb="$6">
            Onboarding is an essential step to activate your account for accepting payments and receiving payouts.
          </Text>
          
          <Image
  source={require('../assets/images/frame.png')}
  alt="Descriptive text"
//   width='100%'
  resizeMode="cover" 
  marginBottom="$3"
  style={{ width: '100%', flex: 1,borderRadius:16}} // string is fine inside style
  height={150}
//   borderRadius="$md"
/>


          {/* Section Title */}
          <Text fontSize="$xl" fontWeight="$bold" mb="$4">
            What details are required?
          </Text>
          
          <Text fontSize="$md" mb="$4">
            To complete the onboarding process, you need to follow the steps below:
          </Text>
          
          {/* Steps List */}
          <VStack space="md" mb="$5">
            {[
              'Select a business type',
              'Share your business details',
              'Provide the trading address',
              'Fill in the owner details',
              'Add your bank details',
              'Upload documents to verify all of the above',
              'Review all your details and submit'
            ].map((step, index) => (
              <HStack key={index} space="sm" alignItems="center">
                <Box bg="$black" p="$1" borderRadius="$full">
                  {/* <CheckIcon size="sm" color="$white" /> */}
                </Box>
                <Text fontSize="$sm">{step}</Text>
              </HStack>
            ))}
          </VStack>
          
          {/* Buttons */}
          <HStack space="md" justifyContent="space-between" mt="$3">
            <Button
              variant="outline"
              borderColor="$borderLight400"
              flex={1}
              borderRadius="$full"
              onPress={() => console.log('Later pressed')}
            >
              <ButtonText color="$textDark700">I'll do this later</ButtonText>
            </Button>
            
            <Button
              bg="$black"
              flex={1}
              borderRadius="$full"
              onPress={() => navigation.navigate("Details")}
            >
              <ButtonText color="$white">Continue</ButtonText>
            </Button>
          </HStack>
        </Box>
      </ScrollView>
    </GluestackUIProvider>
  );
};

export default OnboardingScreen;