// import React from 'react';
// import { Box } from '@gluestack-ui/themed';
// import { Text } from 'react-native';

// export default function SettingsScreen() {
//   return (
//     <Box flex={1} justifyContent="center" alignItems="center">
//       <Text className="bg-red-500">Settings Screen</Text>
//     </Box>
//   );
// }

import React from 'react';
import { Text, Box } from '@gluestack-ui/themed'; // ✅ updated import

export default function SettingsScreen() {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text className="bg-red-500 text-white text-lg p-3 rounded-lg">
        Settings Screen
      </Text>
    </Box>
  );
}

