import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setContactDetails } from '../store/actions/ownerActions';
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
  Pressable,
} from '@gluestack-ui/themed';
import { customConfig } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { Image } from '@gluestack-ui/themed';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Define Zod schema for validation
const contactSchema = z.object({
  email: z
    .string()
    .nonempty('Email is required')
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .nonempty('Phone number is required')
    .regex(/^\d{10}$/, 'Please enter a valid phone number'),
});

const Contact = () => {
  const navigation:any = useNavigation();
  const dispatch = useDispatch();

  // Fetch contact details from Redux
  const contact = useSelector((state:any) => state.owner.contact);

  // Initialize react-hook-form with Zod resolver
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: '',
      phone: '',
    },
    mode: 'onTouched', // Validate on blur and change for better UX
  });

  // Prefill form with Redux contact details if available
  useEffect(() => {
    if (contact.email || contact.phone) {
      reset({
        email: contact.email || '',
        phone: contact.phone || '',
      });
    }
  }, [contact, reset]);

  // Handle form submission
  const onSubmit = (data:any) => {
    const contactDetails = {
      email: data.email,
      phone: data.phone,
    };

    // Dispatch to Redux
    dispatch(setContactDetails(contactDetails));
    console.log('Submitted Contact Details:', contactDetails);

    // Navigate to Address screen
    navigation.navigate('Address');
  };

  return (
    <GluestackUIProvider config={customConfig}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Box bg="$white" flex={1} p="$4">
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
          <VStack space="xs" mb="$6">
            <Text fontSize="$sm" fontWeight="$medium">Email ID</Text>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input 
                  variant="underlined" 
                  size="md"
                  borderColor={errors.email ? '$red500' : '$borderLight300'}
                >
                  <InputField
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="Email ID"
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </Input>
              )}
            />
            {errors.email && (
              <Text fontSize="$xs" color="$red500" mt="$1">
                {errors.email.message}
              </Text>
            )}
          </VStack>

          {/* Phone Number Input */}
          <VStack space="xs" mb="$8">
            <Text fontSize="$sm" fontWeight="$medium">Phone number</Text>
            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input 
                  variant="underlined" 
                  size="md" 
                  borderColor={errors.phone ? '$red500' : '$borderLight300'}
                >
                  <InputField
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="Phone number"
                    keyboardType="phone-pad"
                  />
                </Input>
              )}
            />
            {errors.phone && (
              <Text fontSize="$xs" color="$red500" mt="$1">
                {errors.phone.message}
              </Text>
            )}
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
              flex={1}
              bg={isValid ? '$black' : '$coolGray300'}
              borderRadius="$full"
              onPress={handleSubmit(onSubmit)}
              disabled={!isValid}
              opacity={isValid ? 1 : 0.7}
            >
              <ButtonText 
                fontWeight="$medium" 
                color={isValid ? '$white' : '$coolGray500'}
              >
                Next
              </ButtonText>
            </Button>
          </HStack>
        </Box>
      </ScrollView>
    </GluestackUIProvider>
  );
};

export default Contact;