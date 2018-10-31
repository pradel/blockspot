import * as React from 'react';
import { MapPinIcon } from '../icons';
import { CategoryIcon } from './CategoryIcon';

interface Props {
  category: string;
  height?: number;
  iconHeight?: number;
  style?: React.CSSProperties;
  pinStyle?: React.CSSProperties;
  onClick?: () => void;
}

export const CategoryPin: React.SFC<Props> = ({
  height,
  iconHeight,
  category,
  style,
  pinStyle,
  onClick,
}) => (
  <span
    style={{ position: 'relative', display: 'block', ...style }}
    onClick={onClick}
  >
    <MapPinIcon height={height} style={pinStyle} />
    <CategoryIcon
      size={iconHeight}
      category={category}
      color="#ffffff"
      style={{ position: 'absolute', top: 3, left: 5 }}
    />
  </span>
);
