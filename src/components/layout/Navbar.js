// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

// const Navbar = (props) => {
const Navbar = ({icon, title}) => {
  
  return (
    <nav className="navbar bg-primary">
      <h1>
        {/* <i className={props.icon}/> {props.title} */}
        <i className={icon}/> {title}
        </h1>
    </nav>
  )
}

// defualt props
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar;


// class Navbar extends Component {
//   // defualt props
//   static defaultProps = {
//     title: 'Github Finder',
//     icon: 'fab fa-github'
//   };

//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired
//   }

//   render() {
//     return (
//       <nav className="navbar bg-primary">
//         <h1>
//           <i className={this.props.icon}></i> {this.props.title}
//           </h1>
//       </nav>
//     )
//   }
// }

