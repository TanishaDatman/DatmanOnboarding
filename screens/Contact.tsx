

// usingredux

import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setContactDetails } from '../store/actions/ownerActions'; // Adjust the path if needed
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
  Pressable,
} from '@gluestack-ui/themed';
import { customConfig } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { Image } from '@gluestack-ui/themed';

const Contact = () => {
  const navigation: any = useNavigation();
  
  // Local state to manage the inputs
  const [phn, setPhn] = useState('');
  const [email, setEmail] = useState('');

  // Dispatch to update Redux store
  const dispatch = useDispatch();

  // Fetch owner details from Redux (you can use it if you want to show it or prefill fields)
  const owner = useSelector((state: any) => state.owner.owner);
  console.log('Owner details from redux:', owner);

  // Fetch contact details from Redux (to prefill if exists)
  const contact = useSelector((state: any) => state.owner.contact);

  useEffect(() => {
    // Prefill the contact details if they are already in Redux
    if (contact.email) setEmail(contact.email);
    if (contact.phone) setPhn(contact.phone);
  }, [contact]);

  const isNextEnabled = email.trim() && phn.trim();


  // Handle form submission and dispatch to Redux
  const handleNext = () => {
    if(!isNextEnabled) return;
    const contactDetails = {
      email,
      phone: phn,
    };

    // Dispatch the action to store contact details in Redux
    dispatch(setContactDetails(contactDetails));
    console.log('Submitted Contact Details:', contactDetails);

    // Navigate to Address screen
    navigation.navigate('Address');
  };

  return (
    <GluestackUIProvider config={customConfig}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Box bg="$white" flex={1} p="$4">
        
           <HStack alignItems="center" mt="$3" mb="$6">
                   <Pressable onPress={() => navigation.goBack()}>
                     <Image
                       source={require('../assets/images/arrow_forward.png')} // Make sure this image exists
                       style={{ width: 20, height: 20, marginRight: 8 }}
                       alt="back button"
                     />
                   </Pressable>
                   <Text fontSize="$lg" fontWeight="$medium">Owner Details</Text>
                 </HStack>

          {/* Title */}
          <Text fontSize="$xl" fontWeight="$bold" mb="$3">
            Contact details
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
              borderColor="$borderLight300"
            >
              <InputField
                value={phn}
                onChangeText={setPhn}
                placeholder="Phone number"
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

export default Contact;
