import React from 'react';

import produce, { enablePatches, applyPatches } from 'immer';

enablePatches();

function Overview() {
  let state = {
    name: 'Micheal',
    age: 32,
  };

  // Let's assume the user is in a wizard, and we don't know whether
  // his changes should end up in the base state ultimately or not...
  let fork = state;
  // all the changes the user made in the wizard
  let changes: any[] = [];
  // the inverse of all the changes made in the wizard
  let inverseChanges: any[] = [];

  fork = produce(
    fork,
    draft => {
      draft.age = 33;
    },
    // The third argument to produce is a callback to which the patches will be fed
    (patches, inversePatches) => {
      changes.push(...patches);
      inverseChanges.push(...inversePatches);
    }
  );

  console.log(fork, changes, inverseChanges)

  // In the meantime, our original state is replaced, as, for example,
  // some changes were received from the server
  state = produce(state, draft => {
    draft.name = 'Michel';
  });

  console.log(state)

 

  // When the wizard finishes (successfully) we can replay the changes that were in the fork onto the *new* state!
  state = applyPatches(state, inverseChanges);

  console.log(state)
  return <div>Overview</div>;
}

export default Overview;
