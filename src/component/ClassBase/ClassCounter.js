import React, { Component } from 'react'
import { connect } from 'react-redux'

class ClassCounter extends Component {

    incrementCall = () =>{
        this.props.increment();
    }


    dicrementCall = () =>{
        this.props.dicrement();
    }



    render() {
        return (
            <div>
                <h1>{this.props.counter}</h1> 
                <button onClick={this.incrementCall}>+</button>
                <button onClick={this.dicrementCall}>-</button>
            </div>
        )
    }
};

const mapSateToPros = state =>{
    return{
        counter : state.counter
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        increment : () => dispatch({ type: "increment" }),
        dicrement : () => dispatch({ type: "dicrement" })
    }
}

export default connect(mapSateToPros , mapDispatchToProps)(ClassCounter)

// connect() has two argument
// fist one manage state to props
// second one is for dispatching props


// mapStateToProps has passed an argument which store data
// mapDispatchToProps has passed an argument which work with dispactich data