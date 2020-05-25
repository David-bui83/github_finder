// import React, { Component } from 'react';
import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

// class Search extends Component {
const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  // state = {
  //   text: ''
  // };

  const [text, setText] = useState('');
  
  const onSubmit = (e) => {
    e.preventDefault();
    if(text === ''){
      alertContext.setAlert('Please enter something', 'light');
    }else{
      githubContext.searchUsers(text);
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

        {githubContext.users.length > 0 && (
          <button className="btn btn-btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>
        )}
      </div>
    )
  // }
}


export default Search;
