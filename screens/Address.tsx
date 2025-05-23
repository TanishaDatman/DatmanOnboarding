import React, { useState, useEffect } from 'react';
import { TextInput } from 'react-native';
import {
  Box,
  Text,
  VStack,
  HStack,
  Button,
  ButtonText,
  ScrollView,
  Pressable,
  Select,
  SelectTrigger,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectItem,
  SelectInput,
  SelectContent,
  Image,
  Input,
} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon } from '@gluestack-ui/themed';
import { useDispatch, useSelector } from 'react-redux';
import { setAddressDetails } from '../store/actions/ownerActions'; 
import { InputField } from '@gluestack-ui/themed';

export default function Address() {
  const navigation: any = useNavigation();
  const dispatch = useDispatch();

  const fields = [
    'Post code',
    'House no.',
    'Street',
    'Town/City',
    'County',
  ];

  const countries = ['UK', 'USA', 'Mexico', 'Canada', 'Australia', 'Ireland'];
  
  
  const address = useSelector((state: any) => state.owner.address);

  const [country, setCountry] = useState(address?.country || '');  
  const [postCode, setPostCode] = useState(address?.postCode || '');
  const [houseNo, setHouseNo] = useState(address?.houseNo || '');
  const [street, setStreet] = useState(address?.street || '');
  const [town, setTown] = useState(address?.town || '');
  const [county, setCounty] = useState(address?.county || '');

  useEffect(() => {
   
    if (address) {
      setCountry(address.country);
      setPostCode(address.postCode);
      setHouseNo(address.houseNo);
      setStreet(address.street);
      setTown(address.town);
      setCounty(address.county);
    }
  }, [address]);

  const isNextEnabled = country.trim() && postCode.trim() && houseNo.trim() && street.trim() && town.trim() && county.trim();


  const handleNext = () => {
    if(!isNextEnabled) return;
    const addressDetails = {
      country,
      postCode,
      houseNo,
      street,
      town,
      county,
    };

    dispatch(setAddressDetails(addressDetails));
    // console.log('Submitted Address Details:', addressDetails);

    navigation.navigate('Documents');
  };

  return (
    <Box flex={1} bg="#F5F6F8" px="$4" pt="$6" borderTopLeftRadius={30} borderTopRightRadius={30}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <HStack alignItems="center" mt="$3" mb="$6">
                <Pressable onPress={() => navigation.goBack()}>
                  <Image
                    source={require('../assets/images/arrow_forward.png')}
                    style={{ width: 20, height: 20, marginRight: 8 }}
                    alt="back button"
                  />
                </Pressable>
                <Text fontSize="$lg" fontWeight="$medium">Owner Address</Text>
              </HStack>
        {/* Title & Description */}
        <Text fontSize="$2xl" fontWeight="$bold" mb="$2">Owner address</Text>
        <Text fontSize="$sm" color="$textLight500" mb="$6">
          Onboarding is an essential step to activate my Datman account for accepting payments and receiving payouts.
        </Text>

        {/* Input Fields */}
        <VStack space="md" mb="$6">
          {fields.map((label, index) => (
            <Box key={index}  borderColor="$borderLight300" pb="$2">
            <Input
            variant='underlined'
              style={{
                // fontSize: 16,
                paddingVertical: 8,
                // color: '#000',
              }}
            >
              <InputField
            
                placeholder={label}
                placeholderTextColor="#888"
                value={
                  label === 'Post code' ? postCode :
                  label === 'House no.' ? houseNo :
                  label === 'Street' ? street :
                  label === 'Town/City' ? town :
                  label === 'County' ? county : ''
                }
                onChangeText={(text) => {
                  if (label === 'Post code') setPostCode(text);
                  if (label === 'House no.') setHouseNo(text);
                  if (label === 'Street') setStreet(text);
                  if (label === 'Town/City') setTown(text);
                  if (label === 'County') setCounty(text);
                }}
              />
            </Input>
          </Box>
          ))}
        </VStack>

        {/* Country Dropdown */}
        <Box pb="$2">
          <Select
            selectedValue={country}
            onValueChange={(value) => setCountry(value)}
          >
            <SelectTrigger borderBottomWidth={1}
      borderColor="$borderLight300"
      borderWidth={0} // removes other borders
      borderRadius={0} 
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
      </ScrollView>

      <HStack space="md" justifyContent="space-between" mt="auto" mb="$4">
        <Button
          variant="outline"
          flex={1}
          borderRadius="$full"
          borderColor="$black"
          mr="$2"
          onPress={() => navigation.goBack()}
        >
          <ButtonText color="$black">Later</ButtonText>
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
  );
}




