import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import SeeNote from './pages/SeeNote';
import AddNote from './pages/AddNote';
import EditNote from './pages/EditNote';
import PageNotFound from './pages/PageNotFound';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/note/:id" component={SeeNote} />
        <Route path="/add" component={AddNote} />
        <Route path="/edit/:id" component={EditNote} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;