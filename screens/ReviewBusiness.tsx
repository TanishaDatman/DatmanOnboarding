
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

export default function ReviewBusiness() {
  const navigation:any = useNavigation();
  const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {
    setShowModal(true);
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
          <Text fontSize="$md" fontWeight="$medium" color="$gray700">Review Business</Text>
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
              <Text fontSize="$md" color="$black">John Stark</Text>
              <Text fontSize="$sm" color="$gray500">01/11/1993</Text>
              <Text fontSize="$sm" color="$gray500">British</Text>
            </VStack>
            <Pressable onPress={() => navigation.navigate('EditOwner')}>
              <Text color="$green600" fontWeight="$semibold">Edit</Text>
            </Pressable>
          </HStack>
        </Box>

        {/* Section: Contact Details */}
        <Text fontSize="$sm" fontWeight="$semibold" mb="$2">Contact details</Text>
        <Box bg="$white" borderRadius="$lg" p="$4" mb="$4">
          <HStack justifyContent="space-between" mb="$2">
            <VStack>
              <Text fontSize="$sm" color="$gray700">starkjohn@gmail.com</Text>
              <Text fontSize="$sm" color="$gray700">+44 8829012003</Text>
            </VStack>
            <Pressable onPress={() => navigation.navigate('EditContact')}>
              <Text color="$green600" fontWeight="$semibold">Edit</Text>
            </Pressable>
          </HStack>
        </Box>

        {/* Section: Address */}
        <Text fontSize="$sm" fontWeight="$semibold" mb="$2">Contact details</Text>
        <Box bg="$white" borderRadius="$lg" borderColor="$blue500" borderWidth={1} p="$4" mb="$6">
          <HStack justifyContent="space-between" alignItems="flex-start">
            <Text fontSize="$sm" color="$gray700" flexShrink={1}>
              57 Winston road, Vale of Glamorgan, Barry, CF6 9ST, United Kingdom
            </Text>
            <Pressable onPress={() => navigation.navigate('EditAddress')}>
              <Text color="$green600" fontWeight="$semibold">Edit</Text>
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
