import React from 'react'
import {useSelector, useDispatch } from 'react-redux'
// importing action creator
import { buyCake } from '../redux'
function HooksCakeContainer() {
    // this hook accept a function as a parameter
    // and the function is called the selector function
    // it receives redux state as its argument
  const numOfCakes =  useSelector( state => state.cake.numOfCakes)
//   useDispatch hook returns a reference to the dispatch function 
// from the redux store
  const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of cakes - {numOfCakes}</h2>
            <button onClick = { ()=> dispatch(buyCake()) }>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
