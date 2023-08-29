import { sizes, radiuses, loadingPositions, variants, palettes } from './consts';

import * as Icon from './assets/icons/svg';

const iconMap = {
  None: undefined,
  Add: <Icon.Add />,
  Minus: <Icon.Minus />,
  Delete: <Icon.Delete />,
  Download: <Icon.Download />,
  Eye: <Icon.Eye />,
  Refresh: <Icon.Refresh />,
  Cog: <Icon.Cog />,
  Copy: <Icon.ContentCopy />,
};

const iconControl = {
  control: 'select',
  options: Object.keys(iconMap), // Опции выпадающего списка
  mapping: iconMap, // Соответствие текста опции и значению пропа
};

export const controls = {
  style: {
    description: 'Стиль кнопки',
    control: 'object',
    table: { type: { summary: 'React.CSSProperties' } },
  },
  className: {
    description: 'CSS класс',
    control: 'text',
    table: { type: { summary: 'string' } },
  },
  color: {
    description: 'Цвет текста',
    control: 'color',
    table: { type: { summary: 'string' } },
  },
  background: {
    description: 'Цвет фона',
    control: 'color',
    table: { type: { summary: 'string' } },
  },
  disabled: {
    description: 'Кнопка отключена',
    control: 'boolean',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: false } },
  },
  block: {
    description: 'Кнопка занимает всю ширину контейнера',
    control: 'boolean',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: false } },
  },
  uppercase: {
    description: 'Текст кнопки в верхнем регистре (прописные буквы)',
    control: 'boolean',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: false } },
  },
  loading: {
    description: 'Кнопка в состоянии загрузки',
    control: 'boolean',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: false } },
  },
  loadingIcon: {
    description: 'Иконка индикатора загрузки',
    control: 'select',
    options: ['None', 'Dots', 'Text'],
    mapping: {
      None: undefined,
      Dots: <Icon.DotsLoader fill="#ff5252" width="24" height="24" />,
      Text: <b>Wait...</b>,
    },
    table: { type: { summary: 'React.ReactNode' } },
  },
  loadingPosition: {
    description: 'Позиция индикатора загрузки',
    control: 'inline-radio',
    options: loadingPositions,
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'center' },
    },
  },
  size: {
    description: 'Размер',
    control: 'inline-radio',
    options: sizes,
    table: { type: { summary: 'string' }, defaultValue: { summary: 'md' } },
  },
  radius: {
    description: 'Размер закругления углов',
    control: 'radio',
    options: radiuses,
    table: { type: { summary: 'string' }, defaultValue: { summary: 'md' } },
  },
  variant: {
    description: 'Вид кнопки',
    control: 'select',
    options: variants,
    table: { type: { summary: 'string' } },
  },
  palette: {
    description: 'Цветовая палитра',
    control: 'select',
    options: palettes,
    table: { type: { summary: 'string' } },
  },
  prependIcon: {
    description: 'Иконка перед основным содержимым кнопки',
    table: { type: { summary: 'React.ReactNode' } },
    ...iconControl,
  },
  appendIcon: {
    description: 'Иконка после основного содержимого кнопки',
    table: { type: { summary: 'React.ReactNode' } },
    ...iconControl,
  },
};
