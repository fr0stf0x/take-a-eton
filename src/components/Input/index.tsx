import React, { ChangeEvent, FC } from 'react'

import { IInput } from '@/interfaces/Input'

import { InputWrapper } from './styled'

const Input: FC<IInput> = ({ value, onChange, id, placeholder, onKeyDown }) => {
  const pOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  }

  return (
    <InputWrapper>
      <input
        value={value} 
        onChange={pOnChange}
        onKeyDown={onKeyDown}
        placeholder="&nbsp;"
      />
      {placeholder && <label htmlFor={id}>{placeholder}</label>}
    </InputWrapper>
  )
}

export default Input