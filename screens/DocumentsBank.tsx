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
} from '@gluestack-ui/themed';
import * as DocumentPicker from 'expo-document-picker';
import { useNavigation } from '@react-navigation/native';
import { Center } from '@gluestack-ui/themed';

export default function DocumentsBank() {
  const navigation:any = useNavigation();
  const [statement, setStatement]:any = useState(null);
  const [cheque, setCheque] :any= useState(null);
 


  const pickDocument = async (type:any) => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['image/*', 'application/pdf'],
      });

      if (!result.canceled) {
        if (type === 'statement') {
          setStatement(result.assets[0]);
        } else {
          setCheque(result.assets[0]);
        }
      }
    } catch (err) {
      console.warn('Document pick error:', err);
    }
  };

  

  const isNextEnabled = statement || cheque;

  return (
    <Box flex={1} p="$5" pt="$7">
      <Box flex={1} >
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
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

          {/* Title */}
          <Text fontSize="$2xl" fontWeight="$bold" mb="$2">
            Upload any of the documents to verify your bank
          </Text>
          <Text fontSize="$sm" color="$textLight500" mb="$4">
            Accepted formats: JPG, PNG, JPEG, and PDF.
          </Text>

          {/* Identity Verification */}
          <Text fontWeight="$semibold" mb="$1">Bank Account Verification</Text>
          <HStack alignItems="center" mb="$2">
            <Badge bg="$amber200" borderRadius="$full" px="$2" py="$1">
              <BadgeText color="$amber800" fontSize="$xs">Pending</BadgeText>
            </Badge>
          </HStack>
          <Text fontSize="$sm" color="$textLight500" mb="$6">
            Upload a recent bank statement (Last 3 months) or a void/cancelled cheque.
          </Text>

          {/* Upload Options */}
          <VStack space="lg">
            <Pressable onPress={() => pickDocument('statement')}>
              <Text color="$green700" fontSize="$md">+ Bank Statement</Text>
              {statement && (
                <Text color="$textLight500" fontSize="$xs">
                  Uploaded: {statement.name}
                </Text>
              )}
            </Pressable>

            <Pressable onPress={() => pickDocument('cheque')}>
              <Text color="$green700" fontSize="$md">+ Void Cheque</Text>
              {cheque && (
                <Text color="$textLight500" fontSize="$xs">
                  Uploaded: {cheque.name}
                </Text>
              )}
            </Pressable>
          </VStack>
        </ScrollView>

        {/* Footer */}
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
            onPress={() => isNextEnabled && navigation.navigate("Congo")}
          >
            <ButtonText color="$white">Next</ButtonText>
          </Button>
        </HStack>
      </Box>


    </Box>




  );
}
