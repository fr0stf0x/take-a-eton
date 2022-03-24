import styled from 'styled-components';
import emptyImage from '@/assets/empty_compressed.png';

const EmptyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > img {
    height: clamp(15vh,15rem, 40vw);
    width: auto;
  }
`;

const Empty = () => {
  return (
    // <EmptyWrapper>
    <img src={emptyImage} alt="empty" />
    // </EmptyWrapper>
  )
}

export default Empty;
