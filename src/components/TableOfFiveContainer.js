import React from 'react'
import  { connect } from 'react-redux'
import { tableOfFive } from '../redux'


function TableOfFiveContainer(props) {
    return (
        <div>
            <h2>5 x {props.countTable} = {props.startFiveTable}</h2>
            <button onClick = {props.tableOfFive}>Generate</button>
        </div>
    )
}


const mapStateToProps = state =>{
    return {
        startFiveTable: state.table.startFiveTable
    }
}


const mapDispatchToProps = dispatch => {
    return {
        tableOfFive: () => dispatch(tableOfFive())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(TableOfFiveContainer)
