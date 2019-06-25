import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./routes";
// import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import reducer from './store/rootReducer'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter><Route component={Routes} /></BrowserRouter>
    </Provider>,
    document.getElementById('root'));

