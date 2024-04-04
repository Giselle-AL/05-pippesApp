export enum Color{
  red,
  blue,
  green,
  yellow,
  black,
  white,
  orange,
  pink
}

export interface Hero {
  name:   string;
  CanFLy: boolean;
  color:  Color;
}
