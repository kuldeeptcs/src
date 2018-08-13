import { FETCH_ADMIN } from "../actions/index";

export default function(state =null, action){
    //console.log('Action received', action);
    switch(action.type){
        case FETCH_ADMIN:
         return action.payload;
            
    }
    return state;
}