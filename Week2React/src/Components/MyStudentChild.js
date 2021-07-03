import React from 'react'

export default function MyStudentChild({firstName,
lastName,
dob,
age,
phoneNumber,
email,
password,
confirmPassword}) {
    return (
        <>
            <div className="card w-100 p-4">
                <div className="card-body">
                    <h2 className="card-title " style={{color:'gray'}}>Display Values From Child</h2>
                    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                    <p className="card-text">
                        <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"><h3>First Name</h3></div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"><h3>:  {firstName}</h3></div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"><h3>Last Name</h3></div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"><h3>:  {lastName}</h3></div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"><h3>Date of Birth</h3></div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"><h3>:  {dob}</h3></div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"><h3>Age</h3></div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"><h3>:  {age}</h3></div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"><h3>Phone Number</h3></div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"><h3>:  {phoneNumber}</h3></div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"><h3>Email</h3></div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"><h3>:  {email}</h3></div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"><h3>Password</h3></div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"><h3>:  {password}</h3></div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"><h3>Confirm Password</h3></div> 
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"><h3>:  {confirmPassword}</h3></div> 
                        </div>
                    </p>
                </div>
            </div>
        </>
    )
}
