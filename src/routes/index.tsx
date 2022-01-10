import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './routes';

export default function () {
  return (
    <Switch>
      {routes.map(route => (
        <Route exact key={route.path} path={route.path} component={route.components} />
      ))}
    </Switch>
  );
}
