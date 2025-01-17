import { ChangeEvent } from 'react';

export interface IRegisterOneUIProps {
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePasswordConfirm: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeVeriCode: (e: ChangeEvent<HTMLInputElement>) => void;
  activePassedRegisterOne: () => void;
  onValidMail: () => void;
  nextRegister: () => void;
  onValidCode: () => void;
  email: string;
  passwordConfirm: string;
  isEmail: boolean;
  isPassword: boolean;
  isVeriCode: boolean;
  errorEmail: boolean;
  errorPassword: boolean;
  errorPasswordConfirm: boolean;
  errorVeriCode: boolean;
  activeOne: boolean;
  btnName: string;
  codeMsg: string;
}
