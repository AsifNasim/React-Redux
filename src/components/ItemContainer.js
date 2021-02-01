import React from 'react'
import { connect } from 'react-redux'
function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
        </div>
    )
}

// By convention second parameter named as ownProps
const mapStateToProps = (state, ownProps)=>{
    // conditionally assigning the redux state
    // passing the parent prop
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.
    iceCream.numOfIceCreams
    // then we return an object 
    return {
        item : itemState
    } 
}

export default connect(mapStateToProps)(ItemContainer)
