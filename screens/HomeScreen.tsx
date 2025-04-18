// screens/HomeScreen.tsx
import React from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  Progress,
  ProgressFilledTrack,
  Divider,
  Button,
  ButtonText,
  Badge,
  BadgeText,
  ScrollView,
} from '@gluestack-ui/themed';
import { AlertCircle, Phone, Clock, ArrowUpRight } from 'lucide-react-native';
// import { AlertCircle, Phone, Clock, ArrowUpRight } from 'lucide-react';

export default function HomeScreen() {
  return (
    <ScrollView bg="$white" flex={1} p="$4">
      <VStack space="md">
        <Text fontSize="$xl" marginTop="$20" fontWeight="$bold">
          John's Takeaway
        </Text>

        <Box bg="$blue50" p="$4" borderRadius="$md">
          <Text fontSize="$sm" color="$blue800">
            Hey John,
          </Text>
          <Text fontSize="$sm" color="$blue800">
            Here's the latest update on your store.
          </Text>
        </Box>

        <VStack space="sm">
          <Text fontSize="$lg" fontWeight="$bold">
            Available balance
          </Text>
          <Text fontSize="$3xl" fontWeight="$bold">
            $0.00
          </Text>
          <Button size="sm" variant="link" alignSelf="flex-start">
            <ButtonText fontSize="$sm" color="$blue600">
              Complete the onboarding verification to withdraw money.
            </ButtonText>
          </Button>
        </VStack>

        <VStack space="sm">
          <HStack justifyContent="space-between" alignItems="center">
            <Text fontSize="$sm">Verification progress</Text>
            <Text fontSize="$sm" fontWeight="$bold">
              25%
            </Text>
          </HStack>
          <Progress value={25} h="$1">
            <ProgressFilledTrack h="$1" />
          </Progress>
        </VStack>

        <Divider my="$2" />

        <HStack justifyContent="space-between">
          <VStack space="sm" alignItems="center">
            <Box bg="$blue100" p="$2" borderRadius="$full">
              <Clock size={20} color="#0066CC" />
            </Box>
            <Text fontSize="$sm">Last payout</Text>
          </VStack>

          <VStack space="sm" alignItems="center">
            <Box bg="$blue100" p="$2" borderRadius="$full">
              <AlertCircle size={20} color="#0066CC" />
            </Box>
            <Text fontSize="$sm">Alerts</Text>
          </VStack>

          <VStack space="sm" alignItems="center">
            <Box bg="$blue100" p="$2" borderRadius="$full">
              <Phone size={20} color="#0066CC" />
            </Box>
            <Text fontSize="$sm">Call status</Text>
          </VStack>

          <VStack space="sm" alignItems="center">
            <Box bg="$blue100" p="$2" borderRadius="$full">
              <ArrowUpRight size={20} color="#0066CC" />
            </Box>
            <Text fontSize="$sm">Recent Payments</Text>
          </VStack>
        </HStack>
      </VStack>
    </ScrollView>
  );
}