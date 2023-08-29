import type {
  ButtonSize,
  ButtonRadius,
  ButtonLoadingPosition,
  ButtonVariant,
  ButtonPalette,
} from '@2e32/react-button';

export const sizes: ButtonSize[] = ['sm', 'md', 'lg'];

export const radiuses: ButtonRadius[] = ['none', 'sm', 'md', 'lg', 'xl'];

export const loadingPositions: ButtonLoadingPosition[] = ['left', 'center', 'right'];

export const variants: ButtonVariant[] = ['filled', 'light', 'outlined', 'text', 'link'];

export const palettes: ButtonPalette[] = [
  'primary',
  'secondary',
  'success',
  'warning',
  'error',
  'info',
  'dark',
];
