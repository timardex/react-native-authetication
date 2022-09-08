import { IUserData } from "../model";

export const prettifyText = (text: string) => {
  const result = text.toLowerCase().split('_').map((item: string) => item.charAt(0).toUpperCase() + item.slice(1) + '');
  return result.toString().replace(/,/g, ' ');
};

export const validation = (element: IUserData) => {
  const { email, password } = element;
  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const validEmail = typeof email === 'undefined' || email === '' || !emailRegex.test(email);
  const validpassword = typeof password === 'undefined' || password === '' || password.length < 3;
  console.log(validEmail || validpassword)
}