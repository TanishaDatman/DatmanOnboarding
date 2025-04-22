import {
  Box, Text, VStack, Input, InputField, Button, HStack, Select,
  SelectTrigger, SelectInput, SelectIcon, ChevronDownIcon,
  SelectPortal, SelectBackdrop, SelectContent, SelectItem, ScrollView,
  Image
} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { setOwnerDetails } from '../store/actions/ownerActions';
import { useDispatch } from 'react-redux';
import { Pressable } from '@gluestack-ui/themed';
import { useForm, Controller } from 'react-hook-form';

export default function OwnerDetailsScreen() {
  const navigation: any = useNavigation();
  const dispatch = useDispatch();

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: 'Mr.',
      nationality: 'British',
      firstName: '',
      lastName: '',
      dob: ''
    }
  });

  // const isValidDate = (dateStr: string) => {
  //   const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  //   if (!regex.test(dateStr)) return false;

  //   const [day, month, year] = dateStr.split('/').map(Number);
  //   const date = new Date(year, month - 1, day);
    
  //   return (
  //     date.getDate() === day &&
  //     date.getMonth() === month - 1 &&
  //     date.getFullYear() === year &&
  //     year >= 1900 &&
  //     year <= new Date().getFullYear()
  //   );
  // };
  const isValidDate = (dateStr: string) => {
    // Allow partial input during typing
    if (dateStr.length < 10) return true;
    
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regex.test(dateStr)) return false;
  
    const [day, month, year] = dateStr.split('/').map(Number);
    const date = new Date(year, month - 1, day);
    
    return (
      date.getDate() === day &&
      date.getMonth() === month - 1 &&
      date.getFullYear() === year &&
      year >= 1900 &&
      year <= new Date().getFullYear()
    );
  };

  const formatDateWithSlashes = (input: string): string => {
    // Remove all non-digit characters
    const digits = input.replace(/\D/g, '');
    
    // Add slashes automatically based on input length
    if (digits.length <= 2) {
      return digits;
    }
    if (digits.length <= 4) {
      return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    }
    return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4, 8)}`;
  };

  

  const onSubmit = (data: any) => {
    dispatch(setOwnerDetails(data));
    console.log("Submitted Owner Details:", data);
    navigation.navigate("Contact");
  };

  return (
    <Box flex={1} bg="$white" px="$4" pt="$6">
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <HStack alignItems="center" mt="$3" mb="$6">
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/images/arrow_forward.png')}
              style={{ width: 20, height: 20, marginRight: 8 }}
              alt="back button"
            />
          </Pressable>
          <Text fontSize="$lg" fontWeight="$medium">Owner Details</Text>
        </HStack>

        <Text fontSize="$xl" fontWeight="$bold" mb="$2">
          Owner name as in ID
        </Text>
        <Text fontSize="$sm" color="$textLight500" mb="$6">
          Onboarding is an essential step to activate my Datman account for accepting payments and receiving payouts.
        </Text>

        <VStack space="lg">
          <Box>
            <Text fontSize="$sm" mb="$1">Title</Text>
            <Controller
              control={control}
              name="title"
              rules={{ required: 'Title is required' }}
              render={({ field: { onChange, value } }) => (
                <Select selectedValue={value} onValueChange={onChange}>
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
              )}
            />
            {errors.title && <Text color="$red500" fontSize="$xs">{errors.title.message}</Text>}
          </Box>

          <Box>
            <Text fontSize="$sm" mb="$1">First name</Text>
            <Controller
              control={control}
              name="firstName"
              rules={{
                required: 'First name is required',
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: 'Only alphabetic characters allowed'
                },
                minLength: {
                  value: 2,
                  message: 'Minimum 2 characters required'
                }
              }}
              render={({ field: { onChange, value } }) => (
                <Input variant="underlined">
                  <InputField
                    value={value}
                    onChangeText={onChange}
                    placeholder="Enter first name"
                  />
                </Input>
              )}
            />
            {errors.firstName && <Text color="$red500" fontSize="$xs">{errors.firstName.message}</Text>}
          </Box>

          <Box>
            <Text fontSize="$sm" mb="$1">Last name</Text>
            <Controller
              control={control}
              name="lastName"
              rules={{
                required: 'Last name is required',
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: 'Only alphabetic characters allowed'
                },
                minLength: {
                  value: 2,
                  message: 'Minimum 2 characters required'
                }
              }}
              render={({ field: { onChange, value } }) => (
                <Input variant="underlined">
                  <InputField
                    value={value}
                    onChangeText={onChange}
                    placeholder="Enter last name"
                  />
                </Input>
              )}
            />
            {errors.lastName && <Text color="$red500" fontSize="$xs">{errors.lastName.message}</Text>}
          </Box>

          {/* <Box>
            <Text fontSize="$sm" mb="$1">Date of Birth</Text>
            <Controller
              control={control}
              name="dob"
              rules={{
                required: 'Date of birth is required',
                validate: value => isValidDate(value) || 'Invalid date format (DD/MM/YYYY)'
              }}
              render={({ field: { onChange, value } }) => (
                <Input variant="underlined">
                  <InputField
                    value={value}
                    onChangeText={onChange}
                    placeholder="DD/MM/YYYY"
                  />
                </Input>
              )}
            />
            {errors.dob && <Text color="$red500" fontSize="$xs">{errors.dob.message}</Text>}
          </Box> */}
          <Box>
  <Text fontSize="$sm" mb="$1">Date of Birth</Text>
  <Controller
    control={control}
    name="dob"
    rules={{
      required: 'Date of birth is required',
      validate: value => isValidDate(value) || 'Invalid date format (DD/MM/YYYY)'
    }}
    render={({ field: { onChange, value } }) => (
      <Input variant="underlined">
        <InputField
          value={value}
          onChangeText={(text) => {
            const formatted = formatDateWithSlashes(text);
            onChange(formatted);
          }}
          placeholder="DD/MM/YYYY"
          keyboardType="numeric"
          maxLength={10} // DD/MM/YYYY is 10 characters
        />
      </Input>
    )}
  />
  {errors.dob && <Text color="$red500" fontSize="$xs">{errors.dob.message}</Text>}
</Box>

          <Box>
            <Text fontSize="$sm" mb="$1">Nationality</Text>
            <Controller
              control={control}
              name="nationality"
              rules={{ required: 'Nationality is required' }}
              render={({ field: { onChange, value } }) => (
                <Select selectedValue={value} onValueChange={onChange}>
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
              )}
            />
            {errors.nationality && <Text color="$red500" fontSize="$xs">{errors.nationality.message}</Text>}
          </Box>
        </VStack>

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
            onPress={handleSubmit(onSubmit)}
          >
            <Text fontWeight="$medium" color="$white">Next</Text>
          </Button>
        </HStack>
      </ScrollView>
    </Box>
  );
}



