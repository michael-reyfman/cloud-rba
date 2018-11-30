import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'

import App from './App'
import * as serviceWorker from './serviceWorker'

import './index.css'

const rootReducer = combineReducers({
    form: formReducer,
})

const store = createStore(rootReducer)

const Wrapper = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(<Wrapper />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
