// import React, { useState } from 'react';
// import {
//   Box,
//   Text,
//   VStack,
//   HStack,
//   Button,
//   ButtonText,
//   Pressable,
//   Badge,
//   BadgeText,
//   ScrollView,
//   Modal,
//   ModalBackdrop,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Image,
// } from '@gluestack-ui/themed';
// import * as DocumentPicker from 'expo-document-picker';
// import { useNavigation } from '@react-navigation/native';
// import { Center } from '@gluestack-ui/themed';

// export default function DocumentsUpload() {
//   const navigation:any = useNavigation();
//   const [passport, setPassport]:any = useState(null);
//   const [license, setLicense] :any= useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [modal, setModal] = useState(false);


//   const pickDocument = async (type:any) => {
//     try {
//       const result = await DocumentPicker.getDocumentAsync({
//         type: ['image/*', 'application/pdf'],
//       });

//       if (!result.canceled) {
//         if (type === 'passport') {
//           setPassport(result.assets[0]);
//         } else {
//           setLicense(result.assets[0]);
//         }
//       }
//     } catch (err) {
//       console.warn('Document pick error:', err);
//     }
//   };

  

//   const isNextEnabled = passport || license;

//   return (
//     <Box flex={1} p="$4" marginTop="$5">
//       <Box flex={1} p="$2">
//         <ScrollView showsVerticalScrollIndicator={false}>
//           {/* Header */}
//           <HStack alignItems="center" mb="$6">
//             <Pressable onPress={() => navigation.goBack()}>
//               <Text fontSize="$xl" mr="$2">←</Text>
//             </Pressable>
//             <Text fontSize="$lg" fontWeight="$medium">Upload documents</Text>
//           </HStack>

//           {/* Title */}
//           <Text fontSize="$2xl" fontWeight="$bold" mb="$2">
//             Upload any of the documents to verify your identity
//           </Text>
//           <Text fontSize="$sm" color="$textLight500" mb="$4">
//             Accepted formats: JPG, PNG, JPEG, and PDF.
//           </Text>

//           {/* Identity Verification */}
//           <Text fontWeight="$semibold" mb="$1">Identity Verification</Text>
//           <HStack alignItems="center" mb="$2">
//             <Badge bg="$amber200" borderRadius="$full" px="$2" py="$1">
//               <BadgeText color="$amber800" fontSize="$xs">Pending</BadgeText>
//             </Badge>
//           </HStack>
//           <Text fontSize="$sm" color="$textLight500" mb="$6">
//             Provide a copy of a government-issued ID such as a passport or driver’s license.
//           </Text>

//           {/* Upload Options */}
//           <VStack space="lg">
//             <Pressable onPress={() => pickDocument('passport')}>
//               <Text color="$green700" fontSize="$md">+ Passport</Text>
//               {passport && (
//                 <Text color="$textLight500" fontSize="$xs">
//                   Uploaded: {passport.name}
//                 </Text>
//               )}
//             </Pressable>

//             <Pressable onPress={() => pickDocument('license')}>
//               <Text color="$green700" fontSize="$md">+ Driving license</Text>
//               {license && (
//                 <Text color="$textLight500" fontSize="$xs">
//                   Uploaded: {license.name}
//                 </Text>
//               )}
//             </Pressable>
//           </VStack>
//         </ScrollView>

//         {/* Footer */}
//         <HStack space="md" justifyContent="space-between" mt="$6">
//           <Button
//             variant="outline"
//             borderRadius="$full"
//             borderColor="$black"
//             flex={1}
//             mr="$2"
//             onPress={() => navigation.goBack()}
//           >
//             <ButtonText color="$black">Later</ButtonText>
//           </Button>

//           <Button
//             borderRadius="$full"
//             bg={isNextEnabled ? "$black" : "$coolGray300"}
//             flex={1}
//             disabled={!isNextEnabled}
//             onPress={() => isNextEnabled && setShowModal(true)}
//           >
//             <ButtonText color="$white">Next</ButtonText>
//           </Button>
//         </HStack>
//       </Box>

