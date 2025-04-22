import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { 
  GluestackUIProvider,
  Box,
  Text,
  VStack,
  HStack,
  Button,
  ButtonText,
  Input,
  InputField,
  Image,
  
} from '@gluestack-ui/themed';
import { customConfig } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from '@gluestack-ui/themed';

const ContactBusiness = () => {
const navigation:any=useNavigation()

const [email,setEmail]=useState("")
const [phn,setPhn]=useState("")
const [url,setUrl]=useState("")

const isNextEnabled = email.trim() && phn.trim() && url.trim();

const handleNext = () => {
    if (!isNextEnabled) return;
      navigation.navigate("AddressBusiness");
  };

  return (
    <GluestackUIProvider config={customConfig}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Box bg="$white" flex={1} pt="$7" p="$4">
         
          <HStack alignItems="center" mt="$3" mb="$6">
                  <Pressable onPress={() => navigation.goBack()}>
                    <Image
                      source={require('../assets/images/arrow_forward.png')} // Make sure this image exists
                      style={{ width: 20, height: 20, marginRight: 8 }}
                      alt="back button"
                    />
                  </Pressable>
                  <Text fontSize="$lg" fontWeight="$medium">Business Contact Details</Text>
                </HStack>
          
          {/* Title */}
          <Text fontSize="$xl" fontWeight="$bold" mb="$3">
            Business Contact details
          </Text>
          
          {/* Description */}
          <Text fontSize="$md" mb="$6">
            Onboarding is an essential step to activate my
            Datman account for accepting payments and
            receiving payouts.
          </Text>
          
          {/* Email Input */}
          <VStack space="sm" mb="$6">
            <Text fontSize="$sm" fontWeight="$medium">Email ID</Text>
            <Input
              variant="underlined"
              size="md"
              // isDisabled={true}
            //   borderColor="$borderLight300"
          
            >
              <InputField
                value={email}
                onChangeText={setEmail}
                placeholder="Email ID"
              />
            </Input>
          </VStack>
          
          {/* Phone Number Input */}
          <VStack space="sm" mb="$8">
            <Text fontSize="$sm" fontWeight="$medium">Phone number</Text>
            <Input
              variant="underlined"
              size="md"
              // isDisabled={true}
              // borderColor="$borderLight300"
            >
              <InputField
                value={phn}
                placeholder="Phone number"
                onChangeText={setPhn}
              />
            </Input>
          </VStack>
          <VStack space="sm" mb="$8">
            {/* <Text fontSize="$sm" fontWeight="$medium">Company URL</Text> */}
            <Input
              variant="underlined"
              size="md"
              // isDisabled={true}
              borderColor="$borderLight300"
            >
              <InputField
                value={url}
                placeholder="Company URL"
                onChangeText={setUrl}
              />
            </Input>
          </VStack>
          
          {/* Buttons */}
          <HStack space="md" justifyContent="space-between" mt="$8">
            <Button
              variant="outline"
              borderColor="$borderLight400"
              flex={1}
              borderRadius="$full"
              onPress={() => navigation.goBack()}
            >
              <ButtonText color="$textDark700">Later</ButtonText>
            </Button>
            
            <Button
  flex={1}
  bg={isNextEnabled ? "$black" : "$coolGray300"}
  borderRadius="$full"
  onPress={handleNext}
  disabled={!isNextEnabled} 
  opacity={isNextEnabled ? 1 : 0.7} 
>
  <Text fontWeight="$medium" color={isNextEnabled ? "$white" : "$coolGray500"}>
    Next
  </Text>
</Button>
          </HStack>
        </Box>
      </ScrollView>
    </GluestackUIProvider>
  );
};

export default ContactBusiness;