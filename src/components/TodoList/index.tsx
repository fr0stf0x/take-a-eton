import { useAtomValue, useSetAtom } from 'jotai'
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useTransition, animated } from 'react-spring';

import clock from '@/assets/clock.svg';
import Button from '@/components/Button';
import TodoItem from './TodoItem'
import Empty from './Empty';
import { ITodoItem } from '@/interfaces/TodoItem';
import { filterAtom, filteredAtom, todosAtom } from '@/atoms/todo-list'
import { toggleTodo } from '@/utils/helpers';

import { TodoListWrapper, TodoListStyled } from './styled';

const TodoList = () => {
  const list = useAtomValue(filteredAtom);
  const setTodos = useSetAtom(todosAtom);
  const filter = useAtomValue(filterAtom);

  const toggleTransition = useTransition(!!list.length, {
    delay: 200,
    from: { opacity: 0, display: 'none' },
    enter: { opacity: 1, display: 'flex' },
    leave: { opacity: 0, display: 'none' },
    reverse: !list.length,
  })

  const transitions = useTransition(list, {
    keys: (todo) => todo.id,
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 70 },
    leave: { opacity: 0, height: 0 },
  })

  const onClickToggleAll = () => {
    setTodos((prev) => {
      if (filter === 'ALL') {
        return prev.map(toggleTodo);
      }

      return prev.reduce((arr: ITodoItem[], todo: ITodoItem) => {
        if (todo.status === filter) {
          arr.push(toggleTodo(todo));
        }

        return arr;
      }, []);
    })
  }

  return (
    <>
      <TodoListWrapper>
        <TodoListStyled>
          {/* {!list.length ? (
          <Empty />
        ) : (
          <TransitionGroup>
            {list.map((todo, i) => {
              return (
                <CSSTransition
                  key={todo.id}
                  timeout={500}
                  classNames="item"
                >
                  <TodoItem key={todo.id} todo={todo} />
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        )} */}
          {toggleTransition((style, isNotEmpty: boolean) =>
            isNotEmpty ? transitions((style, todo) => (
              <animated.div className="todo-item" style={style}>
                <TodoItem todo={todo} />
              </animated.div>
            )) : (
              <animated.div className="empty-list" style={style}>
                <Empty />
              </animated.div>
            )
          )}
          {/* {
            !list.length ? (
              <Empty />
            ) :
              transitions((style, todo) => (
                <animated.div className="todo-item" style={style}>
                  <TodoItem todo={todo} />
                </animated.div>
              ))
          } */}
        </TodoListStyled>
      </TodoListWrapper>
      {!!list.length && (
        <Button
          onClick={onClickToggleAll}
          className="toggle-all"
        >
          <img className="icon" src={clock} alt="toggle" />
          Toggle All
        </Button>
      )}
    </>
  )
}

export default TodoList;
