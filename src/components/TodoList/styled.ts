import styled from 'styled-components';
import { CheckBoxWrapper } from '@/components/CheckBox/styled';

export const TodoListWrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 0;
  justify-content: space-between;
  align-items: flex-start;
  align-items: start;

  + .toggle-all {
    align-self: flex-start;
    margin: 0rem 0 2rem;
    display: flex;
    align-items: center;

    img {
      margin-right: .5rem;
    }
  }

  @media (max-width: 425px) {
    + .toggle-all {
      align-self: center;
    }
  }

  .empty-list {
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
  }
`;

export const TodoListStyled = styled.div`
  align-self: stretch;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
  position: relative;

  &::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #83becd;
    border-radius: 3px;

    &:hover {
      background: #80afc4;
    }
  }  

  /* react-transition-group */
  /* .item-enter {
    opacity: 0;
    transform: translateY(-50%);
  }
  .item-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 500ms ease-in;
  }
  .item-exit {
    opacity: 1;
    transform: translateY(0);
  }
  .item-exit-active {
    opacity: 0;
    transform: translateY(-50%);
    transition: all 500ms ease-in;
  } */
`;

export const TodoItemStyled = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  padding-right: 1rem;
  min-height: 3rem;

  ${CheckBoxWrapper} {
    flex: 1;
  }

  .date-time {
    color: #ab9592;
    margin: 0 1rem;

    > div:nth-child(1) {
      margin-bottom: 0.4rem;
    }
  }
`

export const LeftSideStyled = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-right: 0.5rem;

    .date-time {
      display: flex;
      align-self: flex-start;
      margin-top: 0.25rem;

      > div:nth-child(1) {
        margin-left: 1rem;
        margin-right: 0.4rem;
        margin-bottom: 0;
      }
    }
  }
`;

export const RightSideStyled = styled.div`
  display: flex;
  align-items: center;

  font-size: 1rem;
`;