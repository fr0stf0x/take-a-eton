import { atom, useSetAtom } from 'jotai';
import React, { ChangeEvent, KeyboardEvent } from 'react'
import { todosAtom } from '../../atoms/todo-list';
import { TodoStatus } from '../../constants/TodoStatus';
import { ITodoItem } from '../../interfaces/TodoItem';
import Input from '../Input'
import { v4 } from 'uuid';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

const TodoInput = () => {
  const [todo, setTodo] = React.useState('');
  const setTodos = useSetAtom(todosAtom);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      console.log('hit enter');

      setTodos((prev) => {
        return [
          {
            id: v4(),
            title: todo,
            createdAt: new Date(),
            status: TodoStatus.ACTIVE,
          },
          ...prev,
        ]
      });

      setTodo('');
    }
  }

  return (
    <Wrapper>
      <Input
        value={todo}
        onChange={setTodo}
        onKeyDown={onKeyDown}
        placeholder="+ Add a new to-do"
      />
    </Wrapper>
  )
}

export default TodoInput