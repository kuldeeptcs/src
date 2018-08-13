import { FETCH_CC } from "../actions/index";

export default function(state =null, action){
    //console.log('Action received', action);
    switch(action.type){
        case FETCH_CC:
        // debugger    
         return action.payload;
            
    }
    return state;
}