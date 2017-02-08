import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'

import { createStore } from 'redux';
import notesReducer from './reducers/notesReducer'
import rootReducer from './reducers'
import {addNote} from './actions'

import { Provider } from 'react-redux'

const store = createStore(rootReducer);

ReactDOM.render( <Provider store={store}>
  <App  />
</Provider>, document.getElementById('container'));