//       {/* Modal */}
//       <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
//         <ModalBackdrop />
//         <ModalContent borderTopLeftRadius={20} borderTopRightRadius={20}>
//           <ModalHeader>
//             <Text fontSize="$lg" fontWeight="$semibold">Review your details <Text fontWeight="$normal">(Optional)</Text></Text>
//           </ModalHeader>

//           <ModalBody>
//             <Text fontSize="$sm" color="$textLight500" mb="$4">
//               You can review your provided information and make changes if needed, or proceed as it is.
//             </Text>
//           </ModalBody>

//           <ModalFooter>
//             <HStack space="md" w="100%">
//               <Button
//                 variant="outline"
//                 borderRadius="$full"
//                 borderColor="$black"
//                 flex={1}
//                 onPress={() => {
//                   setShowModal(false);
//                   navigation.navigate('Review'); // adjust as needed
//                 }}
//               >
//                 <ButtonText color="$black">Review</ButtonText>
//               </Button>

//               <Button
//                 borderRadius="$full"
//                 bg="$black"
//                 flex={1}
//                 onPress={() => {
//                   setModal(true);
//                   setShowModal(false);
//                 //   navigation.navigate('NextStep'); // adjust as needed
//                 }}
//               >
//                 <ButtonText color="$white" >No, I’m good</ButtonText>
//               </Button>
//             </HStack>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>


// <Modal isOpen={modal} onClose={() => setModal(false)}>
//         <ModalBackdrop />
//         <ModalContent borderTopLeftRadius="$2xl"
//   borderTopRightRadius="$2xl"
//   borderBottomLeftRadius="$none"
//   borderBottomRightRadius="$none"
//   alignItems="center">
//           <ModalBody mt="$6">
//             <Center mb="$4">
//               {/* Optional icon (checkmark pen) */}
//               <Image source={require('../assets/images/tick.png')} alt="Tick" h={90} w={110} />
//             </Center>
//             <Text fontSize="$lg" fontWeight="$semibold" textAlign="center">
//               Owner verification in progress
//             </Text>
//             <Text fontSize="$sm" textAlign="center" mt="$2" color="$gray500">
//               The owner details will be verified soon. You can continue filling in the remaining details.
//             </Text>
//           </ModalBody>
//           <ModalFooter w="100%" px="$4" pb="$6">
//           <Button 
//   flex={1} 
//   bg="$black" 
//   borderRadius="$full"
//   onPress={() => {
//     navigation.navigate("Details");
//     setModal(false); // Make sure to use setModal if that's your state setter
//   }}
// >
//   <ButtonText color="$white">Continue</ButtonText>
// </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>


//     </Box>




//   );
// }


































// import React, { useState } from 'react';
// import {
//   Box,
//   Text,
//   VStack,
//   HStack,
//   Button,
//   ButtonText,
//   Pressable,
//   Badge,
//   BadgeText,
//   ScrollView,
//   Modal,
//   ModalBackdrop,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Image,
//   Center,
// } from '@gluestack-ui/themed';
// import * as DocumentPicker from 'expo-document-picker';
// import { useNavigation } from '@react-navigation/native';
// import { useDispatch } from 'react-redux';
// import { setImg } from '../store/actions/ownerActions'; // Adjust path as needed
// import { useOwnerApi } from '../hooks/useOwnerApi';

// export default function DocumentsUpload() {
//   const navigation: any = useNavigation();
//   const dispatch = useDispatch();

//   const [passport, setPassport]: any = useState(null);
//   const [license, setLicense]: any = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [modal, setModal] = useState(false);
//   const { postOwnerDetails, loading } = useOwnerApi();

//   const pickDocument = async (type: any) => {
//     try {
//       const result = await DocumentPicker.getDocumentAsync({
//         type: ['image/*', 'application/pdf'],
//       });

//       if (!result.canceled) {
//         const selectedFile = result.assets[0];

