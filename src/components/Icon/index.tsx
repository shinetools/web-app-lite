import React, { FC } from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icons from 'assets/fonts/Icons.json';
import theme from 'Main/theme';

const IcomoonIcon = createIconSetFromIcoMoon(icons);

const Icon: FC<{ name: string; size?: -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 }> = ({
  size = 0,
  name,
  ...props
}) => <IcomoonIcon name={name} size={theme.texts.size(size + 1)} {...props} />;

export default Icon;
