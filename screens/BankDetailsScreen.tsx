import React, { useEffect } from 'react';
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
  Pressable,
  Image,
} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useDispatch, useSelector } from 'react-redux';
import { setBankDetails } from '../store/features/bank/bankSlice';

const BankDetailsSchema = z
  .object({
    accountHolderName: z.string().min(4, 'Account holder name is required'),
    sortCode: z
      .string()
      .regex(/^\d{6}$/, 'Sort code must be exactly 6 digits'),
    accountNumber: z
      .string()
      .min(8, 'Account number must be at least 8 digits')
      .max(18, 'Account number can be a maximum of 18 digits')
      .regex(/^\d+$/, 'Account number must be numeric'),
    confirmAccountNumber: z.string().min(1, 'Confirm account number'),
  })
  .refine((data) => data.accountNumber === data.confirmAccountNumber, {
    message: 'Account numbers do not match',
    path: ['confirmAccountNumber'],
  });

type BankDetailsFormData = z.infer<typeof BankDetailsSchema>;

const BankDetailsScreen = () => {
  const navigation: any = useNavigation();
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<BankDetailsFormData>({
    resolver: zodResolver(BankDetailsSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: BankDetailsFormData) => {
    dispatch(
      setBankDetails({
        accountHolderName: data.accountHolderName,
        sortCode: data.sortCode,
        accountNumber: data.accountNumber,
        confirmAccountNumber: data.confirmAccountNumber,
      })
    );
    navigation.navigate('DocumentsBank');
  };

  const bankState = useSelector((state: any) => state.bank);

  useEffect(() => {
    console.log('Bank State:', bankState);
  }, [bankState]);

  return (
    <Box flex={1} bg="$backgroundLight0">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        p="$5"
        pt="$7"
        keyboardShouldPersistTaps="handled"
      >
        <VStack space="sm" mb="$6">
          <HStack alignItems="center" mt="$3" mb="$6">
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                source={require('../assets/images/arrow_forward.png')}
                style={{ width: 20, height: 20, marginRight: 8 }}
                alt="back button"
              />
            </Pressable>
            <Text fontSize="$lg" fontWeight="$medium">Bank Details</Text>
          </HStack>

          <Text fontSize="$xl" fontWeight="$semibold" color="$textDark800">
            Set up your payout(bank) account
          </Text>
          <Text fontSize="$sm" color="$textLight500">
            We need your bank details to ensure payouts are sent securely and on time. Providing this information helps avoid delays in receiving payments.
          </Text>
        </VStack>

        <VStack space="md" mb="$8">
          <VStack space="xs">
            <Controller
              control={control}
              name="accountHolderName"
              render={({ field: { onChange, value } }) => (
                <>
                  <Input variant="underlined">
                    <InputField
                      placeholder="Enter account holder name"
                      value={value}
                      onChangeText={onChange}
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  </Input>
                  {errors.accountHolderName && (
                    <Text color="$red600" fontSize="$xs">
                      {errors.accountHolderName.message}
                    </Text>
                  )}
                </>
              )}
            />
          </VStack>

          <VStack space="xs">
            <Controller
              control={control}
              name="sortCode"
              render={({ field: { onChange, value } }) => (
                <>
                  <Input variant="underlined">
                    <InputField
                      placeholder="Bank sort code"
                      value={value}
                      onChangeText={onChange}
                      keyboardType="numeric"
                    />
                  </Input>
                  {errors.sortCode && (
                    <Text color="$red600" fontSize="$xs">
                      {errors.sortCode.message}
                    </Text>
                  )}
                </>
              )}
            />
          </VStack>

          <VStack space="xs">
            <Controller
              control={control}
              name="accountNumber"
              render={({ field: { onChange, value } }) => (
                <>
                  <Input variant="underlined">
                    <InputField
                      placeholder="Account Number"
                      value={value}
                      onChangeText={onChange}
                      keyboardType="numeric"
                    />
                  </Input>
                  {errors.accountNumber && (
                    <Text color="$red600" fontSize="$xs">
                      {errors.accountNumber.message}
                    </Text>
                  )}
                </>
              )}
            />
          </VStack>

          <VStack space="xs">
            <Controller
              control={control}
              name="confirmAccountNumber"
              render={({ field: { onChange, value } }) => (
                <>
                  <Input variant="underlined">
                    <InputField
                      placeholder="Confirm Account Number"
                      value={value}
                      onChangeText={onChange}
                      keyboardType="numeric"
                    />
                  </Input>
                  {errors.confirmAccountNumber && (
                    <Text color="$red600" fontSize="$xs">
                      {errors.confirmAccountNumber.message}
                    </Text>
                  )}
                </>
              )}
            />
          </VStack>
        </VStack>
      </ScrollView>

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
          bg={isValid ? "$black" : "$coolGray300"}
          disabled={!isValid}
          onPress={handleSubmit(onSubmit)}
        >
          <ButtonText color="$white">Next</ButtonText>
        </Button>
      </HStack>
    </Box>
  );
};

export default BankDetailsScreen;