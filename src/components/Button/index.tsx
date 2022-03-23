import React, { FC } from 'react'
import styled from 'styled-components';

const ButtonStyled = styled.button`
  padding: 0.5em 2em;

  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
  color: green;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
  padding: .5rem 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }

  &.small {
    padding: .25rem .7rem;
  }

  &.simple {
    box-shadow: none;
    transform: none;
  }

  &.danger {
    background-color: #fbc2c2;
    color: #fd3030;
    width: 2rem;
    height: 2rem;
  }
`;

const Button: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({children, ...props}) => {
  return (
    <ButtonStyled {...props}>{children}</ButtonStyled>
  )
}

export default Button