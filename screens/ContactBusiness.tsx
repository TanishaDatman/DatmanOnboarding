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
  Input,
  InputField,
  
} from '@gluestack-ui/themed';
import { customConfig } from '../theme';
import { useNavigation } from '@react-navigation/native';

const ContactBusiness = () => {
const navigation:any=useNavigation()

  return (
    <GluestackUIProvider config={customConfig}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Box bg="$white" marginTop="$8" flex={1} p="$6">
          {/* Header */}
         
          
          {/* <Box h="$px" bg="$borderLight200" my="$4" /> */}
          
          {/* Subheader */}
          <Text fontSize="$lg" fontWeight="$bold" mb="$5">
          Business Contact details
          </Text>
          
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
              isDisabled={true}
            //   borderColor="$borderLight300"
            >
              <InputField
                value="starkjohn@gmail.com"
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
              isDisabled={true}
              borderColor="$borderLight300"
            >
              <InputField
                value="+44 8829012003"
                placeholder="Phone number"
              />
            </Input>
          </VStack>
          <VStack space="sm" mb="$8">
            {/* <Text fontSize="$sm" fontWeight="$medium">Company URL</Text> */}
            <Input
              variant="underlined"
              size="md"
              isDisabled={true}
              borderColor="$borderLight300"
            >
              <InputField
                value="Company URL"
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
              bg="$primary500"
              flex={1}
            backgroundColor="$black"
            borderRadius="$full"
              onPress={() => navigation.navigate("AddressBusiness")}
            >
              <ButtonText color="$white">Next</ButtonText>
            </Button>
          </HStack>
        </Box>
      </ScrollView>
    </GluestackUIProvider>
  );
};

export default ContactBusiness;