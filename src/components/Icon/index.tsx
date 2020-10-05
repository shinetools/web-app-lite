import React, { FC } from "react";
import IcomoonIcon from "icomoon-react";
import icons from "./icons.json";
import theme from "../../common/theme";

const iconStyle = { verticalAlign: "-10%" };

const Icon: FC<{ name: string; size?: -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 }> = ({
  size = 0,
  name,
  ...props
}) => (
  <IcomoonIcon
    iconSet={icons}
    icon={name}
    size={theme.texts.size(size + 1)}
    color="currentColor"
    style={iconStyle}
    {...props}
  />
);

export default Icon;
