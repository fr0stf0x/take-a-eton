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
  /* background: linear-gradient(320deg, #00E676 0%, #fdca31 100%); */
  background-image: linear-gradient(to left bottom, #00e676, #69e35c, #95df46, #b9da34, #d8d42b, #e9cf41, #f6cb56, #ffc86a, #ffca8d, #ffd0ae, #ffdacb, #fee6e3);
`;

export const AppFrame = styled.div`
  border-radius: 1em;
  background-color: #efefef;
  width: 50vw;
  height: 80%;
  padding: 2rem 4rem;
  box-shadow:
    0.8px 1.2px 7.8px -10px rgba(0, 0, 0, 0.031),
    2px 3px 16.4px -10px rgba(0, 0, 0, 0.044),
    4.1px 6.2px 28.6px -10px rgba(0, 0, 0, 0.056),
    8.4px 12.8px 50.2px -10px rgba(0, 0, 0, 0.069),
    23px 35px 121px -10px rgba(0, 0, 0, 0.1)
  ;


`;