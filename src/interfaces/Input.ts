import { KeyboardEvent, ReactNode } from "react";

export interface IInput {
  id?: string;
  placeholder?: string | ReactNode;
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (event: KeyboardEvent) => void;
}

export interface ICheckBox {
  id?: string;
  label?: string | ReactNode;
  checked?: boolean;
  onChange: (value: boolean) => void;
}