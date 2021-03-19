import React from "react";

class Bomb extends React.Component {

    state={
        secondsLeft:this.initialCount
    }

    
    render(){
        const text = this.state.secondsLeft === 0 ? 'Boom!' : `${this.this.state.secondsLeft} seconds left before I go boom!`;
        return(
            <div>  </div>
        )
    }
} 

export default Bomb;