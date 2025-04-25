import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { Box, Text, VStack, HStack, Pressable, Button, ScrollView } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { useOwnerApi } from '../hooks/useOwnerApi';
import { useCompanyApi } from '../hooks/useCompanyApi';
import { useTradingApi } from '../hooks/useTradingApi';
import { useBankApi } from '../hooks/useBankApi';

const onboardingData = [
  {
    icon: require('../assets/images/account_box.png'),
    title: 'Owner details',
    description: 'Includes name, address, contact, and identity proof.',
    route: 'OwnerDetails',
    key: 'owner', 
  },
  {
    icon: require('../assets/images/cases.png'),
    title: 'Business details',
    description: 'Includes business type, contact, address, proof of business, etc.',
    route: 'BusinessDetails',
    key: 'business',
  },
  {
    icon: require('../assets/images/store.png'),
    title: 'Trading information',
    description: 'Includes trading name, address, and related details.',
    route: 'TradingInfo',
    key: 'trading',
  },
  {
    icon: require('../assets/images/account_balance.png'),
    title: 'Bank details',
    description: 'Includes account number, bank name, and related information.',
    route: 'BankDetails',
    key: 'bank',
  },
];

export default function DetailsScreen() {
  const navigation: any = useNavigation();
  const { getOwnerDetails } = useOwnerApi();
  const {getCompanyDetails}=useCompanyApi()
  const {getTradingDetails}=useTradingApi()
  const {getBankDetails}=useBankApi()


  const [ownerStatus, setOwnerStatus] = useState<'pending' | 'inProgress'>('pending');
  const [companyStatus, setCompanyStatus] = useState<'pending' | 'inProgress'>('pending');
  const [tradingStatus, setTradingtatus] = useState<'pending' | 'inProgress'>('pending');
  const [bankingStatus, setBankingtatus] = useState<'pending' | 'inProgress'>('pending');


  const ownerId = 62;
  const companyId=22;
  const tradeID=18;
  const bankID=18;



  // useEffect(() => {
  //   const fetchOwner = async () => {
  //     try {
  //       const data = await getOwnerDetails(ownerId);
  //       // console.log('Fetched owner data:', data); 

  //       if (data?.ok && data?.status===200) {
  //         setOwnerStatus('inProgress');
  //       }
  //     } catch (error) {
  //       // console.error('Error fetching owner details:', error);
  //     }
  //   };

  //   fetchOwner();
  // }, []);


  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const ownerData = await getOwnerDetails(ownerId);
        console.log('Owner data:', ownerData);
  
        if (ownerData?.flag == 1) {
          setOwnerStatus('inProgress');
        }
  
        const companyData = await getCompanyDetails(companyId);
        console.log('Company data:', companyData);
  
        if (companyData?.flag == 1) {
          setCompanyStatus('inProgress');
        }

        const traddingData = await getTradingDetails(tradeID);
        console.log('trading data:', traddingData);
  
        if (traddingData?.flag == 1) {
          setTradingtatus('inProgress');
        }

        const bankData=await getBankDetails(bankID);
        console.log('banking data:', bankData);


        if (bankData.data?.flag == 1) {
          setBankingtatus('inProgress');
        }

      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };
  
    fetchDetails();
  }, []);
  
  const getStatusLabel = (stepKey: string) => {
    if (stepKey === 'owner') {
      return ownerStatus === 'inProgress' ? 'Verification in progress' : 'Pending';
    }
    if (stepKey === 'business') {
      return companyStatus === 'inProgress' ? 'Verification in progress' : 'Pending';
    }
    if (stepKey === 'trading') {
      return tradingStatus === 'inProgress' ? 'Verification in progress' : 'Pending';
    }
    if (stepKey === 'bank') {
      return bankingStatus === 'inProgress' ? 'Verification in progress' : 'Pending';
    }
    return 'Pending';
  };

  const getStatusColor = (stepKey: string) => {
    if ((stepKey === 'owner' && ownerStatus === 'inProgress') ||
        (stepKey === 'business' && companyStatus === 'inProgress') ||
        (stepKey === 'trading' && tradingStatus === 'inProgress')||
        (stepKey === 'bank' && bankingStatus === 'inProgress'))

         {
      return '$green';
    }
    return '$amber600';
  };

  const getStatusBg = (stepKey: string) => {
    if ((stepKey === 'owner' && ownerStatus === 'inProgress') ||
        (stepKey === 'business' && companyStatus === 'inProgress')||
        (stepKey === 'trading' && tradingStatus === 'inProgress') ||
        (stepKey === 'bank' && bankingStatus === 'inProgress')) {
      return '$green100';
    }
    return '$amber100';
  };

  const ownerverification = getStatusLabel("owner") === 'Verification in progress';

  return (
    <Box flex={1} bg="$white" pt="$8" px="$4">
      <ScrollView>

        {/* Back button and title */}
        <HStack alignItems="center" mt="$3" mb="$6">
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/images/arrow_forward.png')}
              style={{ width: 20, height: 20, marginRight: 8 }}
            />
          </Pressable>
          <Text fontSize="$lg" fontWeight="$medium">Onboarding</Text>
        </HStack>

        <Text fontSize="$xl" fontWeight="$bold" mb="$2">
          Complete Onboarding
        </Text>
        <Text fontSize="$sm" color="$textLight500" mb="$6">
          Onboarding is an essential step to activate my Datman account for accepting payments and receiving payouts.
        </Text>

        {/* Card List */}
        <VStack space="md">
       
           {onboardingData.map((item, idx) => {
        const isVerificationInProgress = getStatusLabel(item.key) === 'Verification in progress';
        const isOwnerStep = item.key === 'owner';
        const isDisabledowner = isVerificationInProgress && isOwnerStep;
        const isVerificationInProgressbusiness = getStatusLabel(item.key) === 'Verification in progress';
        const isBusinessStep = item.key === 'business';
        const isDisabledbusiness = isVerificationInProgressbusiness && isBusinessStep;
        // const isVerificationInProgresstrade = getStatusLabel(item.key) === 'Verification in progress';
        // const isBusinessStep = item.key === 'business';
        // const isDisabledbusiness = isVerificationInProgresstrade && isBusinessStep;

        return (
          <Pressable
            key={idx}
            onPress={() => {
              if (!isDisabledowner && !isDisabledbusiness) {
                navigation.navigate(item.route);
              }
            }}
          >
            <Box
              borderWidth={1}
              borderColor="$borderLight300"
              borderRadius="$xl"
              p="$4"
              bg="$white"
              shadowColor="rgba(0, 0, 0, 0.05)"
              shadowOpacity={0.1}
              mb="$4"
            >
              <HStack space="md" alignItems="flex-start">
                <Image source={item.icon} style={{ height: 22, marginTop: 4 }} />
                <VStack flex={1}>
                  <Text fontSize="$md" fontWeight="$semibold" mb="$1">
                    {item.title}
                  </Text>
                  <Text fontSize="$sm" color="$textLight500">
                    {item.description}
                  </Text>
                  <Box
                    alignSelf="flex-start"
                    bg={getStatusBg(item.key)}
                    px="$3"
                    py="$1"
                    borderRadius="$full"
                    mt="$2"
                  >
                    <Text fontSize="$xs" color={getStatusColor(item.key)}>
                      {getStatusLabel(item.key)}
                    </Text>
                  </Box>
                </VStack>
              </HStack>
            </Box>
          </Pressable>
        );
      })}
        </VStack>
      </ScrollView>

      {/* Bottom Buttons */}
      <HStack mt="$6" mb="$4" space="md" justifyContent="space-between">
        <Button
          variant="outline"
          borderColor="$borderLight400"
          flex={1}
          borderRadius="$full"
          onPress={() => navigation.goBack()}
        >
          <Text fontSize="$md" fontWeight="$medium">Later</Text>
        </Button>
        <Button
          variant="outline"
          borderColor="$black"
          bgColor="$black"
          flex={1}
          borderRadius="$full"
          onPress={() => console.log('Next')}
        >
          <Text fontSize="$md" color="$white" fontWeight="$medium">Next</Text>
        </Button>
      </HStack>
    </Box>
  );
}
