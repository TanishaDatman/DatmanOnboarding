import React from 'react';
import {
  Box,
  Text,
  VStack,
  Button,
  ButtonText,
  Center,
  Image,
} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';

const CongoScreen = () => {
  const navigation:any = useNavigation();

  return (
    <Box flex={1} bg="$backgroundLight0" p="$6">
      <Center flex={1}>
        <VStack space="xl" alignItems="center">
          {/* Checkmark Image */}
          <Image
            source={require('../assets/images/tick.png')} // Replace with your checkmark image
            alt="Success checkmark"
            size="lg"
            mb="$4"
            h={90} w={110}
            // w="$full"
          />

          {/* Header */}
          <Text fontSize="$2xl" fontWeight="$bold" textAlign="center">
            It's done 😍 🎉
          </Text>

          {/* Description */}
          <Text
            fontSize="$md"
            color="$textLight500"
            textAlign="center"
            maxWidth="$64"
          >
            Congratulations on completing the onboarding form! We will review your information shortly. Once approved, you can start trading smoothly using your Datman account.
          </Text>

          {/* Action Button */}
          <Button
            mt="$8"
            borderRadius="$full"
            bg="$black"
            onPress={() => navigation.navigate('HomeMain')} // Adjust navigation target as needed
          >
            <ButtonText color="$white">Awesome!💪</ButtonText>
          </Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default CongoScreen;