//         if (type === 'passport') {
//           setPassport(selectedFile);
//         } else {
//           setLicense(selectedFile);
//         }

//         // Dispatch image to Redux store
//         dispatch(setImg({ path: selectedFile.uri }));
//       }
//     } catch (err) {
//       console.warn('Document pick error:', err);
//     }
//   };

//   const isNextEnabled = passport || license;



//   const handleNoDocumentClick = async () => {
//     const details = {
//       title: 'Mr',
//       firstName: 'John',
//       lastName: 'Doe',
//       dob: '1990-01-01',
//       nationality: 'Indian',
//     };

//     try {
//       await postOwnerDetails(details, null); // No document attached
//       console.log('Business detail submitted without document');
//     } catch (err) {
//       console.error(err);
//     }
//   };




//   return (
//     <Box flex={1} p="$4" marginTop="$5">
//       <Box flex={1} p="$2">
//         <ScrollView showsVerticalScrollIndicator={false}>
//           <HStack alignItems="center" mb="$6">
//             <Pressable onPress={() => navigation.goBack()}>
//               <Text fontSize="$xl" mr="$2">←</Text>
//             </Pressable>
//             <Text fontSize="$lg" fontWeight="$medium">Upload documents</Text>
//           </HStack>

//           <Text fontSize="$2xl" fontWeight="$bold" mb="$2">
//             Upload any of the documents to verify your identity
//           </Text>
//           <Text fontSize="$sm" color="$textLight500" mb="$4">
//             Accepted formats: JPG, PNG, JPEG, and PDF.
//           </Text>

//           <Text fontWeight="$semibold" mb="$1">Identity Verification</Text>
//           <HStack alignItems="center" mb="$2">
//             <Badge bg="$amber200" borderRadius="$full" px="$2" py="$1">
//               <BadgeText color="$amber800" fontSize="$xs">Pending</BadgeText>
//             </Badge>
//           </HStack>
//           <Text fontSize="$sm" color="$textLight500" mb="$6">
//             Provide a copy of a government-issued ID such as a passport or driver’s license.
//           </Text>

//           <VStack space="lg">
//             <Pressable onPress={() => pickDocument('passport')}>
//               <Text color="$green700" fontSize="$md">+ Passport</Text>
//               {passport && (
//                 <Text color="$textLight500" fontSize="$xs">
//                   Uploaded: {passport.name}
//                 </Text>
//               )}
//             </Pressable>

//             <Pressable onPress={() => pickDocument('license')}>
//               <Text color="$green700" fontSize="$md">+ Driving license</Text>
//               {license && (
//                 <Text color="$textLight500" fontSize="$xs">
//                   Uploaded: {license.name}
//                 </Text>
//               )}
//             </Pressable>
//           </VStack>
//         </ScrollView>

//         <HStack space="md" justifyContent="space-between" mt="$6">
//           <Button
//             variant="outline"
//             borderRadius="$full"
//             borderColor="$black"
//             flex={1}
//             mr="$2"
//             onPress={() => navigation.goBack()}
//           >
//             <ButtonText color="$black">Later</ButtonText>
//           </Button>

//           <Button
//             borderRadius="$full"
//             bg={isNextEnabled ? "$black" : "$coolGray300"}
//             flex={1}
//             disabled={!isNextEnabled}
//             onPress={() => isNextEnabled && setShowModal(true)}
//           >
//             <ButtonText color="$white">Next</ButtonText>
//           </Button>
//         </HStack>
//       </Box>

//       {/* Review Modal */}
//       <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
//         <ModalBackdrop />
//         <ModalContent borderTopLeftRadius={20} borderTopRightRadius={20}>
//           <ModalHeader>
//             <Text fontSize="$lg" fontWeight="$semibold">
//               Review your details <Text fontWeight="$normal">(Optional)</Text>
//             </Text>
//           </ModalHeader>

//           <ModalBody>
//             <Text fontSize="$sm" color="$textLight500" mb="$4">
//               You can review your provided information and make changes if needed, or proceed as it is.
//             </Text>
//           </ModalBody>

