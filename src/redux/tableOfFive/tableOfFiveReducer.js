import { TABLE_OF_FIVE } from './tableOfFiveTypes'

const initialState = {
    startFiveTable : 5,
    countTable:1
}

const tableOfFiveReducer = (state= initialState, action) => {
    switch(action.type){
        case TABLE_OF_FIVE:
            return {
                ...state,
                startFiveTable: state.startFiveTable+5,
                count : state.countTable+1
            }
        default : return state
    }
}

export default tableOfFiveReducer