const initalState = {
    counter:0
}
const reducer = (state=initalState,action)=>{
    switch(action.type){
        case 'INC_COUNTER':
        return {
            ...state,counter:state.counter+action.payload
        }
        case 'DEC_COUNTER':
        return{
            ...state,counter:state.counter-1
        }
        default:
        return state
    }
    
}

export default reducer