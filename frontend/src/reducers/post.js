import {
    POST_LOAD,
    POST_LOAD_FAIL,
    DELETE_POST,
    ADD_POST
  } from '../actions/types';


const initialState = {
  posts: [],
};
  
export default function (state=initialState,action){

    switch(action.type){
        case POST_LOAD:
            return{
                ...state,
                posts:action.payload,
            }
        case DELETE_POST:
            return{
                ...state,
                posts:state.posts.filter((post)=>post.id!==action.payload),
            }    
        case ADD_POST:
            return{
                ...state,
                posts:[...state.posts,action.payload],
            }    
        case POST_LOAD_FAIL:
           return{
            ...state,
            posts:[],
           }
        default:
            return state;
    }
}




