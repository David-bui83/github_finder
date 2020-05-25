// import React, { Component } from 'react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// class Search extends Component {
const Search = ({searchUsers, showClear, clearUsers, setAlert}) => {

  // state = {
  //   text: ''
  // };

  const [text, setText] = useState('');
  
  const onSubmit = (e) => {
    e.preventDefault();
    if(text === ''){
      setAlert('Please enter something', 'light');
    }else{
      searchUsers(text);
      // setState({text: ''});
      setText('');
    }
  };

  const onChange = (e) => {
    // this.setState({[e.target.name]: e.target.value});
    setText(e.target.value);
  };

  // render() {

    // const {showClear, clearUsers} = this.props;
    return (
      <div>
        <form onSubmit={onSubmit} className="form">
          <input type="text" name="text" placeholder="Search Users..." value={text} onChange={onChange}/>
          <input type="submit" name="Search" className="btn btn-dark btn-block"/>
        </form>

        {showClear && (
          <button className="btn btn-btn-light btn-block" onClick={clearUsers}>Clear</button>
        )}
      </div>
    )
  // }
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
