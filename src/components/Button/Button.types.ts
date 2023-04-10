import { ThemeType } from 'src/theme/index';

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  to?: string;
}

export interface StyledLinkProps {
  theme?: ThemeType;
}
