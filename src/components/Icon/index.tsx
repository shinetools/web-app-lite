import React, { FC } from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icons from 'assets/fonts/Icons.json';
import theme from 'Main/theme';
import { IconProps } from './types';

const IcomoonIcon = createIconSetFromIcoMoon(icons);

const Icon: FC<IconProps> = ({ size = 0, name, ...props }) => (
  <IcomoonIcon name={name} size={theme.texts.size(size + 1)} {...props} />
);

export default Icon;
