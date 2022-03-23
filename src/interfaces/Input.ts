import { KeyboardEvent } from "react";

export interface IInput {
  id?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (event: KeyboardEvent) => void;
}

export interface ICheckBox {
  id?: string;
  label?: string;
  checked?: boolean;
  onChange: (value: boolean) => void;
}