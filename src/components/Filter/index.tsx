import React from 'react'
import { FilterStatus, TodoStatus } from '@/constants/TodoStatus';

import { ButtonGroupWrapper, FilterWrapper } from './styled';
import { useAtom } from 'jotai';
import { filterAtom } from '@/atoms/todo-list';

const arrStatus: {
  title: string;
  value: FilterStatus;
}[] = [
    {
      title: 'All',
      value: 'ALL'
    },
    {
      title: 'Active',
      value: TodoStatus.ACTIVE,
    },
    {
      title: 'Done',
      value: TodoStatus.DONE,
    },
  ]

const Filter = () => {
  const [filter, changeFilter] = useAtom(filterAtom);
  const onClickFilter = (filter: FilterStatus) => () => {
    changeFilter(filter);
  }

  return (
    <FilterWrapper>
      {/* <button className="toggle-btn">Toggle All</button> */}

      <ButtonGroupWrapper>
        {arrStatus.map(({ title, value }) => (
          <button
            key={value}
            className={filter === value ? 'active' : ''}
            onClick={onClickFilter(value)}
          >
            {title}
          </button>
        ))}
      </ButtonGroupWrapper>
    </FilterWrapper>
  );
}

export default Filter