// import React, { useState } from 'react';
// import { Box, Text, VStack, Input, Button, HStack, Select, SelectTrigger, SelectInput, SelectIcon, ChevronDownIcon, SelectPortal, SelectBackdrop, SelectContent, SelectItem, ScrollView } from '@gluestack-ui/themed';
// import { useNavigation } from '@react-navigation/native';

// export default function OwnerDetailsScreen() {
//   const navigation:any = useNavigation();

//   const [title, setTitle] = useState('Mr.');
//   const [nationality, setNationality] = useState('British');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [dob, setDob] = useState('');


//   return (
//     <Box flex={1} bg="$backgroundLight200" px="$4" pt="$6">
//       <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
//         {/* Header */}
//         <HStack alignItems="center" mb="$6">
//           <Text fontSize="$lg" mr="$2">←</Text>
//           <Text fontSize="$lg" fontWeight="$medium">Owner details</Text>
//         </HStack>

//         {/* Title */}
//         <Text fontSize="$xl" fontWeight="$bold" mb="$2">
//           Owner name as in ID
//         </Text>
//         <Text fontSize="$sm" color="$textLight500" mb="$6">
//           Onboarding is an essential step to activate my Datman account for accepting payments and receiving payouts.
//         </Text>

//         {/* Form Fields */}
//         <VStack space="lg">
//           {/* Title Dropdown */}
//           <Box>
//             <Text fontSize="$sm" mb="$1">Title</Text>
//             <Select selectedValue={title} onValueChange={setTitle}>
//               <SelectTrigger variant="underlined">
//                 <SelectInput placeholder="Select title" />
//                 <SelectIcon>
//                   <ChevronDownIcon />
//                 </SelectIcon>
//               </SelectTrigger>
//               <SelectPortal>
//                 <SelectBackdrop />
//                 <SelectContent>
//                   <SelectItem label="Mr." value="Mr." />
//                   <SelectItem label="Mrs." value="Mrs." />
//                   <SelectItem label="Ms." value="Ms." />
//                   <SelectItem label="Dr." value="Dr." />
//                 </SelectContent>
//               </SelectPortal>
//             </Select>
//           </Box>

//           {/* First Name */}
//           <Box>
//             <Text fontSize="$sm" mb="$1">First name</Text>
//             <Input
//               variant="underlined"
//             //   value={firstName}
//             //   onChangeText={setFirstName}
//             //   placeholder="Enter first name"
//             />
//           </Box>

//           {/* Last Name */}
//           <Box>
//             <Text fontSize="$sm" mb="$1">Last name</Text>
//             <Input
//               variant="underlined"
//             //   value={lastName}
//             //   onChangeText={setLastName}
//             //   placeholder="Enter last name"
//             />
//           </Box>

//           {/* Date of Birth */}
//           <Box>
//             <Text fontSize="$sm" mb="$1">Date of Birth</Text>
//             <Input
//               variant="underlined"
//             //   value={dob}
//             //   onChangeText={setDob}
//             //   placeholder="DD/MM/YYYY"
//             />
//           </Box>

//           {/* Nationality Dropdown */}
//           <Box>
//             <Text fontSize="$sm" mb="$1">Nationality</Text>
//             <Select selectedValue={nationality} onValueChange={setNationality}>
//               <SelectTrigger variant="underlined">
//                 <SelectInput placeholder="Select nationality" />
//                 <SelectIcon>
//                   <ChevronDownIcon />
//                 </SelectIcon>
//               </SelectTrigger>
//               <SelectPortal>
//                 <SelectBackdrop />
//                 <SelectContent>
//                   <SelectItem label="British" value="British" />
//                   <SelectItem label="Indian" value="Indian" />
//                   <SelectItem label="American" value="American" />
//                   <SelectItem label="Other" value="Other" />
//                 </SelectContent>
//               </SelectPortal>
//             </Select>
//           </Box>
//         </VStack>

//         {/* Action Buttons */}
//         <HStack space="md" mt="$8" justifyContent="space-between">
//           <Button
//             variant="outline"
//             flex={1}
//             borderRadius="$full"
//             borderColor="$black"
//             onPress={() => navigation.goBack()}
//           >
//             <Text fontWeight="$medium" color="$black">Later</Text>
//           </Button>
//           <Button
//             flex={1}
//             bg="$black"
//             borderRadius="$full"
//             onPress={() => navigation.navigate("Contact")}
//           >
//             <Text fontWeight="$medium" color="$white">Next</Text>
//           </Button>
//         </HStack>
//       </ScrollView>
//     </Box>
//   );
// }



















// import React, { useState } from 'react';
// import {
//   Box,
//   Text,
//   VStack,
//   Input,
//   InputField,
//   Button,
//   ButtonText,
//   HStack,
//   Select,
//   SelectTrigger,
//   SelectInput,
//   SelectIcon,
//   SelectPortal,
//   SelectBackdrop,
//   SelectContent,
//   SelectItem,
//   ScrollView,
//   Spinner,
//   ChevronDownIcon,
// } from '@gluestack-ui/themed';
// import { useNavigation } from '@react-navigation/native';
// import { useOwnerApi } from '../hooks/useOwnerApi';

// export default function OwnerDetailsScreen() {
//   const navigation:any = useNavigation();
//   const { postOwnerDetails, loading } = useOwnerApi();

//   // Form States
//   const [title, setTitle] = useState('Mr.');
//   const [nationality, setNationality] = useState('British');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [dob, setDob] = useState('');

//   // Optional documents (null for now or implement file picker later)
//   const passport = null;
//   const license = null;


//   const handleNext = async () => {
//     try {
//       const ownerDetails = {
//         title,
//         firstName,
//         lastName,
//         dob,
//         nationality,
//       };
  
