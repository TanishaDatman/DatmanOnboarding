import React, { useState } from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  Button,
  ButtonText,
  Input,
  InputField,
  ScrollView,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  CheckIcon,
  Divider,
  Modal,
  ModalBody,
  Image,
} from '@gluestack-ui/themed';
import { ModalBackdrop } from '@gluestack-ui/themed';
import { ModalContent } from '@gluestack-ui/themed';
import { Center } from '@gluestack-ui/themed';
import { ModalFooter } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from '@gluestack-ui/themed';

const TradingInfoScreen = () => {
  const [isSameAsRegistered, setIsSameAsRegistered] = useState(true);
  const [tradingName, setTradingName] = useState('');
  const [postCode, setPostCode] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [townCity, setTownCity] = useState('');
  const [county, setCounty] = useState('');
  const [country, setCountry] = useState('');
  const [modal,setModal]=useState(false);
  const navigation:any=useNavigation()

  const isNextEnabled = (isSameAsRegistered && tradingName) || (
    tradingName &&
    postCode &&
    addressLine1 &&
    townCity &&
    county &&
    country
  );

  return (
    <Box flex={1} bg="$backgroundLight0">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} pt="$7" p="$5">
       <HStack alignItems="center" mt="$3" mb="$6">
                       <Pressable onPress={() => navigation.goBack()}>
                         <Image
                           source={require('../assets/images/arrow_forward.png')} // Make sure this image exists
                           style={{ width: 20, height: 20, marginRight: 8 }}
                           alt="back button"
                         />
                       </Pressable>
                       <Text fontSize="$lg" fontWeight="$medium">Trading Information</Text>
                     </HStack>
                     <Text fontSize="$xl" fontWeight="$bold" mb="$2">
          Trading Information
        </Text>
        {/* Description */}
        <Text color="$textLight500" fontSize="$sm" mb="$6">
          Provide us with the trading details of your business or select same as registered address if that applies.
        </Text>

        {/* Trading Name Section */}
        <VStack space="md" mb="$6">
          <Text fontSize="$lg" fontWeight="$semibold">Trading name</Text>
          <Input
          variant='underlined'>
            <InputField
              placeholder="Enter trading name"
              value={tradingName}
              onChangeText={setTradingName}
            />
          </Input>
        </VStack>

        {/* Address Toggle Section */}
        <VStack space="md" mb="$6">
          <Text fontSize="$sm">
            Is trading address the same as registered address?
          </Text>
          
          <Checkbox
            value="sameAddress"
            isChecked={isSameAsRegistered}
            onChange={(isSelected) => setIsSameAsRegistered(isSelected)}
            aria-label="Same as registered address"
          >
            <CheckboxIndicator mr="$2">
              {isSameAsRegistered && <CheckboxIcon as={CheckIcon} />}
            </CheckboxIndicator>
            <CheckboxLabel>Same as registered address</CheckboxLabel>
          </Checkbox>
        </VStack>

        {/* Address Form (only shown if toggle is off) */}
        {!isSameAsRegistered && (
          <VStack space="md" mb="$6">
            <Divider my="$2" />
            
            <Text fontSize="$lg" fontWeight="$semibold">Trading address</Text>
            
            <VStack space="sm">
              <Text fontSize="$sm">Post code</Text>
              <Input   variant='underlined'>
                <InputField
                  placeholder="Enter post code"
                  value={postCode}
                  onChangeText={setPostCode}
                />
              </Input>
            </VStack>

            <VStack space="sm">
              <Text fontSize="$sm">Address line 1</Text>
              <Input   variant='underlined'>
                <InputField
                  placeholder="Enter address line 1"
                  value={addressLine1}
                  onChangeText={setAddressLine1}
                />
              </Input>
            </VStack>

            <VStack space="sm">
              <Text fontSize="$sm">Address line 2 (optional)</Text>
              <Input   variant='underlined'>
                <InputField
                  placeholder="Enter address line 2"
                  value={addressLine2}
                  onChangeText={setAddressLine2}
                />
              </Input>
            </VStack>

            <VStack space="sm">
              <Text fontSize="$sm">Town/City</Text>
              <Input   variant='underlined'>
                <InputField
                  placeholder="Enter town/city"
                  value={townCity}
                  onChangeText={setTownCity}
                />
              </Input>
            </VStack>

            <VStack space="sm">
              <Text fontSize="$sm">County</Text>
              <Input   variant='underlined'>
                <InputField
                  placeholder="Enter county"
                  value={county}
                  onChangeText={setCounty}
                />
              </Input>
            </VStack>

            <VStack space="sm">
              <Text fontSize="$sm">Country</Text>
              <Input   variant='underlined'>
                <InputField
                  placeholder="Enter country"
                  value={country}
                  onChangeText={setCountry}
                />
              </Input>
            </VStack>
          </VStack>
        )}
      </ScrollView>

      {/* Footer Buttons */}
      <HStack p="$4" space="md" bg="$backgroundLight0">
        <Button
          variant="outline"
          flex={1}
          borderColor="$black"
          borderRadius="$full"
          onPress={() => navigation.goBack()}
        >
          <ButtonText color="$black">Later</ButtonText>
        </Button>

        <Button
          flex={1}
          borderRadius="$full"
          bg={isNextEnabled ? "$black" : "$coolGray300"}
          disabled={!isNextEnabled}
          onPress={() => isNextEnabled && setModal(true)}
        >
          <ButtonText color="$white">Next</ButtonText>
        </Button>
      </HStack>


      <Modal isOpen={modal} onClose={() => setModal(false)}>
              <ModalBackdrop />
              <ModalContent borderTopLeftRadius="$2xl"
        borderTopRightRadius="$2xl"
        borderBottomLeftRadius="$none"
        borderBottomRightRadius="$none"
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
                <Button 
        flex={1} 
        bg="$black" 
        borderRadius="$full"
        onPress={() => {
          navigation.navigate("Details");
          setModal(false); // Make sure to use setModal if that's your state setter
        }}
      >
        <ButtonText color="$white">Continue</ButtonText>
      </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
    </Box>
  );
};

