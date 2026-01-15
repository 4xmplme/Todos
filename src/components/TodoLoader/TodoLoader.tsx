import { FC } from 'react';
import cn from 'clsx';

type Props = {
  isLoading: boolean;
};
export const TodoLoader: FC<Props> = ({ isLoading }) => {
  return (
    <div
      data-cy="TodoLoader"
      className={cn('modal', 'overlay', { 'is-active': isLoading })}
    >
      <div className="modal-background has-background-white-ter" />
      <div className="loader" />
    </div>
  );
};
