import React, { useState } from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  Pressable,
  Button,
  ButtonText,
  ScrollView,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
  Center,
  Image,
} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useOwnerApi } from '../hooks/useOwnerApi';


export default function Review() {
  const navigation:any = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const { postOwnerDetails } = useOwnerApi();


  const ownerDetails = useSelector((state: any) => state.owner.owner); 
  const ownerContact = useSelector((state: any) => state.owner.contact); 
  const ownerAddress = useSelector((state: any) => state.owner.address); 




  const handleConfirm = async () => {
    try {
      const combinedDetails = {
        ...ownerDetails,
        ...ownerContact,
        ...ownerAddress,
      };
      
      await postOwnerDetails(combinedDetails);
      setShowModal(true); // Show success modal
    } catch (error) {
      console.error("Failed to post owner details:", error);
      // Optionally show an error alert here
    }
  };
  

  const handleContinue = () => {
    setShowModal(false);
    navigation.navigate('Details'); // Replace with actual next screen
  };

  return (
    <Box flex={1} bg="$coolGray100" pt="$10">
      <ScrollView px="$4">
        {/* Header */}
        <HStack alignItems="center" mb="$4">
          <Pressable onPress={() => navigation.goBack()}>
            <Text fontSize="$lg" mr="$2">←</Text>
          </Pressable>
          <Text fontSize="$md" fontWeight="$medium" color="$gray700">Review</Text>
        </HStack>

        {/* Title */}
        <Text fontSize="$2xl" fontWeight="$bold" mb="$1">Review</Text>
        <Text fontSize="$sm" color="$gray500" mb="$5">
          Time to review before I submit this onboarding form.
        </Text>

        {/* Section: Owner Details */}
        <Text fontSize="$sm" fontWeight="$semibold" mb="$2">Owner details</Text>
        <Box bg="$white" borderRadius="$lg" p="$4" mb="$4">
          <HStack justifyContent="space-between" mb="$2">
            <VStack>
              <Text fontSize="$md" color="$black">{ownerDetails?.title} {ownerDetails?.firstName} {ownerDetails?.lastName}
              </Text>
              <Text fontSize="$sm" color="$gray500">{ownerDetails?.dob}</Text>
              <Text fontSize="$sm" color="$gray500">{ownerDetails?.nationality}</Text>
            </VStack>
            <Pressable onPress={() => navigation.navigate('EditOwner')}>
              {/* <Text color="$green600" fontWeight="$semibold">Edit</Text> */}
            </Pressable>
          </HStack>
        </Box>

        {/* Section: Contact Details */}
        <Text fontSize="$sm" fontWeight="$semibold" mb="$2">Contact details</Text>
        <Box bg="$white" borderRadius="$lg" p="$4" mb="$4">
          <HStack justifyContent="space-between" mb="$2">
            <VStack>
              <Text fontSize="$sm" color="$gray700">{ownerContact?.email}</Text>
              <Text fontSize="$sm" color="$gray700">{ownerContact?.phone}</Text>
            </VStack>
            <Pressable onPress={() => navigation.navigate('EditContact')}>
              {/* <Text color="$green600" fontWeight="$semibold">Edit</Text> */}
            </Pressable>
          </HStack>
        </Box>

        {/* Section: Address */}
        <Text fontSize="$sm" fontWeight="$semibold" mb="$2">Contact details</Text>
        <Box bg="$white" borderRadius="$lg" borderColor="$blue500" borderWidth={1} p="$4" mb="$6">
          <HStack justifyContent="space-between" alignItems="flex-start">
            <Text fontSize="$sm" color="$gray700" flexShrink={1}>
            {ownerAddress.houseNo} {ownerAddress.street} {ownerAddress.postCode} {ownerAddress.town} {ownerAddress.county} {ownerAddress.country}
            </Text>
            <Pressable onPress={() => navigation.navigate('EditAddress')}>
              {/* <Text color="$green600" fontWeight="$semibold">Edit</Text> */}
            </Pressable>
          </HStack>
        </Box>

        {/* Confirm Button */}
        <Button bg="$black" borderRadius="$full" size="lg" onPress={handleConfirm}>
          <ButtonText color="$white" fontWeight="$semibold">Confirm</ButtonText>
        </Button>

        <Box h="$10" />
      </ScrollView>

      {/* Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ModalBackdrop />
        <ModalContent borderTopLeftRadius="$2xl"
    borderTopRightRadius="$2xl"
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
            <Button flex={1} bg="$black" borderRadius="$full" onPress={handleContinue}>
              <ButtonText color="$white">Continue</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}





