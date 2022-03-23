import styled from 'styled-components';
import emptyImage from '@/assets/empty.png';

const EmptyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  > img {
    width: 50%;
    height: auto;
  }
`;

const Empty = () => {
  return (
    <EmptyWrapper>
      <img src={emptyImage} alt="empty" />
    </EmptyWrapper>
  )
}

export default Empty