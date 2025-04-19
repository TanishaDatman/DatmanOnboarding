import { createConfig } from '@gluestack-ui/themed';
import { config as defaultConfig } from '@gluestack-ui/config';

export const customConfig = createConfig({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    colors: {
      ...defaultConfig.tokens.colors,
      // Shared colors (same for both modes)
      primary: '#199F65',
      success: '#199F65',
      warning: '#DC9F37',
      error: '#D6270F',
      
      // Light mode colors
      text: '#151515',
      textSecondary: '#848484',
      textInactive: '#C9CACF',
      background: '#FFFFFF',
      backgroundSecondary: '#F3F4F7',
      backgroundTertiary: '#EDEDED',
      cardBackground: '#F3F4F7',
      successLight: '#EBF4EB',
      warningLight: '#F6EACB',
      errorLight: '#FBE8E5',
      divider: '#EDEDED',
      dividerSecondary: '#C9CACF',
    },
  },
  components: {
    ...defaultConfig.components,
    // Component-specific overrides can go here
  },
});

// Dark mode colors
export const darkColors = {
  ...customConfig.tokens.colors,
  text: '#FFFFFF',
  textSecondary: '#B4B4B4',
  textInactive: '#4E4E4E',
  background: '#151515',
  backgroundSecondary: '#202020',
  backgroundTertiary: '#292929',
  cardBackground: '#1C2C1B',
  successLight: '#1C2C1B',
  warningLight: '#4E3C0E',
  errorLight: '#350A03',
  divider: '#292929',
  dividerSecondary: '#4E4E4E',
};

export type CustomConfig = typeof customConfig;