//           <ModalFooter>
//             <HStack space="md" w="100%">
//               <Button
//                 variant="outline"
//                 borderRadius="$full"
//                 borderColor="$black"
//                 flex={1}
//                 onPress={() => {
//                   setShowModal(false);
//                   navigation.navigate('Review');
//                 }}
//               >
//                 <ButtonText color="$black">Review</ButtonText>
//               </Button>

//               <Button
//                 borderRadius="$full"
//                 bg="$black"
//                 flex={1}
//                 // onClick={handleNoDocumentClick}
//                 onPress={() => {
//                   setModal(true);
//                   setShowModal(false);
//                   {handleNoDocumentClick}
//                 }}
//               >
//                 <ButtonText color="$white">No, I’m good</ButtonText>
//               </Button>
//             </HStack>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>

//       {/* Success Modal */}
//       <Modal isOpen={modal} onClose={() => setModal(false)}>
//         <ModalBackdrop />
//         <ModalContent
//           borderTopLeftRadius="$2xl"
//           borderTopRightRadius="$2xl"
//           borderBottomLeftRadius="$none"
//           borderBottomRightRadius="$none"
//           alignItems="center"
//         >
//           <ModalBody mt="$6">
//             <Center mb="$4">
//               <Image source={require('../assets/images/tick.png')} alt="Tick" h={90} w={110} />
//             </Center>
//             <Text fontSize="$lg" fontWeight="$semibold" textAlign="center">
//               Owner verification in progress
//             </Text>
//             <Text fontSize="$sm" textAlign="center" mt="$2" color="$gray500">
//               The owner details will be verified soon. You can continue filling in the remaining details.
//             </Text>
//           </ModalBody>
//           <ModalFooter w="100%" px="$4" pb="$6">
//             <Button
//               flex={1}
//               bg="$black"
//               borderRadius="$full"
//               onPress={() => {
//                 navigation.navigate('Details');
//                 setModal(false);
//               }}
//             >
//               <ButtonText color="$white">Continue</ButtonText>
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// }









import React, { useState } from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  Button,
  ButtonText,
  Pressable,
  Badge,
  BadgeText,
  ScrollView,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Image,
  Center,
} from '@gluestack-ui/themed';
import * as DocumentPicker from 'expo-document-picker';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setImg } from '../store/actions/ownerActions';
import { useOwnerApi } from '../hooks/useOwnerApi';

