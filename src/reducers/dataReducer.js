import {FETCH_TODOS} from "../actions/dataAction";

const initialState={
    data: []
}

export default (state=initialState,action)=>{
    switch(action.type){
        case FETCH_TODOS:
            console.log(action.payload)
            return {
                ...state,
                data:action.payload
                
            }
        default:
            return state;
    }
}