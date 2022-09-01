export interface IButtons {
  type: string,
  bgColor?: string,
  fgColor?: string,
};

export interface IUserData {
  password?: string,
  password_confirmation?: string,
  email?: string,
  confirmation_code?: string,
};

export type TNavigation = {
  navigate: (value: string) => void;
};