// we will define our action cretor here
import {BUY_CAKE} from './cakeTypes'

// exporting our action creator so that we could use it in our components
// we initialize number with one so that other component works perfectly
export const buyCake = (number = 1) =>{
    return {
        type: BUY_CAKE,
        // payload is added here, we can name it anything but
        // it is convention to use object name as 'payload'
        payload: number
    }
}