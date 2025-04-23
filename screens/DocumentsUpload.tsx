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
        <HStack alignItems="center" mt="$3" mb="$6">
         <Pressable onPress={() => navigation.goBack()}>
           <Image
             source={require('../assets/images/arrow_forward.png')} // Make sure this image exists
             style={{ width: 20, height: 20, marginRight: 8 }}
             alt="back button"
           />
         </Pressable>
         <Text fontSize="$lg" fontWeight="$medium">Upload Documents</Text>
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
                onPress={async() => {
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
                // await handleNoDocumentClick();

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
