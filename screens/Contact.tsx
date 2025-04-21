// import React, { useState } from 'react';
// import { ScrollView } from 'react-native';
// import { useSelector } from 'react-redux'
// import { 
//   GluestackUIProvider,
//   Box,
//   Text,
//   VStack,
//   HStack,
//   Button,
//   ButtonText,
//   Input,
//   InputField,
  
// } from '@gluestack-ui/themed';
// import { customConfig } from '../theme';
// import { useNavigation } from '@react-navigation/native';

// const Contact = () => {
// const navigation:any=useNavigation()
// const [phn,setPhn]=useState("");
// const [email,setEmail]=useState("")

// const owner = useSelector((state: any) => state.owner.owner);
//   console.log("Owner details from redux:", owner);


//   return (
//     <GluestackUIProvider config={customConfig}>
//       <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//         <Box bg="$white" marginTop="$8" flex={1} p="$6">
//           {/* Header */}
         
          
//           {/* <Box h="$px" bg="$borderLight200" my="$4" /> */}
          
//           {/* Subheader */}
//           <Text fontSize="$lg" fontWeight="$bold" mb="$5">
//             Owner details
//           </Text>
          
//           {/* Title */}
//           <Text fontSize="$xl" fontWeight="$bold" mb="$3">
//             Contact details
//           </Text>
          
//           {/* Description */}
//           <Text fontSize="$md" mb="$6">
//             Onboarding is an essential step to activate my
//             Datman account for accepting payments and
//             receiving payouts.
//           </Text>
          
//           {/* Email Input */}
//           <VStack space="sm" mb="$6">
//             <Text fontSize="$sm" fontWeight="$medium">Email ID</Text>
//             <Input
//               variant="underlined"
//               size="md"
              
//               // isDisabled={true}
//             //   borderColor="$borderLight300"
//             >
//               <InputField
//                 // value="starkjohn@gmail.com"
//                 value={email}
//               onChangeText={setEmail}
//                 placeholder="Email ID"
//               />
//             </Input>
//           </VStack>
          
//           {/* Phone Number Input */}
//           <VStack space="sm" mb="$8">
//             <Text fontSize="$sm" fontWeight="$medium">Phone number</Text>
//             <Input
//               variant="underlined"
//               size="md"

//               // isDisabled={true}
//               borderColor="$borderLight300"
//             >
//               <InputField
// value={phn} onChangeText={setPhn}                placeholder="Phone number"
//               />
//             </Input>
//           </VStack>
          
//           {/* Buttons */}
//           <HStack space="md" justifyContent="space-between" mt="$8">
//             <Button
//               variant="outline"
//               borderColor="$borderLight400"
//               flex={1}
//               borderRadius="$full"
//               onPress={() => navigation.goBack()}
//             >
//               <ButtonText color="$textDark700">Later</ButtonText>
//             </Button>
            
//             <Button
//               bg="$primary500"
//               flex={1}
//             backgroundColor="$black"
//             borderRadius="$full"
//               onPress={() => navigation.navigate("Address")}
//             >
//               <ButtonText color="$white">Next</ButtonText>
//             </Button>
//           </HStack>
//         </Box>
//       </ScrollView>
//     </GluestackUIProvider>
//   );
// };

// export default Contact;






















// import React, { useState } from 'react';
// import { ScrollView } from 'react-native';
// import {
//   GluestackUIProvider,
//   Box,
//   Text,
//   VStack,
//   HStack,
//   Button,
//   ButtonText,
//   Input,
//   InputField,
// } from '@gluestack-ui/themed';
// import { customConfig } from '../theme';
// import { useNavigation } from '@react-navigation/native';


// // 🧠 Import your custom hook
// import { useOwnerApi } from '../hooks/useOwnerApi'; // ✅ make sure path is correct

// const Contact = () => {
//   const navigation:any = useNavigation();
  
//   // 🧠 Call your hook *inside* the component function
//   const { postOwnerDetails, getOwnerDetails, loading } = useOwnerApi();
//   const [email,setEmail]=useState("");
//   const [phn,setPhn]=useState("");
  
