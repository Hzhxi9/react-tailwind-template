import React from 'react';

import produce, { original } from 'immer';

function Todo() {
  const array = [{ a: 1 }, { b: 2 }, { c: 3 }];
  const arr1 = produce(array, draft => {
    draft[0].a = 2;
  });

  console.log(array[0] === arr1[0], arr1);

  const data = {
    content: { time: '2022-01-12', value: 'today is 2022-01-12' },
    desc: { text: 'this is a test desc' },
  };

  const data1 = produce(data, draft => {
    draft.desc.text = 'this is a new test desc';
  });

  const data2 = produce(draft => {
    draft.desc.text = 'this is a new test desc 2222';
  });

  console.log(data2(data));

  console.log(data1.desc === data.desc);

  const baseState = { users: [{ name: 'Richie' }] };
  const nextState = produce(baseState, draftState => {
    original(draftState.users); // is === baseState.users
  });

  console.log(nextState === baseState, '==nextState=')

  return <div>Todo</div>;
}

export default Todo;
