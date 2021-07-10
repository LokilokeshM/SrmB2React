import React from 'react'
import routes from '../routes'
import {Route,Link} from 'react-router-dom'
import SideBar from './SideBar'
const MainContent = () => {
  return (
    <div style={{ flex: 1, padding: '10px' }}>
           {/* <ul style={{ listStyleType: 'none', padding: 0 }}>
        
        <li><Link to="/">Home</Link></li>
        <li><Link to="/city">View City</Link></li>
        <li><Link to="/Register">Register Student</Link></li>
        <li><Link to="/ViewStudent">Display Student</Link></li>
      </ul> */}
      <SideBar/>
        
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
        >
          <route.main />
        </Route>
      ))}
    </div>
)}
export default MainContent;