//   return (
//     <GluestackUIProvider config={customConfig}>
//       <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//         <Box bg="$white" marginTop="$8" flex={1} p="$6">
//           <Text fontSize="$lg" fontWeight="$bold" mb="$5">Owner details</Text>
//           <Text fontSize="$xl" fontWeight="$bold" mb="$3">Contact details</Text>
//           <Text fontSize="$md" mb="$6">
//             Onboarding is an essential step to activate my Datman account for accepting payments and receiving payouts.
//           </Text>

//           <VStack space="sm" mb="$6">
//             <Text fontSize="$sm" fontWeight="$medium">Email ID</Text>
//             <Input variant="underlined" size="md">
//               <InputField value={email}     onChangeText={setEmail}
//  placeholder="Email ID" />
//             </Input>
//           </VStack>

//           <VStack space="sm" mb="$8">
//             <Text fontSize="$sm" fontWeight="$medium">Phone number</Text>
//             <Input variant="underlined" size="md">
//               <InputField value={phn}
//     onChangeText={setPhn}
//     placeholder="Phone number" />
//             </Input>
//           </VStack>

//           <HStack space="md" justifyContent="space-between" mt="$8">
//             <Button
//               variant="outline"
//               borderColor="$borderLight400"
//               flex={1}
//               borderRadius="$full"
//               onPress={() => navigation.goBack()}
//             >
//               <ButtonText color="$textDark700">Later</ButtonText>
//             </Button>

//             <Button
//               bg="$primary500"
//               flex={1}
//               backgroundColor="$black"
//               borderRadius="$full"
//               onPress={() => navigation.navigate("Address")}
//             >
//               <ButtonText color="$white">Next</ButtonText>
//             </Button>
//           </HStack>
//         </Box>
//       </ScrollView>
//     </GluestackUIProvider>
//   );
// };

// export default Contact;





// usingredux

import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setContactDetails } from '../store/actions/ownerActions'; // Adjust the path if needed
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

const Contact = () => {
  const navigation: any = useNavigation();
  
  // Local state to manage the inputs
  const [phn, setPhn] = useState('');
  const [email, setEmail] = useState('');

  // Dispatch to update Redux store
  const dispatch = useDispatch();

  // Fetch owner details from Redux (you can use it if you want to show it or prefill fields)
  const owner = useSelector((state: any) => state.owner.owner);
  console.log('Owner details from redux:', owner);

  // Fetch contact details from Redux (to prefill if exists)
  const contact = useSelector((state: any) => state.owner.contact);

  useEffect(() => {
    // Prefill the contact details if they are already in Redux
    if (contact.email) setEmail(contact.email);
    if (contact.phone) setPhn(contact.phone);
  }, [contact]);

  // Handle form submission and dispatch to Redux
  const handleNext = () => {
    const contactDetails = {
      email,
      phone: phn,
    };

    // Dispatch the action to store contact details in Redux
    dispatch(setContactDetails(contactDetails));
    console.log('Submitted Contact Details:', contactDetails);

    // Navigate to Address screen
    navigation.navigate('Address');
  };

  return (
    <GluestackUIProvider config={customConfig}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Box bg="$white" marginTop="$8" flex={1} p="$6">
          {/* Header */}
          {/* <Box h="$px" bg="$borderLight200" my="$4" /> */}

          {/* Subheader */}
          <Text fontSize="$lg" fontWeight="$bold" mb="$5">
            Owner details
          </Text>

          {/* Title */}
          <Text fontSize="$xl" fontWeight="$bold" mb="$3">
            Contact details
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
            >
              <InputField
                value={email}
                onChangeText={setEmail}
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
              borderColor="$borderLight300"
            >
              <InputField
                value={phn}
                onChangeText={setPhn}
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
              onPress={handleNext}
            >
              <ButtonText color="$white">Next</ButtonText>
            </Button>
          </HStack>
        </Box>
      </ScrollView>
    </GluestackUIProvider>
  );
};

export default Contact;
