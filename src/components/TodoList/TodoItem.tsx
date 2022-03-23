import React from 'react'
import { ITodoItem } from '@/interfaces/TodoItem'
import { TodoItemStyled } from './styled';
import { TodoStatus } from '@/constants/TodoStatus';
import CheckBox from '../CheckBox';

const TodoItem: React.FC<{ todo: ITodoItem }> = ({ todo }) => {
  const toggleTodo = () => {
    
  }

  return (
    <TodoItemStyled>
      <CheckBox
        checked={todo.status === TodoStatus.DONE}
        label={todo.title}
        onChange={toggleTodo}
      />
    </TodoItemStyled>
  )
}

export default TodoItem