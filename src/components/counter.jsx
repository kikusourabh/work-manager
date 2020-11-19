import React, { Component } from 'react';
import axios from 'axios';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        
    }

    createShowroom = async () => {
        try {
          const response = await axios.get('http://localhost:5000/create_showroom');
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }

    incCounter = ()=>{
        this.setState({count:this.state.count+1})
    }
    render() { 
        return (
            <div>
                <span>{this.state.count}</span>
                <button className="btn btn-primary m-2" onClick={this.createShowroom}>Increment</button>
            </div>
        );
    }
}
 
export default Counter;