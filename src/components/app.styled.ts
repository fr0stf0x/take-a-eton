import { primaryColor } from "@/constants/colors";
import styled from "styled-components";

export const AppWrapper = styled.div`
  font-family: 'Quicksand', sans-serif;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  color: ${primaryColor};
  position: relative;
  background-image: linear-gradient(to right bottom, #80afc4, #83becd, #8acdd3, #95dcd7, #a5ead8, #b9eed0, #cef1ca, #e3f3c8, #f5edc8, #ffe9cf, #ffe6d9, #fee6e3);
`;

export const AppFrame = styled.div`
  border-radius: 1em;
  background-color: #efefef;
  width: 50vw;
  height: 75%;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;

  box-shadow:
    0.8px 1.2px 7.8px -10px rgba(0, 0, 0, 0.031),
    2px 3px 16.4px -10px rgba(0, 0, 0, 0.044),
    4.1px 6.2px 28.6px -10px rgba(0, 0, 0, 0.056),
    8.4px 12.8px 50.2px -10px rgba(0, 0, 0, 0.069),
    23px 35px 121px -10px rgba(0, 0, 0, 0.1)
  ;
`;