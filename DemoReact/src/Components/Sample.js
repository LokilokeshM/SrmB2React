import React from 'react';
import Dashboard from '../WorkingComponents/Dashboard';
const Sample = () => {
    return (
        <div className="container-fluid">
            <div className="card ">
                <div className="card-header bg-info">
                    Sample Card Header For Checking
                </div>
                <div className="card-body">
                    Hiiiii How are you........
                    <Dashboard/>
                </div>
            </div>
            {/* Hiiii bro How Are You....{props.name}
            {
            props.sample.map(d=>{
                return (
                <div className="row">
                    <div className="col-lg-4">
                        <h1>{d}</h1>
                    </div>
                </div>
                )})
            } */}
        </div>
    )
}

export const Sample1 = () =>
{
    return(
        <div>
            asdfasfasfdasdfa
        </div> 
    )
}
export default Sample;