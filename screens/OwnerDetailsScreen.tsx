import React, { useState } from 'react';
import { Box, Text, VStack, Input, Button, HStack, Select, SelectTrigger, SelectInput, SelectIcon, ChevronDownIcon, SelectPortal, SelectBackdrop, SelectContent, SelectItem, ScrollView } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';

export default function OwnerDetailsScreen() {
  const navigation:any = useNavigation();

  const [title, setTitle] = useState('Mr.');
  const [nationality, setNationality] = useState('British');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');


  return (
    <Box flex={1} bg="$backgroundLight200" px="$4" pt="$6">
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Header */}
        <HStack alignItems="center" mb="$6">
          <Text fontSize="$lg" mr="$2">←</Text>
          <Text fontSize="$lg" fontWeight="$medium">Owner details</Text>
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
            <Input
              variant="underlined"
            //   value={firstName}
            //   onChangeText={setFirstName}
            //   placeholder="Enter first name"
            />
          </Box>

          {/* Last Name */}
          <Box>
            <Text fontSize="$sm" mb="$1">Last name</Text>
            <Input
              variant="underlined"
            //   value={lastName}
            //   onChangeText={setLastName}
            //   placeholder="Enter last name"
            />
          </Box>

          {/* Date of Birth */}
          <Box>
            <Text fontSize="$sm" mb="$1">Date of Birth</Text>
            <Input
              variant="underlined"
            //   value={dob}
            //   onChangeText={setDob}
            //   placeholder="DD/MM/YYYY"
            />
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
            bg="$black"
            borderRadius="$full"
            onPress={() => navigation.navigate("Contact")}
          >
            <Text fontWeight="$medium" color="$white">Next</Text>
          </Button>
        </HStack>
      </ScrollView>
    </Box>
  );
}
