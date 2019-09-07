import {type as findPostSuccess, typeError as findPostError} from '../actions/findPost'
const defaultState=[];

function reducer(state=defaultState, {type,payload}){ 
    console.log("type:",type);   
    console.log("payload:",payload);   
    switch (type) {
        case findPostSuccess:
            return payload;  
        case findPostError:
            return payload;  
        default:
            return state;
    }

}
export default reducer;