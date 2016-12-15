// inferno module
import Inferno from 'inferno';

// routing modules
import { Router, Route } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

// redux module
import { Provider } from 'inferno-redux';

// global store
import initialState from './reducers/initialState';
import configureStore from './store';
const store = configureStore(initialState);

// pages
import AboutPage from './containers/AboutPage';
import HomePage from './containers/HomePage';

// app wrapper
import App from './app';

// normalize our styles
import 'normalize.css';

// import global styles
import './styles/global.scss';

// initiate the browser history for our router
const browserHistory = createBrowserHistory();

// define our main render function
const render = () => {
  const routes = (
    <Provider store={ store }>
      <Router history={ browserHistory }>
        <Route component={ App }>
          <Route path='/' component={ HomePage }/>
          <Route path='/about' component={ AboutPage }/>
        </Route>
      </Router>
    </Provider>
  );
  Inferno.render(routes, document.getElementById('app'));
};

// update our interface whenever our store updates
store.subscribe(() => render());

// render our initial interface
render();
