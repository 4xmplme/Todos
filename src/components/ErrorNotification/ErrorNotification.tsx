import { FC, useContext } from 'react';
import cn from 'clsx';
import { DispatchContext, StateContext } from '../../Store';

export const ErrorNotification: FC = () => {
  const dispatch = useContext(DispatchContext);
  const { error } = useContext(StateContext);

  return (
    <div
      data-cy="ErrorNotification"
      className={cn(
        'notification',
        'is-danger',
        'is-light',
        'has-text-weight-normal',
        { hidden: !error },
      )}
    >
      <button
        type="button"
        data-cy="HideErrorButton"
        aria-label="Hide error"
        className="delete"
        onClick={() => dispatch({ type: 'setError', payload: '' })}
      />

      {error}
    </div>
  );
};
