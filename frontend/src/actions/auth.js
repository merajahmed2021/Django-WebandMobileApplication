import axios from 'axios';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
  } from './types';


  // CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
    // User Loading

    dispatch({ type: USER_LOADING });  
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/auth/user`, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: USER_LOADED,
          payload: res.data,
        });
      })
      .catch((err) => {
        // dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: AUTH_ERROR,
        });
      });
  };
  

export const login = (username, password) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ username, password });
  axios
    .post(`${process.env.REACT_APP_API_URL}/api/auth/login`, body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
    //   dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};






// REGISTER USER
export const register = ({ username, email,password }) => (dispatch) => {
    console.log('username',username);
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({ username, email, password }); 
    console.log(body); 
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/auth/register`, body, config)
      .then((res) => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        // dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: REGISTER_FAIL,
        });
      });
  };


// LOGOUT USER
export const logout = () => (dispatch, getState) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/auth/logout/`, null, tokenConfig(getState))
      .then((res) => {
        // dispatch({ type: 'CLEAR_LEADS' });
        dispatch({
          type: LOGOUT_SUCCESS,
        });
      })
      .catch((err) => {
          console.log(err);
        // dispatch(returnErrors(err.response.data, err.response.status));
      });
  };

// Setup config with token - helper function
export const tokenConfig = (getState) => {
    // Get token from state
    const token = getState().auth.token;
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };  
    // If token, add to headers config
    if (token) {
      config.headers['Authorization'] = `Token ${token}`;
    }
  
    return config;
  };
  
  
