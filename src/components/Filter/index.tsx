import React from 'react'
import { useAtom } from 'jotai';

import { FilterStatus, TodoStatus } from '@/constants/TodoStatus';
import { filterAtom } from '@/atoms/todo-list';

import { ButtonGroupWrapper, FilterWrapper } from './styled';

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