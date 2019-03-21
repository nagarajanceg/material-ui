import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/es/Route'
import Switch from 'react-router-dom/es/Switch'

const RoutedApp = () => (
	<BrowserRouter >
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="*" component={App} />
		</Switch>
	</BrowserRouter>
);

ReactDOM.render(<RoutedApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
