// import React, { Component } from 'react'; // old way
import React from 'react';
import PropTypes from 'prop-types';

// const UserItem = (props) => {
//   const {login, avatar_url, html_url} = props.user;
const UserItem = ({user: {login, avatar_url, html_url}}) => {

  return (
    <div className='card text-center'>
      <img 
          src={avatar_url} 
          alt="" 
          className="round-img" 
          style={ { width: '60px' }}
        />
        <h3>{login}</h3>
        <div>
          <a 
            href={html_url} className="btn btn-dark btn-sm my-1"
          >MORE</a>
        </div>
    </div>
  )
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;



// Old way of doing things
// class UserItem extends Component {
//   // state = {
//   //   id: 'id',
//   //   login: 'mojombo',
//   //   avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
//   //   html_url: 'https://github.com/mojombo'
//   // };

//   render() {
//     const {login, avatar_url, html_url} = this.props.user;

//     return (
//       <div className="card text-center">
//         <img 
//           src={avatar_url} 
//           alt="" 
//           className="round-img" 
//           style={ { width: '60px' }}
//         />
//         <h3>{login}</h3>
//         <div>
//           <a 
//             href={html_url} className="btn btn-dark btn-sm my-1"
            
//           >MORE</a>
//         </div>
//       </div>
//     )
//   }
// }


