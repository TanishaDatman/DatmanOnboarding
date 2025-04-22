// / by reduximport React, { useState } from 'react';
import {
  Box, Text, VStack, Input, InputField, Button, HStack, Select,
  SelectTrigger, SelectInput, SelectIcon, ChevronDownIcon,
  SelectPortal, SelectBackdrop, SelectContent, SelectItem, ScrollView,
  Image
} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {setOwnerDetails}  from '../store/actions/ownerActions'; // adjust path as per your project
import { useDispatch } from 'react-redux';
import { Pressable } from '@gluestack-ui/themed';


export default function OwnerDetailsScreen() {
  const navigation: any = useNavigation();

  const [title, setTitle] = useState('Mr.');
  const [nationality, setNationality] = useState('British');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const dispatch = useDispatch();

  const isNextEnabled = title.trim() && nationality.trim() && firstName.trim() && lastName.trim() && dob.trim();



  const handleNext = () => {
    if (!isNextEnabled) return;
    const formData = {
      title,
      firstName,
      lastName,
      dob,
      nationality
    };
    dispatch(setOwnerDetails(formData)); 
    console.log("Submitted Owner Details:", formData);
    
      navigation.navigate("Contact");
    
    
  };


  return (
    <Box flex={1} bg="$white" px="$4" pt="$6">
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Header */}
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
        <Text fontSize="$xl" fontWeight="$bold" mb="$2">
          Owner name as in ID
        </Text>
        <Text fontSize="$sm" color="$textLight500" mb="$6">
          Onboarding is an essential step to activate my Datman account for accepting payments and receiving payouts.
        </Text>

        {/* Form Fields */}
        <VStack space="lg">
          {/* Title Dropdown */}
          <Box>
            <Text fontSize="$sm" mb="$1">Title</Text>
            <Select selectedValue={title} onValueChange={setTitle}>
              <SelectTrigger variant="underlined">
                <SelectInput placeholder="Select title" />
                <SelectIcon>
                  <ChevronDownIcon />
                </SelectIcon>
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectItem label="Mr." value="Mr." />
                  <SelectItem label="Mrs." value="Mrs." />
                  <SelectItem label="Ms." value="Ms." />
                  <SelectItem label="Dr." value="Dr." />
                </SelectContent>
              </SelectPortal>
            </Select>
          </Box>

          {/* First Name */}
          <Box>
            <Text fontSize="$sm" mb="$1">First name</Text>
            <Input variant="underlined">
              <InputField
                value={firstName}
                onChangeText={setFirstName}
                placeholder="Enter first name"
              />
            </Input>
          </Box>

          {/* Last Name */}
          <Box>
            <Text fontSize="$sm" mb="$1">Last name</Text>
            <Input variant="underlined">
              <InputField
                value={lastName}
                onChangeText={setLastName}
                placeholder="Enter last name"
              />
            </Input>
          </Box>

          {/* Date of Birth */}
          <Box>
            <Text fontSize="$sm" mb="$1">Date of Birth</Text>
            <Input variant="underlined">
              <InputField
                value={dob}
                onChangeText={setDob}
                placeholder="DD/MM/YYYY"
              />
            </Input>
          </Box>

          {/* Nationality Dropdown */}
          <Box>
            <Text fontSize="$sm" mb="$1">Nationality</Text>
            <Select selectedValue={nationality} onValueChange={setNationality}>
              <SelectTrigger variant="underlined">
                <SelectInput placeholder="Select nationality" />
                <SelectIcon>
                  <ChevronDownIcon />
                </SelectIcon>
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectItem label="British" value="British" />
                  <SelectItem label="Indian" value="Indian" />
                  <SelectItem label="American" value="American" />
                  <SelectItem label="Other" value="Other" />
                </SelectContent>
              </SelectPortal>
            </Select>
          </Box>
        </VStack>

        {/* Action Buttons */}
        <HStack space="md" mt="$8" justifyContent="space-between">
          <Button
            variant="outline"
            flex={1}
            borderRadius="$full"
            borderColor="$black"
            onPress={() => navigation.goBack()}
          >
            <Text fontWeight="$medium" color="$black">Later</Text>
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
      </ScrollView>
    </Box>
  );
}
