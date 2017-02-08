import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'

import { createStore } from 'redux';
import notesReducer from './reducers/notesReducer'
import rootReducer from './reducers'
import {addNote} from './actions'

import { Provider } from 'react-redux'

const store = createStore(rootReducer);

store.dispatch(addNote('React'))
store.dispatch(addNote('Redux'))
store.dispatch(addNote('Dan Abramov, our good friend'))



ReactDOM.render( <Provider store={store}>
  <App />
</Provider>, document.getElementById('container'));
