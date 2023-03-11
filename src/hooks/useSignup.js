import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import axios from '../axiosInstance';

const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (name, email, password, phone) => {
    setLoading(true);
    setError(null);
    // const response = await fetch("https://mend-backend.onrender.com/api/v1/account/signup", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({name, email, password, address, phone, country, role})
    // })
    // console.log(response)
    // const json = await response.json();
    // console.log(json)

    const user = { name, email, password, phone };
    try {
      const response = await axios.post('/account/signup', user);
      if (response.status === 201) {
        // save the user token to local storage
        localStorage.setItem('user', JSON.stringify(response));

        // update the auth context
        dispatch({ type: 'LOGIN', payload: response });
        setLoading(false);
        setSuccess(true);
      }
    } catch (err) {
      const errCode = err.response.data.error;
      const errorMsg = errMsgs[errCode] ?? defaultErrMsg;
      console.log('error', errCode, errorMsg);
      setLoading(false);
      setError(errorMsg);
      setSuccess(false);
    }

    // if(!response.ok){
    //     setLoading(false)
    //     setError(json.error)
    //     setSuccess(false)
    // }
    // if(response.ok){
    //     // save the user token to local storage
    //     localStorage.setItem("user", JSON.stringify(json))

    //     // update the auth context
    //     dispatch({type: "LOGIN", payload: json})
    //     setLoading(false)
    //     setSuccess(true)
    // }
  };
  return { signup, loading, error, success };
};

const errMsgs = {
  INVALID_PHONE: 'Phone number is invalid',
  WEAK_PASSWORD: 'Password must be at least 8 characters long',
  INVALID_NAME: 'Name is invalid',
  INVALID_EMAIL: 'Email is invalid',
  USER_EXISTS: 'Email already used by another user',
};
const defaultErrMsg = 'An error occurred. Please try again and enter correct details';
export default useSignup;
