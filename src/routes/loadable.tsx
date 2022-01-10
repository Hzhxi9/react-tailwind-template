import Loading from '../components/Loading';

import React, { lazy, Suspense } from 'react';

interface Opts {
  fallback: React.ReactNode;
}

type UnPromisify<T> = T extends Promise<infer P> ? P : never;

export const lazyLoad = <T extends Promise<any>, U extends React.ComponentType<any>>(importFunc: () => T, selectorFunc?: (s: UnPromisify<T>) => U, opts: Opts = { fallback: null }) => {
  let lazyFactory: () => Promise<{ default: U }> = importFunc;

  if (selectorFunc) lazyFactory = () => importFunc().then(module => ({ default: selectorFunc(module) }));

  const LazyComponent = lazy(lazyFactory);

  return (props: React.ComponentProps<U>): JSX.Element => (
    <Suspense fallback={opts.fallback!}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export const defaultLazyLoad = <T extends Promise<any>, U extends React.ComponentType<any>>(importFunc: () => T, selectorFunc?: (s: UnPromisify<T>) => U, opts: Opts = { fallback: <Loading /> }) => {
  return lazyLoad(importFunc, selectorFunc, opts);
};
