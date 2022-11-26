import React from "react";
import ReactDom from 'react-dom';
import App from './app/App';
import './index.scss';
import {createStore} from "redux";
import reducers from "./reducers/reducer";
import {Provider} from 'react-redux';
import { useState } from 'react'

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const Test = () => {
    return(
        <div style={{padding: 32}}>
            <input />
        </div>
    )
}

ReactDom.render(
    <Provider store={store}>
        <App/>
        {/* <Test/> */}
    </Provider>,
    document.getElementById('root')
);
