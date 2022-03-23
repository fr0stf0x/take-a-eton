import { ICheckBox } from '@/interfaces/Input';
import React, { FC } from 'react'
import { v4 } from 'uuid';
import { CheckBoxWrapper } from './styled';

const CheckBox: FC<ICheckBox> = ({ id, label }) => {
  const actualId = id || v4();

  return (
    <CheckBoxWrapper>
      <input type="checkbox" name={actualId} id={actualId} />
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