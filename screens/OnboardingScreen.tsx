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
import { Pressable } from '@gluestack-ui/themed';

const OnboardingScreen = () => {

    const navigation:any=useNavigation();

  return (
    <GluestackUIProvider config={customConfig}>
      <ScrollView contentContainerStyle={{ flexGrow: 1,  }} >
        <Box bg="$white" flex={1} pt="$8" p="$6">
 <HStack alignItems="center" mt="$3">
               <Pressable onPress={() => navigation.goBack()}>
                 <Image
                   source={require('../assets/images/arrow_forward.png')} // Make sure this image exists
                   style={{ width: 20, height: 20, marginRight: 8 }}
                   alt="back button"
                 />
               </Pressable>
               <Text fontSize="$lg" fontWeight="$medium">Onboarding</Text>
             </HStack>
          
          {/* Description */}
          <Text $xs-fontSize="$xs"  $sm-fontSize="$sm" $md-fontSize="$md"  $lg-fontSize="$lg" mt="$4" mb="$6">
            Onboarding is an essential step to activate your account for accepting payments and receiving payouts.
          </Text>
          
       <Box  flex={1} justifyContent='center' alignItems='center' >
       <Image

  source={require('../assets/images/frame.png')}
  alt="Descriptive text"
  marginBottom="$3"
  size='2xl'
flex={1}
borderRadius={16}

/>
        </Box>  


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
              onPress={() => navigation.goBack()}
            >
              <ButtonText fontSize="$sm" color="$textDark700">I'll do this later</ButtonText>
            </Button>
            
            <Button
              bg="$black"
              flex={1}
              borderRadius="$full"
              onPress={() => navigation.navigate("Details")}
            >
              <ButtonText fontSize="$sm" color="$white">Continue</ButtonText>
            </Button>
          </HStack>
        </Box>
      </ScrollView>
    </GluestackUIProvider>
  );
};

export default OnboardingScreen;