export default TradingInfoScreen;



// import React from 'react';
// import {
//   Box,
//   Text,
//   VStack,
//   HStack,
//   Button,
//   ButtonText,
//   Input,
//   InputField,
//   ScrollView,
//   Checkbox,
//   CheckboxIndicator,
//   CheckboxIcon,
//   CheckboxLabel,
//   CheckIcon,
//   Divider,
//   Image,
//   Pressable
// } from '@gluestack-ui/themed';
// import { useForm, Controller } from 'react-hook-form';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useNavigation } from '@react-navigation/native';

// const schema = z.object({
//   tradingName: z.string().min(1, 'Trading name is required'),
//   isSameAsRegistered: z.boolean(),
//   postCode: z.string().optional(),
//   addressLine1: z.string().optional(),
//   addressLine2: z.string().optional(),
//   townCity: z.string().optional(),
//   county: z.string().optional(),
//   country: z.string().optional(),
// }).superRefine((data, ctx) => {
//   if (!data.isSameAsRegistered) {
//     if (!data.postCode?.trim()) {
//       ctx.addIssue({ path: ['postCode'], message: 'Post code is required', code: z.ZodIssueCode.custom });
//     }
//     if (!data.addressLine1?.trim()) {
//       ctx.addIssue({ path: ['addressLine1'], message: 'Address line 1 is required', code: z.ZodIssueCode.custom });
//     }
//     if (!data.townCity?.trim()) {
//       ctx.addIssue({ path: ['townCity'], message: 'Town/City is required', code: z.ZodIssueCode.custom });
//     }
//     if (!data.county?.trim()) {
//       ctx.addIssue({ path: ['county'], message: 'County is required', code: z.ZodIssueCode.custom });
//     }
//     if (!data.country?.trim()) {
//       ctx.addIssue({ path: ['country'], message: 'Country is required', code: z.ZodIssueCode.custom });
//     }
//   }
// });

// const TradingInfoScreen = () => {
//   const navigation: any = useNavigation();

//   const {
//     control,
//     handleSubmit,
//     watch,
//     formState: { errors, isValid },
//   } = useForm({
//     resolver: zodResolver(schema),
//     mode: 'onTouched',
//     defaultValues: {
//       tradingName: '',
//       isSameAsRegistered: true,
//       postCode: '',
//       addressLine1: '',
//       addressLine2: '',
//       townCity: '',
//       county: '',
//       country: '',
//     },
//   });

