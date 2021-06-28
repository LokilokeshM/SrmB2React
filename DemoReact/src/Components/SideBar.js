import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom';   
const SideBar =()=> {
    return (
    <aside class="col-2 px-0 fixed-top" id="left">
        <div class="list-group w-100">
            <ul>
                 <li class="list-group-item active"><Link to="/">Home</Link></li>
                 <li class="list-group-item"><Link to="/about">About</Link></li>
            </ul>
        </div>
        <div >
            <a >Home</a>
            <a ><Link to="/about"></Link> about</a>
            <a class="list-group-item"></a>
        </div>
    </aside>
    )
}
export default SideBar;