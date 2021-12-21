import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Coin from './routes/Coin';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/:coinId'>
          <Coin />
        </Route>
        <Route path='/'>
          <Coin />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
