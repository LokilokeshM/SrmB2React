import './App.css';
import MyTest from './Components/MyTest';
import DisplayCity from './Components/DisplayCity'
import Weather from './Components/Weather'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MyStudentFormParent from './Components/MyStudentFormParent';
function App() {
  return (
        <Router>
            <Switch>
              <Route path="/student">
              {<MyStudentFormParent/>}
              
              </Route>
              <Route exact path="/">
                {/* <DisplayCity /> */}
                <MyTest />
              </Route>
                <Route path="/Weather">
                  <DisplayCity/>
                </Route>
            </Switch>
        </Router>
  );
}

export default App;
