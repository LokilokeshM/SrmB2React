import React, { Component } from 'react'

const Dashboard = class extends Component {
   constructor(props)
   {
    super(props)
    this.state = {date:new Date()}
   }


   componentDidMount()
   {
     this.timer = setInterval(() => {
         this.tick()
     }, 1000);
   }
   
   tick()
   {
    this.setState({date:new Date()});
   }

   render() {

        return (
            <div>
                <h3>{this.state.date.toLocaleTimeString()}</h3>
            </div>
        )
    }
}


export default Dashboard;

