import styled from "styled-components";

import { primaryColor, primaryLightColor, secondaryColor } from "@/constants/colors";

// animation variables
const animationFunction = 'ease-in-out';
const animationDuration = '0.25s';
const animationDelay = '0.2s';

export const CheckBoxWrapper = styled.div`
  input[type="checkbox"] {
    position: absolute;
    right: 9000px;

    & + .label-text {
      position: relative;
      color: ${primaryColor};
      cursor: pointer;
      display: flex;
      padding-left: 2rem;
      justify-content: space-between;
      align-items: center;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;  
      overflow: hidden;
      transition: all ${animationDuration} ${animationFunction};

      &::after {
        content: "";
        border-radius: .2rem;
        border: 1px solid ${primaryColor};
        width: 16px;
        position: absolute;
        left: 0;
        top: 50%;
        height: 16px;
        transform: scale(1) translateY(-50%);
        transition: all ${animationDuration} ${animationFunction} ${animationDelay};
      }

      .checkmark {
        position: absolute;
        top: 50%;
        left: 2px;
        transform: translateY(-50%);
        stroke: #c8d4d9;
        fill: none;
        stroke-width: 1.5;
        stroke-dasharray: 30 30;
        stroke-dashoffset: 30;
        transition: all ${animationDuration} ${animationFunction};
      }
    }
  }

  // checked checkbox styles
  input[type="checkbox"]:checked {
    & + .label-text {
      color: ${secondaryColor};

      &::after {
        border: 1px solid transparent;
        transform: scale(1.2) translateY(-50%);
        transition: all ${animationDuration} ${animationFunction};
      }

      .checkmark {
        stroke-dashoffset: 0;
        transition: all ${animationDuration} ${animationFunction} ${animationDelay};
      }
    }
  }

  &:hover input[type="checkbox"]:not(:checked) + .label-text::after{
    background-color: ${primaryLightColor};
  }
`;
