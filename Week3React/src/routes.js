import React from 'react'
import StudParentProps from './Components/StudParentProps';
import DisplayDropDownApi from './Components/DisplayDropDownApi';
import ValidationStudents from './Components/ValidationStudents';
import DisplayStudent from './Components/DisplayStudent';
import ComponentA from './Components/ComponentA';
const routes = [{
    path: '/',
    exact: true,
    main: () =><StudParentProps/>
  },
  {
    path: '/city',
    main: () => <DisplayDropDownApi/>
  },
  {
    path: '/Register',
    main: () => <ValidationStudents/>
  },
  {
    path:'/ViewStudent',
    main: () => <DisplayStudent/>
  },
  {
      path:'/Subject',
      main: () => <ComponentA/>
  }
  ]
  
export default routes;