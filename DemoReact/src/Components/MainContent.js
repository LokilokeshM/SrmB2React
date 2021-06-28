import React from 'react'
import { BrowserRouter as Route,Router} from 'react-router-dom';
import Sample from './Sample';
export default function MainContent() {
    return (
        <Router>
            <Route exact path="/" component={Sample} />
        </Router>
     
    )
}
