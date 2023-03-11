import {useState} from 'react'
import { useAuthContext } from './useAuthContext'
import axios from '../axiosInstance'

const useLogin = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const {dispatch} = useAuthContext();

    const login = async (user) => {
        setLoading(true)
        setError(null)

        try { 
            const response = await axios.post("/account/login",user)
            console.log(response)
            if(response.statusText == 'OK' ){ 
                console.log(response.statusText)
                // save the user token to local storage
                localStorage.setItem("user", JSON.stringify(response));
                // update the auth context
                dispatch({type: "LOGIN", payload: response})
                setLoading(false);
                setSuccess(true);
                return response;
           }
        }catch(err){ 
            const errCode = err.response.data.error;
            const errorMsg = errMsgs[errCode] ?? defaultErrMsg;
          console.log(err.response.data.error)  
            setLoading(false)
            setError(errorMsg)
            setSuccess(false)
        }  
        
    }
    return {login, loading, error, success}
};

const errMsgs = {
    INVALID_EMAIL: 'Email is invalid',
    INVALID_PASSWORD: 'Password is invalid',
  };
  const defaultErrMsg = 'An error occurred. Please try again and enter correct details';

export default useLogin