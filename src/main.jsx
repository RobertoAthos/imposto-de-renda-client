import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from 'react-redux'
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import  thunk from 'redux-thunk'
import rootReducer from './redux/reducers/rootReducer'

const store = createStore(rootReducer,compose(applyMiddleware(thunk)))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
)