export default function DocumentsUpload() {
  const navigation: any = useNavigation();
  const dispatch = useDispatch();

  const [passport, setPassport]: any = useState(null);
  const [license, setLicense]: any = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState(false);
  const { postOwnerDetails, loading } = useOwnerApi();

  const pickDocument = async (type: 'passport' | 'license') => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['image/*', 'application/pdf'],
      });

      if (!result.canceled) {
        const selectedFile = result.assets[0];

        if (type === 'passport') {
          setPassport(selectedFile);
        } else {
          setLicense(selectedFile);
        }

        dispatch(setImg({ path: selectedFile.uri }));
      }
    } catch (err) {
      console.warn('Document pick error:', err);
    }
  };

  const isNextEnabled = passport || license;

   const owner = useSelector((state: any) => state.owner.owner);
    console.log('Owner details from redux:', owner);
    const contact = useSelector((state: any) => state.owner.contact);
    console.log('conatct details from redux:', contact);
    const address = useSelector((state: any) => state.owner.address);
    console.log('address details from redux:', address);
    const image = useSelector((state: any) => state.owner.image);
    console.log('Image details from redux:', image);

  const handleNoDocumentClick = async () => {
    const details = {
      ...owner,
      ...contact,
      ...address,
      image: image?.path,
    };

    try {
      await postOwnerDetails(details);
      console.log('Business detail submitted without document',details);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box flex={1} p="$4" mt="$5">
      <Box flex={1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HStack alignItems="center" mb="$6">
            <Pressable onPress={() => navigation.goBack()}>
              <Text fontSize="$xl" mr="$2">←</Text>
            </Pressable>
            <Text fontSize="$lg" fontWeight="$medium">Upload documents</Text>
          </HStack>

          <Text fontSize="$2xl" fontWeight="$bold" mb="$2">
            Upload any of the documents to verify your identity
          </Text>
          <Text fontSize="$sm" color="$textLight500" mb="$4">
            Accepted formats: JPG, PNG, JPEG, and PDF.
          </Text>

          <Text fontWeight="$semibold" mb="$1">Identity Verification</Text>
          <HStack alignItems="center" mb="$2">
            <Badge bg="$amber200" borderRadius="$full" px="$2" py="$1">
              <BadgeText color="$amber800" fontSize="$xs">Pending</BadgeText>
            </Badge>
          </HStack>
          <Text fontSize="$sm" color="$textLight500" mb="$6">
            Provide a copy of a government-issued ID such as a passport or driver’s license.
          </Text>

          <VStack space="lg">
            <Pressable onPress={() => pickDocument('passport')}>
              <Text color="$green700" fontSize="$md">+ Passport</Text>
              {passport && (
                <Text color="$textLight500" fontSize="$xs">
                  Uploaded: {passport.name}
                </Text>
              )}
            </Pressable>

            <Pressable onPress={() => pickDocument('license')}>
              <Text color="$green700" fontSize="$md">+ Driving license</Text>
              {license && (
                <Text color="$textLight500" fontSize="$xs">
                  Uploaded: {license.name}
                </Text>
              )}
            </Pressable>
          </VStack>
        </ScrollView>

        <HStack space="md" justifyContent="space-between" mt="$6">
          <Button
            variant="outline"
            borderRadius="$full"
            borderColor="$black"
            flex={1}
            mr="$2"
            onPress={() => navigation.goBack()}
          >
            <ButtonText color="$black">Later</ButtonText>
          </Button>

          <Button
            borderRadius="$full"
            bg={isNextEnabled ? "$black" : "$coolGray300"}
            flex={1}
            disabled={!isNextEnabled}
            onPress={() => setShowModal(true)}
          >
            <ButtonText color="$white">Next</ButtonText>
          </Button>
        </HStack>
      </Box>

      {/* Review Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ModalBackdrop />
        <ModalContent borderTopLeftRadius={20} borderTopRightRadius={20}>
          <ModalHeader>
            <Text fontSize="$lg" fontWeight="$semibold">
              Review your details <Text fontWeight="$normal">(Optional)</Text>
            </Text>
          </ModalHeader>

          <ModalBody>
            <Text fontSize="$sm" color="$textLight500" mb="$4">
              You can review your provided information and make changes if needed, or proceed as it is.
            </Text>
          </ModalBody>

          <ModalFooter>
            <HStack space="md" w="100%">
              <Button
                variant="outline"
                borderRadius="$full"
                borderColor="$black"
                flex={1}
                onPress={() => {
                  setShowModal(false);
                  navigation.navigate('Review');
                }}
              >
                <ButtonText color="$black">Review</ButtonText>
              </Button>

              <Button
                borderRadius="$full"
                bg="$black"
                flex={1}
                onPress={async () => {
                  setShowModal(false);
                  setModal(true);
                  await handleNoDocumentClick();
                }}
              >
                <ButtonText color="$white">No, I’m good</ButtonText>
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Success Modal */}
      <Modal isOpen={modal} onClose={() => setModal(false)}>
        <ModalBackdrop />
        <ModalContent
          borderTopLeftRadius="$2xl"
          borderTopRightRadius="$2xl"
          borderBottomLeftRadius="$none"
          borderBottomRightRadius="$none"
          alignItems="center"
        >
          <ModalBody mt="$6">
            <Center mb="$4">
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
                navigation.navigate('Details');
                setModal(false);
              }}
            >
              <ButtonText color="$white">Continue</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
