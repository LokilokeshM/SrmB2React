import React, { useState } from 'react'
import MyStudentChild from './MyStudentChild'
const MyStudentFormParent = () => {

        const [user,setUser]=useState({
            firstName:'',
            lastName:'',
            dob:undefined,
            age:0,
            phoneNumber:0,
            email:'',
            password:'',
            confirmPassword:''
        })
  
    const onchangeForm = (event)=>
    {
        setUser((prev)=>{
            return {
                ...prev,
                [event.target.name]:event.target.value
            }
        })
    }


    return (
        <div>
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        {/* card-start */}
                        <div className="card w-100 justify-content-center bg-transparent" style={{width: '18rem'}}>
                          <div className="card-body">
                            <h5 className="card-title" style={{color:"gray"}}>Student Form</h5>
                            <p className="card-text">
                              <div className="row">
                                <div className="col-lg-12">
                                    <div class="form-group">
                                        <label for="">First Name</label>
                                        <input type="text" class="form-control" name="firstName" placeholder="First Name" onChange={onchangeForm}/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div class="form-group">
                                        <label for="">Last Name</label>
                                        <input type="text" class="form-control" name="lastName" placeholder="Last Name" onChange={onchangeForm}/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div class="form-group">
                                        <label for="">Email</label>
                                        <input type="text" class="form-control" name="email" placeholder="Email" onChange={onchangeForm}/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div class="form-group">
                                        <label for="">Phone Number</label>
                                        <input type="text" class="form-control" name="phoneNumber" placeholder="Phone Number"  onChange={onchangeForm}/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div class="form-group">
                                        <label for="">Date of Birth</label>
                                        <input type="date" class="form-control" name="dob"  onChange={onchangeForm}/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div class="form-group">
                                        <label for="">Age</label>
                                        <input type="number" class="form-control" name="age" placeholder="Age"/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div class="form-group">
                                        <label for="">Password</label>
                                        <input type="password" class="form-control" name="password" placeholder="*************" onChange={onchangeForm}/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div class="form-group">
                                        <label for="">Confirm Password</label>
                                        <input type="password" class="form-control" name="confirmPassword" placeholder="************" onChange={onchangeForm}/>
                                    </div>
                                </div>
                              </div>
                            </p>
                          </div>
                        </div>
                        {/* Card Ends */}
                </div>
                {/* End Columns */}               
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <MyStudentChild firstName={user.firstName}
            lastName={user.lastName}
            dob={user.dob}
            age={user.age}
            phoneNumber={user.phoneNumber}
            email={user.email}
            password={user.password}
            confirmPassword={user.confirmPassword}/>
                </div>    
            </div>    
        </div>
    )   
}
export default MyStudentFormParent;