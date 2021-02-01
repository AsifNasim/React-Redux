import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

// STEP1
// this function gets redux state as a parameter
// and returns an object
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
        buyCake: ()=> dispatch(buyCake())    
    }
}


// STEP3

// connect the above two functions with REACT COMPONENT

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CakeContainer)
