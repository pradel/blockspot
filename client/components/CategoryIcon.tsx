import * as React from 'react';
import { IconBaseProps } from 'react-icons';
import {
  MdLocalBar,
  MdRestaurant,
  MdLocalGroceryStore,
  MdMoreHoriz,
} from 'react-icons/md';

interface Props {
  category: string;
}

export const CategoryIcon: React.SFC<Props & IconBaseProps> = ({
  category,
  ...props
}) => {
  let Icon;
  switch (category) {
    case 'bar':
      Icon = MdLocalBar;
      break;
    case 'restaurant':
      Icon = MdRestaurant;
      break;
    case 'shop':
      Icon = MdLocalGroceryStore;
      break;
    default:
      Icon = MdMoreHoriz;
      break;
  }
  return <Icon {...props} />;
};
