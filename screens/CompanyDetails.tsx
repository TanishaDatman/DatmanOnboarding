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

const CompanyDetails = () => {
  const [companyNumber, setCompanyNumber] = useState('');
  const [legalName, setLegalName] = useState('');
  const navigation:any=useNavigation()

  const isNextEnabled = companyNumber.trim() && legalName.trim();

  return (
    <Box flex={1} bg="$backgroundLight0">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} p="$4">
        {/* Header */}
        <Text fontSize="$xl" fontWeight="$bold" mb="$2">
          Business details
        </Text>

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