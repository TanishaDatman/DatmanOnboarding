import React, { useState } from 'react';
import { 
  VStack, 
  Text, 
  RadioGroup, 
  Radio, 
  RadioIndicator,
  RadioIcon,
  RadioLabel,
  CircleIcon,
  Box,
  Button,
  Pressable
} from '@gluestack-ui/themed';
import { HStack } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { Image } from '@gluestack-ui/themed';
import {setBusinessType} from "../store/actions/bussinessActions"
import { useDispatch } from 'react-redux';


const organisationOptions = [
  { value: 'association', label: 'Association Incorporated' },
  { value: 'governmental', label: 'Governmental Organisation' },
  { value: 'nonprofit', label: 'Non Profit' },
  { value: 'partnership', label: 'Partnership Incorporated' },
  { value: 'private', label: 'Private Company' },
];

const OrganisationType = () => {
  const [selectedValue, setSelectedValue] = useState('private');
  const navigation:any=useNavigation()
  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    dispatch(setBusinessType(data));
      navigation.navigate("Company");
    };

  return (
    <Box flex={1} px="$4" py="$6" bg="$backgroundLight0">
      <VStack space="lg">
       <HStack alignItems="center" mt="$3">
               <Pressable onPress={() => navigation.goBack()}>
                 <Image
                   source={require('../assets/images/arrow_forward.png')} 
                   style={{ width: 20, height: 20, marginRight: 8 }}
                   alt="back button"
                 />
               </Pressable>
               <Text fontSize="$lg" fontWeight="$medium">Business Details</Text>
             </HStack>
        <Text fontSize="$xl" marginTop="$2" fontWeight="$bold">
          Choose your organisation type
        </Text>
        
        <Text color="$textLight500" fontSize="$sm">
          This helps us determine the documents required to activate your account.
        </Text>

        <RadioGroup 
          value={selectedValue} 
          onChange={setSelectedValue}
          mt="$2"
          mb="$5"
        >
          {organisationOptions.map((option) => (
            <Radio 
              key={option.value}
              value={option.value}
              aria-label={option.label}
              alignItems="flex-start"
              p="$2"
            >
              <RadioIndicator mr="$2" $checked={{
          borderColor: "$green", 
          bg: "$green"         
        }}>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel fontSize="$md">{option.label}</RadioLabel>
            </Radio>
          ))}
        </RadioGroup>
      </VStack>
      <HStack space="md" mt="$8" justifyContent="space-between">
                      <Button
                        variant="outline"
                        flex={1}
                        borderRadius="$full"
                        borderColor="$black"
                        onPress={() => navigation.goBack()}
                      >
                        <Text fontWeight="$medium" color="$black">Later</Text>
                      </Button>
                      <Button
                        flex={1}
                        bg="$black"
                        borderRadius="$full"
                        // onPress={() => navigation.navigate("Company")}
                        onPress={onSubmit}

                      >
                        <Text fontWeight="$medium" color="$white">Next</Text>
                      </Button>
                    </HStack>
    </Box>

  );
};

export default OrganisationType;