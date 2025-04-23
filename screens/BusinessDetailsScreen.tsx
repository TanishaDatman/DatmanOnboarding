import React, { useState } from 'react';
import { VStack, Text, Pressable, Box, HStack, Icon, ScrollView } from '@gluestack-ui/themed';
import { CheckCircle, Home, Store, Users, Grid } from 'lucide-react-native';
import { Button } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { Image } from '@gluestack-ui/themed';
import { useDispatch } from 'react-redux';
import { setwhatbusiness } from '../store/actions/bussinessActions';

const businessOptions = [
  {
    id: 'sole_trader',
    label: 'Sole Trader',
    description: 'A self-employed individual running a business.',
    icon: <Home size={20} />,
  },
  {
    id: 'limited_llp',
    label: 'Limited/LLP',
    description: 'A registered company with limited liability protection.',
    icon: <Store size={20} />,
  },
  {
    id: 'partnership',
    label: 'Partnership',
    description: 'A business owned and operated by two or more individuals.',
    icon: <Users size={20} />,
  },
  {
    id: 'others',
    label: 'Others',
    description: 'Any business type that doesn’t fall into the above categories.',
    icon: <Grid size={20} />,
  },
];




const BusinessDetailsScreen = () => {
  const [selected, setSelected] = useState<string>('limited_llp');
  const navigation:any=useNavigation()
  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    dispatch(setwhatbusiness({
      id: selected,
    }));      navigation.navigate("Organization");
    };

  return (
    
    <VStack flex={1} px="$4" py="$6" bg="$backgroundLight0" space="lg">
      <ScrollView>
        <HStack alignItems="center" mt="$3" mb="$3">
                <Pressable onPress={() => navigation.goBack()}>
                  <Image
                    source={require('../assets/images/arrow_forward.png')} // Make sure this image exists
                    style={{ width: 20, height: 20, marginRight: 8 }}
                    alt="back button"
                  />
                </Pressable>
                <Text fontSize="$lg" fontWeight="$medium">Business Details</Text>
              </HStack>
      <Text fontSize="$xl" fontWeight="$bold">Which best describes your business?</Text>
      <Text color="$textLight500" fontSize="$sm">
        This helps us determine the documents required to activate your account and process payouts smoothly.
      </Text>

      <VStack space="md" mt="$4">
        {businessOptions.map((option) => (
          <Pressable
            key={option.id}
            onPress={() => setSelected(option.id)}
          >
            <Box
              borderWidth={1}
              borderColor={selected === option.id ? '$green' : '$borderLight200'}
              bg="$white"
              rounded="$lg"
              p="$4"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <HStack space="md" alignItems="center">
                {option.icon}
                <VStack>
                  <Text fontWeight="$medium">{option.label}</Text>
                  <Text fontSize="$sm" color="$textLight500">{option.description}</Text>
                </VStack>
              </HStack>
              {selected === option.id && (
                <Icon as={CheckCircle} color="$green" size="md" />
              )}
            </Box>
          </Pressable>
        ))}
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
                  // onPress={() => navigation.navigate("Organization")}
                  onPress={onSubmit}

                >
                  <Text fontWeight="$medium" color="$white">Next</Text>
                </Button>
              </HStack>
              </ScrollView>
    </VStack>

  );
};

export default BusinessDetailsScreen;
