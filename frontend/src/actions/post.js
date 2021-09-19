import axios from 'axios';
import {
    POST_LOAD,
    POST_LOAD_FAIL,
    DELETE_POST,
    ADD_POST   
     // POST_CREATE_FAIL,
  } from './types';
import { tokenConfig } from './auth';


export const getPost = () => (dispatch,getState) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts/`, tokenConfig(getState))
      .then((res) => {
          console.log(res.data);
        dispatch({
          type: POST_LOAD,
          payload: res.data,
        });
      })
      .catch((err) => {
          console.log(err);
          dispatch({
            type: POST_LOAD_FAIL,
          });
      });
  };

  export const deletePost=(id)=>(dispatch,getState)=>{
      axios.delete(`${process.env.REACT_APP_API_URL}/posts/`,tokenConfig(getState))
      .then((res)=>{
          dispatch({
              type:DELETE_POST,
              payload:id,
          })
      })
      .catch((err) => console.log(err));
  }


  // ADD LEAD
export const addPost= (title,content) => (dispatch) => {
    console.log('Post DATA ',title,content);
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
        },
      };
    axios.post(`${process.env.REACT_APP_API_URL}/posts/create/`, config)
      .then((res) => {
        dispatch({
          type: ADD_POST,
          payload: res.data,
        });
      })
      .catch((err) =>console.log(err));
  };
  
  