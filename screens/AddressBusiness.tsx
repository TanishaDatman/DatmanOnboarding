import React, { useState } from 'react';
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
  SelectIcon,
  ChevronDownIcon,
  Image,
} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { SelectTrigger } from '@gluestack-ui/themed';
import { SelectInput } from '@gluestack-ui/themed';
import { SelectPortal } from '@gluestack-ui/themed';
import { SelectBackdrop } from '@gluestack-ui/themed';
import { SelectContent } from '@gluestack-ui/themed';
import { SelectItem } from '@gluestack-ui/themed';

export default function AddressBusiness() {
  const navigation: any = useNavigation();

  const [country, setCountry] = useState('');
  const [postCode, setPostCode] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [town, setTown] = useState('');
  const [county, setCounty] = useState('');

  const countries = ['UK', 'USA', 'Mexico', 'Canada', 'Australia', 'Ireland'];

  const fields = [
    { 
      label: 'Post code',
      value: postCode,
      onChange: setPostCode 
    },
    { 
      label: 'Address Line 1',
      value: address1,
      onChange: setAddress1 
    },
    { 
      label: 'Address Line 2',
      value: address2,
      onChange: setAddress2 
    },
    { 
      label: 'Town/City',
      value: town,
      onChange: setTown 
    },
    { 
      label: 'County',
      value: county,
      onChange: setCounty 
    },
  ];

  const isNextEnabled = postCode.trim() && 
                       address1.trim() && 
                       town.trim() && 
                       county.trim() && 
                       country.trim();

  const handleNext = () => {
    if (!isNextEnabled) return;
    
    const formData = {
      postCode,
      address1,
      address2,
      town,
      county,
      country
    };
    // You would typically dispatch this data to your store here
    // dispatch(setBusinessAddress(formData));
    navigation.navigate('DocumentsBusiness');
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
          <Text fontSize="$lg" fontWeight="$medium">Business Address</Text>
        </HStack>

        {/* Title & Description */}
        <Text fontSize="$2xl" fontWeight="$bold" mb="$2">Business address</Text>
        <Text fontSize="$sm" color="$textLight500" mb="$6">
          Onboarding is an essential step to activate my Datman account for accepting payments and receiving payouts.
        </Text>

        {/* Input Fields */}
        <VStack space="md" mb="$6">
          {fields.map((field, index) => (
            <Box key={index} borderBottomWidth={1} borderColor="$borderLight300" pb="$2">
              <TextInput
                placeholder={field.label}
                value={field.value}
                onChangeText={field.onChange}
                style={{
                  fontSize: 16,
                  paddingVertical: 8,
                  color: '#000',
                }}
                placeholderTextColor="#888"
              />
            </Box>
          ))}
          <Box pb="$2">
            <Select
              selectedValue={country}
              onValueChange={(value) => setCountry(value)}
            >
              <SelectTrigger borderBottomWidth={1}
                borderColor="$borderLight300"
                borderWidth={0}
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
        </VStack>
      </ScrollView>

      {/* Footer Buttons */}
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
  bg={isNextEnabled ? "$black" : "$coolGray300"}
  flex={1}
          borderRadius="$full"
          onPress={handleNext}
          isDisabled={!isNextEnabled}
          opacity={isNextEnabled ? 1 : 0.7}
        >
          <ButtonText color={isNextEnabled ? "$white" : "$coolGray500"}>Next</ButtonText>
        </Button>
      </HStack>
    </Box>
  );
}