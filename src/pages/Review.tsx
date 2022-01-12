import React from 'react';

import Immutable from 'immutable';

function Review() {
  /**Map */
  const map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
  const map2 = map1.set('b', 50);

  console.log(map1.get('b'), map1.get('a'));
  console.log(map2.get('b'), map2.get('a'));

  /**List */
  const list1 = Immutable.List([1, 2]);
  const list2 = list1.push(3, 4, 5); // [1,2,3,4,5]
  const list3 = list2.unshift(0); // [0,1,2,3,4,5]
  const list4 = list1.concat(list2, list3); // [1,2,3,4,5,0,1,2,3,4,5]

  console.log(list1, list2, list3, list4);

  /**toJS */
  console.log(map1.toObject());
  console.log(map1.toArray());
  console.log(map1.toJS());
  console.log(map1.toJSON());

  /**fromJS */
  const nested = Immutable.fromJS({ a: { b: { c: [1, 2, 3] } } });

  console.log(nested);

  const nested2 = nested.getIn(['a', 'b', 'c']);

  console.log(nested2)

  // const nested3 = nested.updateIn(['a', 'b', 'd'], 'h')

  return <div>Review</div>;
}

export default Review;
