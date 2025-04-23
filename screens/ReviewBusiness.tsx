
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

export default function ReviewBusiness() {
  const navigation:any = useNavigation();
  const [showModal, setShowModal] = useState(false);

  const companyWhat = useSelector((state: any) => state.business.companywhat);
  const orgType = useSelector((state: any) => state.business.businessType);

  const company = useSelector((state: any) => state.business.company);
const companyNumber = company?.companyNumber;
const legalName = company?.legalName;

const contact = useSelector((state: any) => state.business.contact);
const email = contact?.email;
const phone = contact?.phone;
const url = contact?.url;

const address = useSelector((state: any) => state.business.address);





  const handleConfirm = () => {
    setShowModal(true);
  };

  const handleContinue = () => {
    setShowModal(false);
    navigation.navigate('Details');
  };

  return (
    <Box flex={1} bg="$coolGray100" pt="$10">
      <ScrollView px="$4">
        {/* Header */}
        <HStack alignItems="center" mb="$4">
          <Pressable onPress={() => navigation.goBack()}>
            <Text fontSize="$lg" mr="$2">←</Text>
          </Pressable>
          <Text fontSize="$md" fontWeight="$medium" color="$gray700">Review Business</Text>
        </HStack>

        {/* Title */}
        <Text fontSize="$2xl" fontWeight="$bold" mb="$1">Review</Text>
        <Text fontSize="$sm" color="$gray500" mb="$5">
          Time to review before I submit this onboarding form.
        </Text>

        {/* Section: Owner Details */}
        <Text fontSize="$sm" fontWeight="$semibold" mb="$2">Business details</Text>
        <Box bg="$white" borderRadius="$lg" p="$4" mb="$4">
          <HStack justifyContent="space-between" mb="$2">
            <VStack>
              <Text fontSize="$md" color="$black">Company: {companyWhat} {orgType}</Text>
              <Text fontSize="$sm" color="$gray500">Company Number: {companyNumber}</Text>
              <Text fontSize="$sm" color="$gray500">Company Legal Number: {legalName}</Text>
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
              <Text fontSize="$sm" color="$gray700">{email}</Text>
              <Text fontSize="$sm" color="$gray700">{phone}</Text>
              <Text fontSize="$sm" color="$gray700">{url}</Text>
            </VStack>
            <Pressable onPress={() => navigation.navigate('EditContact')}>
            </Pressable>
          </HStack>
        </Box>

        {/* Section: Address */}
        <Text fontSize="$sm" fontWeight="$semibold" mb="$2">Address details</Text>
        <Box bg="$white" borderRadius="$lg" borderColor="$white" borderWidth={1} p="$4" mb="$6">
          <HStack justifyContent="space-between" alignItems="flex-start">
            <Text fontSize="$sm" color="$gray700" flexShrink={1}>
              {address.country} {address.postCode} {address.address1} {address.address2} {address.town} {address.county}
            </Text>
            <Pressable onPress={() => navigation.navigate('EditAddress')}>
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
