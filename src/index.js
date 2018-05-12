import ReactDOM from 'react-dom';
import { makeMainRoutes } from './routes';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);

registerServiceWorker();