//       const result = await postOwnerDetails(ownerDetails, passport, license);
//       console.log('Submitted successfully:', result);
//       navigation.navigate('Contact');
//     } catch (err: any) {
//       console.error('Submission error:', err);
  
//       if (typeof err?.message === 'string' && err.message.includes('Already read')) {
//         console.warn('File already read, navigating to next step anyway.');
//         navigation.navigate('Contact');
//       } else {
//         alert('Something went wrong. Please try again.');
//       }
//     }
//   };
  
  







//   const isFormValid = firstName.trim() && lastName.trim() && dob.trim();

//   return (
//     <Box flex={1} bg="$backgroundLight200" px="$4" pt="$6">
//       <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
//         {/* Header */}
//         <HStack alignItems="center" mb="$6">
//           <Button variant="link" onPress={() => navigation.goBack()}>
//             <Text fontSize="$lg" mr="$2">←</Text>
//           </Button>
//           <Text fontSize="$lg" fontWeight="$medium">Owner details</Text>
//         </HStack>

//         {/* Title */}
//         <Text fontSize="$xl" fontWeight="$bold" mb="$2">
//           Owner name as in ID
//         </Text>
//         <Text fontSize="$sm" color="$textLight500" mb="$6">
//           Onboarding is an essential step to activate my Datman account for accepting payments and receiving payouts.
//         </Text>

//         {/* Form */}
//         <VStack space="lg" mb="$8">
//           {/* Title Select */}
//           <Box>
//             <Text fontSize="$sm" mb="$1">Title</Text>
//             <Select selectedValue={title} onValueChange={setTitle}>
//               <SelectTrigger variant="underlined">
//                 <SelectInput placeholder="Select title" />
//                 <SelectIcon as={ChevronDownIcon} />
//               </SelectTrigger>
//               <SelectPortal>
//                 <SelectBackdrop />
//                 <SelectContent>
//                   <SelectItem label="Mr." value="Mr." />
//                   <SelectItem label="Mrs." value="Mrs." />
//                   <SelectItem label="Ms." value="Ms." />
//                   <SelectItem label="Dr." value="Dr." />
//                 </SelectContent>
//               </SelectPortal>
//             </Select>
//           </Box>

//           {/* First Name */}
//           <Box>
//             <Text fontSize="$sm" mb="$1">First name</Text>
//             <Input variant="underlined">
//               <InputField
//                 value={firstName}
//                 onChangeText={setFirstName}
//                 placeholder="Enter first name"
//                 autoCapitalize="words"
//               />
//             </Input>
//           </Box>

//           {/* Last Name */}
//           <Box>
//             <Text fontSize="$sm" mb="$1">Last name</Text>
//             <Input variant="underlined">
//               <InputField
//                 value={lastName}
//                 onChangeText={setLastName}
//                 placeholder="Enter last name"
//                 autoCapitalize="words"
//               />
//             </Input>
//           </Box>

//           {/* Date of Birth */}
//           <Box>
//             <Text fontSize="$sm" mb="$1">Date of Birth</Text>
//             <Input variant="underlined">
//               <InputField
//                 value={dob}
//                 onChangeText={setDob}
//                 placeholder="DD/MM/YYYY"
//                 keyboardType="numeric"
//               />
//             </Input>
//           </Box>

//           {/* Nationality */}
//           <Box>
//             <Text fontSize="$sm" mb="$1">Nationality</Text>
//             <Select selectedValue={nationality} onValueChange={setNationality}>
//               <SelectTrigger variant="underlined">
//                 <SelectInput placeholder="Select nationality" />
//                 <SelectIcon as={ChevronDownIcon} />
//               </SelectTrigger>
//               <SelectPortal>
//                 <SelectBackdrop />
//                 <SelectContent>
//                   <SelectItem label="British" value="British" />
//                   <SelectItem label="Indian" value="Indian" />
//                   <SelectItem label="American" value="American" />
//                   <SelectItem label="Other" value="Other" />
//                 </SelectContent>
//               </SelectPortal>
//             </Select>
//           </Box>
//         </VStack>

//         {/* Buttons */}
//         <HStack space="md" mt="$8" justifyContent="space-between">
//           <Button
//             variant="outline"
//             flex={1}
//             borderRadius="$full"
//             borderColor="$black"
//             onPress={() => navigation.goBack()}
//           >
//             <ButtonText color="$black">Later</ButtonText>
//           </Button>
//           <Button
//             flex={1}
//             bg="$black"
//             borderRadius="$full"
//             onPress={handleNext}
//             isDisabled={!isFormValid || loading}
//           >
//             {loading ? (
//               <Spinner size="small" color="$white" />
//             ) : (
//               <ButtonText color="$white">Next</ButtonText>
//             )}
//           </Button>
//         </HStack>
//       </ScrollView>
//     </Box>
//   );
// }















// by reduximport React, { useState } from 'react';
import {
  Box, Text, VStack, Input, InputField, Button, HStack, Select,
  SelectTrigger, SelectInput, SelectIcon, ChevronDownIcon,
  SelectPortal, SelectBackdrop, SelectContent, SelectItem, ScrollView
} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {setOwnerDetails}  from '../store/actions/ownerActions'; // adjust path as per your project
import { useDispatch } from 'react-redux';


export default function OwnerDetailsScreen() {
  const navigation: any = useNavigation();

  const [title, setTitle] = useState('Mr.');
  const [nationality, setNationality] = useState('British');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const dispatch = useDispatch();


  const handleNext = () => {
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
            bg="$black"
            borderRadius="$full"
            onPress={handleNext}
          >
            <Text fontWeight="$medium" color="$white">Next</Text>
          </Button>
        </HStack>
      </ScrollView>
    </Box>
  );
}
