import React from 'react'
import {
      Link, Switch
  } from "react-router-dom";
  
export default function SideBar() {
  return (
    <div>
      <Link to="/">Home</Link>
    </div>
  )
}

// import React from "react";
// import {
//   BrowserRouter as
//     Link, Switch
// } from "react-router-dom";

// const SideBar = () => { 
//   return (
//     <div>
//         <Link to="/">Home</Link>
//         {/* <a href="/">ssdfasf</a> */}
//     </div>
//   )}

// // const SideBar= () =>{return (
// //   <div>
// //           {/* <ul>

// //         <li><Link to="/city">View City</Link></li>
// //         <li><Link to="/Register">Register Student</Link></li>
// //         <li><Link to="/ViewStudent">Display Student</Link></li>
// //       </ul> */}
// //       <li><Link to="/ViewStudent">Display Student</Link></li>

// //   </div>




// // <ul style={{ listStyleType: 'none', padding: 0 }}>
// //   <li><Link to="/">Home</Link></li>
// //   <li><Link to="/city">View City</Link></li>
// //   <li><Link to="/Register">Register Student</Link></li>
// //   <li><Link to="/ViewStudent">Display Student</Link></li>
// // </ul>
// // )}
// export default SideBar;