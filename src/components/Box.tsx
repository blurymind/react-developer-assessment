import React, { ReactNode, FC } from 'react';
import styled from 'styled-components';
import {
  layout,
  space,
  position,
  flexbox,
  typography,
  border,
  color,
  grid,
  LayoutProps,
  PositionProps,
  FlexboxProps,
  TypographyProps,
  SpaceProps,
  BorderProps,
  ColorProps,
  GridProps,
} from 'styled-system';

export interface Props
  extends PositionProps,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    TypographyProps,
    BorderProps,
    ColorProps,
    GridProps {
  children?: ReactNode;
  as?: string | keyof JSX.IntrinsicElements | React.ComponentType<any>;
  src?: string;
  onClick?: () => void;
  title?: string;
}

const Box = styled.div<Props>`
  ${position}
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${grid}
  ${typography}
  ${border}
`;

const BoxComponent: FC<Props> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};

export default BoxComponent;
