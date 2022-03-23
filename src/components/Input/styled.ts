import { pink, primaryColor, white } from "@/constants/colors";
import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  background-color: ${white};
  background-color: ${pink};
  border-radius: 0.5rem;
  isolation: isolate;
  transform: translate(-8px, -8px);
  transition: transform .2s ease-out;
  
  &:after {
    background-color: #111;
    border-radius: 8px;
    content: "";
    display: block;
    height: 48px;
    left: 0;
    width: 100%;
    position: absolute;
    top: 4px;
    transform: translate(12px, 12px);
    transition: transform .2s ease-out;
    z-index: -1;
  }

  &:hover,
  &:focus-within {
    transform: translate(0, 0);
    &:after {
      transform: translate(0, 0);
    }
  }

  > label {
    position: absolute;
    background-color: ${pink};
    padding: 0 0.25rem;
    cursor: text;
    top: 1rem;
    left: calc(1rem - 0.25rem);
    line-height: 1;
    pointer-events: none;
    transition: transform 0.25s ease;
  }

  > input,
  > textarea {
    background-color: ${pink};

    border: none;
    border-radius: 0.5rem;
    color: ${primaryColor};
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
    border: 2px solid #111;

    &:hover {
      border-color: #444;
    }

    &:focus {
      /* border: 2px solid #00A455; */
      border: 2px solid #111;
      caret-color: #111;
      outline: none;
      outline-offset: 0;
      /* padding: calc(1rem - 1px); */

      + label {
        /* color: #00A455; */
        color: #111;
      }
    }
  }

  > textarea {
    min-height: 1rem;
    resize: vertical;
    max-height: 5rem;
  }

  &:focus-within > label,
  > input:not(:placeholder-shown) + label,
  > textarea:not(:placeholder-shown) + label {
    transform: translateY(-1.5rem);
    cursor: default;
  }
`