//   const isSameAsRegistered = watch('isSameAsRegistered');
//   const stringFields = ['postCode', 'addressLine1', 'addressLine2', 'townCity', 'county', 'country'] as const;

//   const onSubmit = (data: any) => {
//     console.log('Trading Info:', data);
//     navigation.navigate('Details'); // Adjust route name
//   };

//   return (
//     <Box flex={1} bg="$backgroundLight0">
//       <ScrollView contentContainerStyle={{ flexGrow: 1 }} pt="$7" pb="$8" p="$5">
//         <HStack alignItems="center" mt="$3" mb="$6">
//           <Pressable onPress={() => navigation.goBack()}>
//             <Image
//               source={require('../assets/images/arrow_forward.png')}
//               style={{ width: 20, height: 20, marginRight: 8 }}
//               alt="back button"
//             />
//           </Pressable>
//           <Text fontSize="$lg" fontWeight="$medium">Trading Information</Text>
//         </HStack>

//         <Text fontSize="$xl" fontWeight="$bold" mb="$2">Trading Information</Text>
//         <Text color="$textLight500" fontSize="$sm" mb="$6">
//           Provide us with the trading details of your business or select same as registered address if that applies.
//         </Text>

//         {/* Trading Name */}
//         <VStack space="xs" mb="$4">
//           <Text fontSize="$lg" fontWeight="$semibold">Trading name</Text>
//           <Controller
//             control={control}
//             name="tradingName"
//             render={({ field: { onChange, onBlur, value, ref } }) => (
//               <Input variant="underlined">
//                 <InputField
//                   ref={ref}
//                   placeholder="Enter trading name"
//                   onChangeText={onChange}
//                   onBlur={onBlur}
//                   value={value}
//                 />
//               </Input>
//             )}
//           />
//           {errors.tradingName && (
//             <Text fontSize="$xs" color="$red500">{errors.tradingName.message}</Text>
//           )}
//         </VStack>

//         {/* Checkbox */}
//         <VStack space="md" mb="$6">
//           <Text fontSize="$sm">Is trading address the same as registered address?</Text>
//           <Controller
//             control={control}
//             name="isSameAsRegistered"
//             render={({ field: { value, onChange } }) => (
//               <Checkbox value="isSameAsRegistered" isChecked={value} onChange={onChange}>
//                 <CheckboxIndicator mr="$2">
//                   {value && <CheckboxIcon as={CheckIcon} />}
//                 </CheckboxIndicator>
//                 <CheckboxLabel>Same as registered address</CheckboxLabel>
//               </Checkbox>
//             )}
//           />
//         </VStack>

//         {/* Conditional Address Fields */}
//         {!isSameAsRegistered && (
//           <>
//             <Divider my="$2" />
//             <Text fontSize="$lg" fontWeight="$semibold" mb="$4">Trading address</Text>

//             {stringFields.map((fieldName) => (
//               <VStack key={fieldName} space="xs" mb="$3">
//                 <Text fontSize="$sm" textTransform="capitalize">
//                   {fieldName.replace(/([A-Z])/g, ' $1')}
//                 </Text>
//                 <Controller
//                   control={control}
//                   name={fieldName}
//                   render={({ field: { onChange, onBlur, value, ref } }) => (
//                     <Input variant="underlined">
//                       <InputField
//                         ref={ref}
//                         placeholder={`Enter ${fieldName}`}
//                         onChangeText={onChange}
//                         onBlur={onBlur}
//                         value={value ?? ''}
//                       />
//                     </Input>
//                   )}
//                 />
//                 {errors[fieldName] && (
//                   <Text fontSize="$xs" color="$red500">
//                     {errors[fieldName]?.message?.toString()}
//                   </Text>
//                 )}
//               </VStack>
//             ))}
//           </>
//         )}

//         {/* Next Button */}
//         <HStack mt="$8">
//           <Button
//             flex={1}
//             borderRadius="$full"
//             onPress={handleSubmit(onSubmit)}
//             disabled={!isValid}
//             bg={isValid ? '$black' : '$coolGray300'}
//             opacity={isValid ? 1 : 0.7}
//           >
//             <ButtonText color={isValid ? '$white' : '$coolGray500'} fontWeight="$medium">
//               Next
//             </ButtonText>
//           </Button>
//         </HStack>
//       </ScrollView>
//     </Box>
//   );
// };

// export default TradingInfoScreen;
