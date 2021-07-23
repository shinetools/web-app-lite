import styled from "styled-components";

import { TextProps } from "./types";

const getColorVariant = (variant?: string): number => {
  switch (variant) {
    case "lighter":
      return 1;
    case "light":
      return 0;
    case "secondary":
      return -1;
    case "primary":
    default:
      return -2;
  }
};

const Text = styled.span<TextProps>`
  color: ${({ variant, theme }) => theme.colors.grey(getColorVariant(variant))};
  line-height: ${({ size = 0, theme }) => theme.texts.lineHeight(size)}px;
  font-size: ${({ size = 0, theme }) => theme.texts.size(size)}px;
  font-weight: ${({ weight = "regular" }) => (weight === "medium" ? 500 : 400)};
`;

export default Text;
