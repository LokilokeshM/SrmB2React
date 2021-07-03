import React,{useState} from 'react'
import './MyTest.css'
const MyTest = () => {
    const [user, setUser] = useState({
        name:'Lokesh',
        dte:new Date()
    })
    return (
        <div>
            <div className="card w-50" style={{width: '18rem'}}>
              <div className="card-body">
                <h5 className="card-title">Display Details in a Required Format</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card Data</h6>
                <p className="card-text">
                <p className="username"><h2>UserName:{user.name}</h2></p>
            <br/>
            <p className="username"><h2>Date:{user.dte.toString()}</h2></p>
                </p>
                
              </div>
            </div>

        </div>

    )
}
export default  MyTest;