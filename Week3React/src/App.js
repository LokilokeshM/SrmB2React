
import './App.css';
import StudParentProps from './Components/StudParentProps';
import DisplayDropDownApi from './Components/DisplayDropDownApi';
import ValidationStudents from './Components/ValidationStudents';
import DisplayStudent from './Components/DisplayStudent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DefaultLayout from './Layouts/DefaultLayout';
import SideBar from './Layouts/SideBar';

function App() {
  return (
    <>
    <Router>
 
    <DefaultLayout/>
    {/* <Switch> 
      <Route path="/city">
        <DisplayDropDownApi/>
      </Route>
      <Route exact path="/">
        <StudParentProps/>
      </Route>
        <Route path="/Register">
            <ValidationStudents/>
        </Route>
        <Route path="/ViewStudent">
          <DisplayStudent/>
        </Route>
    </Switch> */}
</Router>
</>
  );
}

export default App;
