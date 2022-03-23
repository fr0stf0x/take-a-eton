import React from 'react'
import styled from 'styled-components';
import great from '@/assets/great.png';

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  bottom: 0;
`;

const Background = () => {
  return (
    <BackgroundContainer>
      {/* <img src={great} alt='alt' /> */}
    </BackgroundContainer>
  )
}

export default Background