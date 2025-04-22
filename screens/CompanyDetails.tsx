import React, { useState } from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  Button,
  ButtonText,
  Input,
  InputField,
  ScrollView,
} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from '@gluestack-ui/themed';
import { Image } from '@gluestack-ui/themed';

const CompanyDetails = () => {
  const [companyNumber, setCompanyNumber] = useState('');
  const [legalName, setLegalName] = useState('');
  const navigation:any=useNavigation()

  const isNextEnabled = companyNumber.trim() && legalName.trim();

  return (
    <Box flex={1} pt="$4" bg="$backgroundLight0">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} p="$4">
        {/* Header */}
         <HStack alignItems="center" mt="$3" mb="$6">
                 <Pressable onPress={() => navigation.goBack()}>
                   <Image
                     source={require('../assets/images/arrow_forward.png')} // Make sure this image exists
                     style={{ width: 20, height: 20, marginRight: 8 }}
                     alt="back button"
                   />
                 </Pressable>
                 <Text fontSize="$lg" fontWeight="$medium">Business Details</Text>
               </HStack>

        {/* Subheader */}
        <Text fontSize="$lg" fontWeight="$semibold" mb="$1">
          Company registered details
        </Text>
        <Text color="$textLight500" fontSize="$sm" mb="$6">
          Onboarding is an essential step to activate my Datman account for accepting payments and receiving payouts.
        </Text>

        {/* Form Section */}
        <VStack space="md" mb="$6">
          <Text fontWeight="$semibold">Company look-up</Text>
          
          <VStack space="sm">
            <Text fontSize="$sm">Company registered number</Text>
            
            <Input  variant="underlined"
              size="md"
              >
              <InputField
                placeholder="Enter company number"
                value={companyNumber}
                onChangeText={setCompanyNumber}
                keyboardType="numeric"
              />
            </Input>
          
            
          </VStack>

          <VStack space="sm">
            <Text fontSize="$sm">Business legal name</Text>
            <Input variant="underlined"
              size="md"> 
              <InputField
                placeholder="Enter legal business name"
                value={legalName}
                onChangeText={setLegalName}
              />
            </Input>
          </VStack>
        </VStack>
      </ScrollView>

      {/* Footer Buttons */}
      <HStack p="$4" space="md" bg="$backgroundLight0">
        <Button
          variant="outline"
          flex={1}
          borderColor="$black"
          borderRadius="$full"
          onPress={() => navigation.goBack()}
        >
          <ButtonText color="$black">Later</ButtonText>
        </Button>

        <Button
          flex={1}
          borderRadius="$full"
          bg={isNextEnabled ? "$black" : "$coolGray300"}
          disabled={!isNextEnabled}
          onPress={() => isNextEnabled && navigation.navigate("ContactBusiness")}
        >
          <ButtonText color="$white">Next</ButtonText>
        </Button>
      </HStack>
    </Box>
  );
};

export default CompanyDetails;