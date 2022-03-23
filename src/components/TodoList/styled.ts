import styled from 'styled-components';
import CheckBox from '../CheckBox';
import { CheckBoxWrapper } from '../CheckBox/styled';

export const TodoListWrapper = styled.div`
  margin-bottom: 1rem;
  padding: 1rem 0;
`;

export const TodoItemStyled = styled.div`
  display: flex;
  align-items: center;

  ${CheckBoxWrapper} {
    margin-bottom: 1rem;
  }
`