import * as CONSTANTS from '../utils/constants'

export default function counter(state = 0, action: any) {
    switch (action.type) {
        case CONSTANTS.INCREMENT:
            return state + 1
        case CONSTANTS.DECREMENT:
            return state - 1
        case CONSTANTS.INCREMENT_IF_ODD:
            return (state % 2 !== 0) ? state + 1 : state
        default:
            return state;
    }
}