import { useSetAtom } from 'jotai';
import React, { KeyboardEvent } from 'react'
import { v4 } from 'uuid';

import paperAdd from '@/assets/paper_add.svg';
import { todosAtom } from '@/atoms/todo-list';
import { TodoStatus } from '@/constants/TodoStatus';

import Input from '@/components/Input'

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
    <div>
      <Input
        value={todo}
        onChange={setTodo}
        onKeyDown={onKeyDown}
        placeholder={(
          <>
            <img className="icon input-icon" src={paperAdd} alt="+" /> 
           Add a new to-do"
          </>
        )}
      />
    </div>
  )
}

export default TodoInput