import React from 'react';
import { connect } from 'react-redux'

function PeopleList(props) {
  const arr = props.contacts;
  const listItems = arr.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}

//simply returns the state variables as props to our component
function mapStateToProps(state) {
    return {
      contacts: state.contacts
    }
}

//connect function function returns a new component, that wraps the component you passed to it and connects it to the store
export default connect(mapStateToProps)(PeopleList)