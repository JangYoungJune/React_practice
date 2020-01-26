import React from 'react';
import CounterContainer from './containers/CounterContainer';
import CounterContainerHook from './containers/CounterContainerHook';
import TodosContainer from './containers/TodosContainer';
import TodosContainerHook from './containers/TodosContainerHook';

const App = () => {
  return (
    <div>
      {/* <CounterContainer /> */}
      <CounterContainerHook />
      <hr />
      {/* <TodosContainer /> */}
      <TodosContainerHook />
    </div>
  );
};

export default App;
