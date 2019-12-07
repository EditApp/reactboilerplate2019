//return function with action
/// NEW STORE 
export default function(state={}, action) {

    switch(action.type){
        case 'GET_MOVIES':
            return {...state, moviesList:action.payload}
        default:
            return state;
    }

}
/// NEW STORE 

