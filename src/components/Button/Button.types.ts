export interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  to?: string;
}
