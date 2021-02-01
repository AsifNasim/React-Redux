import React, {useState} from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1);
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <input  type="text" value ={number}  onChange = {e => setNumber(e.target.value)}/>
            <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    )
}

// STEP1
// this function gets redux state as a parameter
// and returns an object
// second para is the props that has already be passed to the component and
// it is referred to as ownProps
const mapStateToProps = state => {
    return {
        numOfCakes : state.cake.numOfCakes
    } 
}

// STEP2
// this function gets redux dispatch method as parameter
// and returns an object
const mapDispatchToProps = dispatch =>{
    return {
        buyCake: number=> dispatch(buyCake(number))    
    }
}


// STEP3

// connect the above two functions with REACT COMPONENT

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(NewCakeContainer)
