import { USER_SIGNIN, USER_SIGNUP } from './actions/ActionTypes'

export const initState = null

export const userReducer = (state, action) =>{
    if(action.type === USER_SIGNIN){
        return action.payload
    }
    return state
}

export const userSignupDemo = (state, action) =>{
    if(action.type === USER_SIGNUP){
        return action.payload
    }
    return state
}