import styled from 'styled-components';
import { CheckBoxWrapper } from '../CheckBox/styled';

export const TodoListWrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 0;
  justify-content: space-between;
  align-items: flex-start;
  align-items: start;
`;

export const TodoListStyled = styled.div`
  align-self: stretch;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
  position: relative;

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
  justify-content: space-between;
  padding-right: 1rem;
  min-height: 3rem;

  ${CheckBoxWrapper} {
    flex: 1;
  }
`

export const RightSideStyled = styled.div`
  display: flex;
  align-items: center;

  .date-time {
    color: #ab9592;
    margin: 0 1rem;

    > div:nth-child(1) {
      margin-bottom: 0.4rem;
    }
  }
`;