import { FC, memo, useContext, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem';
import { StateContext } from '../../Store';

type Props = {
  todos: Todo[];
};

export const TodoList: FC<Props> = memo(function TodoList({ todos }) {
  const { tempTodo, loadings } = useContext(StateContext);
  const nodeRef = useRef(null);

  return (
    <section className="todoapp__main" data-cy="TodoList">
      <TransitionGroup>
        {todos.map(todo => (
          <CSSTransition
            key={todo.id}
            nodeRef={nodeRef}
            timeout={300}
            classNames="item"
          >
            <TodoItem
              todo={todo}
              isLoading={loadings.some(loading => loading.id === todo.id)}
            />
          </CSSTransition>
        ))}

        {!!tempTodo && (
          <CSSTransition key={0} timeout={300} classNames="temp-item">
            <TodoItem todo={tempTodo} isLoading />
          </CSSTransition>
        )}
      </TransitionGroup>
    </section>
  );
});
