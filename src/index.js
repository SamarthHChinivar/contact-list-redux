import React from 'react';
import ReactDOM from 'react-dom/client';
import PeopleList from './components/PeopleList';
import AddPersonForm from './components/AddPersonForm';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './style.css';

const initialState = {
  contacts: ["James Anderson", "Bruce Wayne" , "Kaddipuddi", "Agastya"] 
  };

// Reducer function
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_PERSON':
      // ... is used in ES6 syntax, to represent a list , when added to anather list, it would be added as multiple elements and not as embedded array
      return {...state,
        contacts: [...state.contacts, action.data]}
    default:
      return state;
  }
}

//Creating a Store using Redux 
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Provider is a special function for using store
  <Provider store={store}>
    <AddPersonForm /> {/* Used for adding person */}
    <PeopleList /> {/* Used for storing List in people */}
  </Provider>,
  document.getElementById('root')
);