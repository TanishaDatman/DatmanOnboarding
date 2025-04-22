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

const BankDetailsScreen = () => {
  const [accountholder, setAccountholder] = useState('');
  const [sortcode, setSortcode] = useState('');
  const [accno, setAccno] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigation:any=useNavigation()


  const isNextEnabled = accountholder.trim() !== '' && sortcode.trim() !== ''  && accno.trim() !== ''  && confirm.trim() !== '';

  return (
    <Box flex={1} bg="$backgroundLight0">
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }} 
        p="$5"
        pt="$7"
        keyboardShouldPersistTaps="handled"
      >
        {/* Header Section */}
        <VStack space="sm" mb="$6">
         <HStack alignItems="center" mt="$3" mb="$6">
                               <Pressable onPress={() => navigation.goBack()}>
                                 <Image
                                   source={require('../assets/images/arrow_forward.png')} // Make sure this image exists
                                   style={{ width: 20, height: 20, marginRight: 8 }}
                                   alt="back button"
                                 />
                               </Pressable>
                               <Text fontSize="$lg" fontWeight="$medium">Bank Details</Text>
                             </HStack>
          <Text fontSize="$xl" fontWeight="$semibold" color="$textDark800">
            Set up your payout(bank) account
          </Text>
          
          <Text fontSize="$sm" color="$textLight500">
We neeed your bank details to ensure payouts are sent securely and on time.Providing information helps avoid delays in receiving payments for your business transactions.          </Text>
        </VStack>

        {/* Form Section */}
        <VStack space="md" mb="$8">
          {/* <Text fontSize="$md" fontWeight="$semibold" color="$textDark800">
            Company look-up
          </Text>
           */}
          {/* Company Number Field */}
          <VStack space="xs">
            {/* <Text fontSize="$sm" color="$textDark800">
              Account Holder name
            </Text> */}
            <Input variant='underlined'>
              <InputField
                placeholder="Enter company number"
                value={accountholder}
                onChangeText={setAccountholder}
                // keyboardType="numeric"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </Input>
          </VStack>
          
          {/* Legal Name Field */}
          <VStack space="xs">
            {/* <Text fontSize="$sm" color="$textDark800">
             Bank sort code
            </Text> */}
            <Input variant='underlined'>
              <InputField
                placeholder="Bank sort code"
                value={sortcode}
                onChangeText={setSortcode}
                autoCapitalize="words"
              />
            </Input>
          </VStack>

          <VStack space="xs">
            {/* <Text fontSize="$sm" color="$textDark800">
            Account Number
            </Text> */}
            <Input variant='underlined'>
              <InputField
                placeholder="Account Number"
                value={accno}
                onChangeText={setAccno}
                // autoCapitalize="words"
              />
            </Input>
          </VStack>

          <VStack space="xs">
            {/* <Text fontSize="$sm" color="$textDark800">
             Confirm account number
            </Text> */}
            <Input variant='underlined'>
              <InputField
                placeholder="Bank sort code"
                value={confirm}
                onChangeText={setConfirm}
                // autoCapitalize="words"
              />
            </Input>
          </VStack>
        </VStack>
      </ScrollView>

      {/* Footer Buttons */}
      <HStack 
        p="$4" 
        space="md" 
        bg="$backgroundLight0"
        // borderTopWidth={1}
        // borderTopColor="$borderLight200"
      >
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
          onPress={() => isNextEnabled && navigation.navigate("DocumentsBank")}
        >
          <ButtonText color="$white">Next</ButtonText>
        </Button>
      </HStack>
    </Box>
  );
};

export default BankDetailsScreen;