// import {useState} from 'react'
// import axios from '../axiosInstance'

// export const UseEmailVerification = () => { 
//     const [loading, setLoading] = useState(false)
//     const [success, setSuccess] = useState(false)

//    const emailVerification = async (values) => { 
//       try{
//         const response = await axios.post('/account/email/verify-request/:email',values)
//         console.log(response)  
//     }catch(err){ 
//         console.log(err)
//       }
//    }

//   return {emailVerification,loading,success}
// }


import {useState} from 'react'
import { useAuthContext } from './useAuthContext'
import axios from '../axiosInstance'

const UseEmailVerification = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const emailVerification = async (values) => {
        setLoading(true)
        setError(null)

        try { 
            const response = await axios.post("/account/email/verify?include_auth_token=1",values)
            console.log(response)
            if(response.statusText == 'OK'){ 
                console.log(response.statusText)
            
                setLoading(false)
                setSuccess(true)
           }
        }catch(err){ 
            const errCode = err.response.data.error;
            const errorMsg = errMsgs[errCode] ?? defaultErrMsg;
          console.log(err.response.data.error)  
            setLoading(false)
            setError(err.response.data.error)
            setSuccess(false)
        }  
        
    }
    return {emailVerification, loading, error, success}
};

const errMsgs = {
    INVALID_CODE: 'The code is invalid, please resend or check your email again',
    INVALID_EMAIL: 'Email is invalid',
  };
  const defaultErrMsg = 'An error occurred. Please try again and enter correct details';

export default UseEmailVerification