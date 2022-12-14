import {createContext, useReducer} from 'react';
import axios from 'axios';
import authReducer from './authReducer';
import * as ActionTypes from '../ContextActions';

export const AuthContext = createContext();

export default function AuthState(props) {

    const initialState = {
        token: localStorage.getItem('token'),
        currentUser: null,
        toasts: null,
        isAuthenticated: null,
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('token'),
        }
    }

    // #region --------------[ Actions ]--------------
    
    const registerUser = async (userData) => {
        try {
            const res = await axios.post('/api/users/register', userData, config);
            dispatch({
                type: ActionTypes.REGISTER_SUCCESS,
                payload: res.data
            })
        } catch (err) {
            console.log(err.response.data);
            dispatch({
                type: ActionTypes.REGISTER_FAIL,
                payload: err.response.data,
            })
        }
    }

    

    const logoutUser = async () => {
        dispatch({
            type: ActionTypes.LOGOUT,
        })
    }

    const clearErrors = () => {
        dispatch({
            type: ActionTypes.CLEAR_ERRORS,
        })
    }




    // #endregion

    return (
        <AuthContext.Provider value={{
            token: state.token,
            currentUser: state.currentUser,
            toasts: state.toasts,
            isAuthenticated: state.isAuthenticated,
            registerUser,
            logoutUser,
            clearErrors,
            
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}