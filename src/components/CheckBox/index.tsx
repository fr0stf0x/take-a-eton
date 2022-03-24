import React, { ChangeEvent, FC } from 'react'
import { v4 } from 'uuid';

import { ICheckBox } from '@/interfaces/Input';

import { CheckBoxWrapper } from './styled';

const CheckBox: FC<ICheckBox> = ({ id, label, checked, onChange }) => {
  const actualId = id || v4();

  const pOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <CheckBoxWrapper>
      <input
        type="checkbox"
        name={actualId}
        checked={checked}
        onChange={pOnChange}
        id={actualId}
      />

      <label htmlFor={actualId} className="label-text">
        {label}
        <svg width="15px" height="10px" className="checkmark">
          <polyline points="1,5 6,9 14,1" />
        </svg>
      </label>
    </CheckBoxWrapper>
  )
}

export default CheckBox