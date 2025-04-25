import React, { useEffect, useState } from 'react';
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
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  CheckIcon,
  Divider,
  Modal,
  ModalBody,
  Image,
  SelectInput,
  SelectTrigger,
  Select,
  SelectPortal,
  SelectContent,
} from '@gluestack-ui/themed';
import { ModalBackdrop } from '@gluestack-ui/themed';
import { ModalContent } from '@gluestack-ui/themed';
import { Center } from '@gluestack-ui/themed';
import { ModalFooter } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from '@gluestack-ui/themed';
import { useDispatch, useSelector } from 'react-redux';
import { setTradingName as setTradingNameAction,setSameAsRegistered, setTradingAddress } from '../store/features/trading/tradingSlice';
import { SelectIcon } from '@gluestack-ui/themed';
import { SelectBackdrop } from '@gluestack-ui/themed';
import { ChevronDownIcon } from '@gluestack-ui/themed';
import { SelectItem } from '@gluestack-ui/themed';
import { useTradingApi } from '../hooks/useTradingApi';

const TradingInfoScreen = () => {
  const [isSameAsRegistered, setIsSameAsRegistered] = useState(true);
  const [tradingName, setTradingName] = useState('');
  const [postCode, setPostCode] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [townCity, setTownCity] = useState('');
  const [county, setCounty] = useState('');
  const [country, setCountry] = useState('');
  const [modal,setModal]=useState(false);
  const navigation:any=useNavigation()

  

  const isNextEnabled = (isSameAsRegistered && tradingName) || (
    tradingName &&
    postCode &&
    addressLine1 &&
    townCity &&
    county &&
    country
  );
  const dispatch = useDispatch();

  const countries = ['UK', 'USA', 'Mexico', 'Canada', 'Australia', 'Ireland'];

  // const handleNext = () => {
  //   dispatch(setTradingNameAction(tradingName));
  //   dispatch(setSameAsRegistered(isSameAsRegistered));
  
  //   if (!isSameAsRegistered) {
  //     dispatch(setTradingAddress({
  //       postCode,
  //       addressLine1,
  //       addressLine2,
  //       townCity,
  //       county,
  //       country,
  //     }));
  //   }
  
  //   setModal(true);
  // };

  const handleNext = async () => {
    const tradingDetails = {
      tradingName,
      postCode,
      addressLine1,
      addressLine2,
      townCity,
      county,
      country,
      isSameAsRegistered,
    };
  
    try {
      await postTradingDetails(tradingDetails); 
      console.log("now trading details.....",tradingDetails)// Call the API to post the data
      setModal(true); // Show success modal after the details are posted
    } catch (error) {
      // Handle error, display a message if necessary
      console.error('Error posting trading details:', error);
    }
  };
  
  

  const tradingState = useSelector((state: any) => state.trading);

useEffect(() => {
  console.log('%c[Trading State Updated]', 'color: green; font-weight: bold;');
  console.log('Trading Name:', tradingState.tradingName);
  console.log('Is Same As Registered:', tradingState.isSameAsRegistered);
  console.log('Trading Address:', tradingState.address);
}, [tradingState]);

const {postTradingDetails}=useTradingApi()
  

  return (
    <Box flex={1} bg="$backgroundLight0">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} pt="$7" p="$5">
       <HStack alignItems="center" mt="$3" mb="$6">
                       <Pressable onPress={() => navigation.goBack()}>
                         <Image
                           source={require('../assets/images/arrow_forward.png')} // Make sure this image exists
                           style={{ width: 20, height: 20, marginRight: 8 }}
                           alt="back button"
                         />
                       </Pressable>
                       <Text fontSize="$lg" fontWeight="$medium">Trading Information</Text>
                     </HStack>
                     <Text fontSize="$xl" fontWeight="$bold" mb="$2">
          Trading Information
        </Text>
        {/* Description */}
        <Text color="$textLight500" fontSize="$sm" mb="$6">
          Provide us with the trading details of your business or select same as registered address if that applies.
        </Text>

        {/* Trading Name Section */}
        <VStack space="md" mb="$6">
          <Text fontSize="$lg" fontWeight="$semibold">Trading name</Text>
          <Input
          variant='underlined'>
            <InputField
              placeholder="Enter trading name"
              value={tradingName}
              onChangeText={setTradingName}
            />
          </Input>
        </VStack>

        {/* Address Toggle Section */}
        <VStack space="md" mb="$6">
          <Text fontSize="$sm">
            Is trading address the same as registered address?
          </Text>
          
          <Checkbox
            value="sameAddress"
            isChecked={isSameAsRegistered}
            onChange={(isSelected) => setIsSameAsRegistered(isSelected)}
            aria-label="Same as registered address"
          >
            <CheckboxIndicator mr="$2">
              {isSameAsRegistered && <CheckboxIcon as={CheckIcon} />}
            </CheckboxIndicator>
            <CheckboxLabel>Same as registered address</CheckboxLabel>
          </Checkbox>
        </VStack>

        {/* Address Form (only shown if toggle is off) */}
        {!isSameAsRegistered && (
          <VStack space="md" mb="$6">
            <Divider my="$2" />
            
            <Text fontSize="$lg" fontWeight="$semibold">Trading address</Text>
            
            <VStack space="sm">
              <Text fontSize="$sm">Post code</Text>
              <Input   variant='underlined'>
                <InputField
                  placeholder="Enter post code"
                  value={postCode}
                  onChangeText={setPostCode}
                />
              </Input>
            </VStack>

            <VStack space="sm">
              <Text fontSize="$sm">Address line 1</Text>
              <Input   variant='underlined'>
                <InputField
                  placeholder="Enter address line 1"
                  value={addressLine1}
                  onChangeText={setAddressLine1}
                />
              </Input>
            </VStack>

            <VStack space="sm">
              <Text fontSize="$sm">Address line 2 (optional)</Text>
              <Input   variant='underlined'>
                <InputField
                  placeholder="Enter address line 2"
                  value={addressLine2}
                  onChangeText={setAddressLine2}
                />
              </Input>
            </VStack>

            <VStack space="sm">
              <Text fontSize="$sm">Town/City</Text>
              <Input   variant='underlined'>
                <InputField
                  placeholder="Enter town/city"
                  value={townCity}
                  onChangeText={setTownCity}
                />
              </Input>
            </VStack>

            <VStack space="sm">
              <Text fontSize="$sm">County</Text>
              <Input   variant='underlined'>
                <InputField
                  placeholder="Enter county"
                  value={county}
                  onChangeText={setCounty}
                />
              </Input>
            </VStack>

            <VStack space="sm">
              <Text fontSize="$sm">Country</Text>
              <Box pb="$2">
          <Select
            selectedValue={country}
            onValueChange={(value) => setCountry(value)}
          >
            <SelectTrigger borderBottomWidth={1}
      borderColor="$borderLight300"
      borderWidth={0} // removes other borders
      borderRadius={0} // no rounding
      px={0}>
              <SelectInput placeholder="Country" />
              <SelectIcon as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                {countries.map((name) => (
                  <SelectItem key={name} label={name} value={name} />
                ))}
              </SelectContent>
            </SelectPortal>
          </Select>
        </Box>
            </VStack>
          </VStack>
        )}
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
          onPress={async()=>await handleNext()}
        >
          <ButtonText color="$white">Next</ButtonText>
        </Button>
      </HStack>


      <Modal isOpen={modal} onClose={() => setModal(false)}>
              <ModalBackdrop />
              <ModalContent borderTopLeftRadius="$2xl"
        borderTopRightRadius="$2xl"
        borderBottomLeftRadius="$none"
        borderBottomRightRadius="$none"
        alignItems="center">
                <ModalBody mt="$6">
                  <Center mb="$4">
                    {/* Optional icon (checkmark pen) */}
                    <Image source={require('../assets/images/tick.png')} alt="Tick" h={90} w={110} />
                  </Center>
                  <Text fontSize="$lg" fontWeight="$semibold" textAlign="center">
                    Owner verification in progress
                  </Text>
                  <Text fontSize="$sm" textAlign="center" mt="$2" color="$gray500">
                    The owner details will be verified soon. You can continue filling in the remaining details.
                  </Text>
                </ModalBody>
                <ModalFooter w="100%" px="$4" pb="$6">
                <Button 
        flex={1} 
        bg="$black" 
        borderRadius="$full"
        onPress={() => {
          navigation.navigate("Details");
          setModal(false); // Make sure to use setModal if that's your state setter
        }}
      >
        <ButtonText color="$white">Continue</ButtonText>
      </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
    </Box>
  );
};

export default TradingInfoScreen;


