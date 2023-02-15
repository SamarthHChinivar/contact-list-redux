import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPerson } from '../actions';

function AddPersonForm(props) {
  const [person, setPerson] = useState('');

  //Event Handlers
  function handleChange(e) {
    setPerson(e.target.value);
  }
    
  function handleSubmit(e) {
    if(person !== '') {
      props.addPerson(person);
      setPerson('');
    }
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder="Add new contact" 
        onChange={handleChange} 
        value={person} />
      <button type="submit">Add</button>
    </form>
  );
}

//mapDispatchToProps allows to define how we dispatch actions and make the dispatching functions available as props. 
const mapDipatchToProps = {
  addPerson
}

//connect function function returns a new component, that wraps the component you passed to it and connects it to the store
export default connect(null, mapDipatchToProps)(AddPersonForm)