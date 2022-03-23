import { useAtomValue } from 'jotai'
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useTransition, animated } from 'react-spring';

import { filteredAtom } from '@/atoms/todo-list'
import TodoItem from './TodoItem'
import { TodoListWrapper, TodoListStyled } from './styled';
import Empty from './Empty';
import Button from '../Button';

const TodoList = () => {
  const list = useAtomValue(filteredAtom);

  const transitions = useTransition(list, {
    keys: (todo) => todo.id,
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 70 },
    leave: { opacity: 0, height: 0 },
  })

  const onClickToggleAll = () => {
    // TODO
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
          {
            !list.length ? (
              <Empty />
            ) :
              transitions((style, todo) => (
                <animated.div className="todo-item" style={style}>
                  <TodoItem todo={todo} />
                </animated.div>
              ))
          }
        </TodoListStyled>
      </TodoListWrapper>
      {!!list.length && (
        <Button
          style={{ alignSelf: 'flex-start', margin: '0rem 0 2rem' }}
          onClick={onClickToggleAll}
        >
          Toggle All
        </Button>
      )}
    </>
  )
}

export default TodoList;
