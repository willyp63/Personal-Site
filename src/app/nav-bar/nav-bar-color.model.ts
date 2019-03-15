import { blackColor, whiteColor } from '@app/shared/utils/colors';

export interface NavBarColorInterface {
  hex: string;
  minScrollY: number;
}

export const NavBarColorsAllBlack = [{
  hex: blackColor,
  minScrollY: 0,
}];

export const NavBarColorsAllWhite = [{
  hex: whiteColor,
  minScrollY: 0,
}];
