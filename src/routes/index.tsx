import { HashRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import routes from './routes';

import Layout from '../layout/Layout';
import NavBar from '../layout/NavBar';

export default function Config() {
  return (
    <Layout
      left={<Router><NavBar /></Router>} 
      right={
        <Router>
          <Switch>
            {routes.map((route, idx) => (
              <Route exact key={idx} {...route} />
            ))}
          </Switch>
        </Router>
      }
    />
  );
}
