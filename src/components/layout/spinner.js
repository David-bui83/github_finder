import React, {Fragment} from 'react';
import spinner from './spinner.gif';


// Alternative
const Spinner = () => <Fragment>
    <img src={spinner} alt="Loading..." style={{width: '200px', margin: 'auto', display: 'block'}}/>
  </Fragment>

export default Spinner;



// export const spinner = () => {
//   return (
//     <Fragment>
//       <img src={spinner} alt="Loading..." style={{width: '200px', margin: 'auto', display: 'block'}}/>
//     </Fragment>
//   )
// }

