import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of IceCreams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy Ice-Cream</button>
        </div>
    )
}

// STEP1
// this function gets redux state as a parameter
// and returns an object
const mapStateToProps = state => {
    return {
        buyIceCream : state.iceCream.buyIceCream
    } 
}

// STEP2
// this function gets redux dispatch method as parameter
// and returns an object
const mapDispatchToProps = dispatch =>{
    return {
        buyIceCream: ()=> dispatch(buyIceCream())    
    }
}


// STEP3

// connect the above two functions with REACT COMPONENT

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(IceCreamContainer)
