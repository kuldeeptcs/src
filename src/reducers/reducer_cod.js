import { FETCH_COD } from "../actions/index";

export default function(state =null, action){
    //console.log('Action received', action);
    switch(action.type){
        case FETCH_COD:
        // debugger    
         return action.payload;
            
    }
    return state;
}