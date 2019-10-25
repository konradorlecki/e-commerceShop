import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App/App';
import * as serviceWorker from './serviceWorker';

import useGlobalState from './Store/useGlobalState';
import Context from './Store/context'

const Index = () =>{
    const store = useGlobalState();
    return(
        <Context.Provider value={store}>
            <App/>
        </Context.Provider>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
