
import {useState} from 'react'
import { useAuthContext } from './useAuthContext'
import axios from '../axiosInstance'

const UseVerificationCode = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const verificationCode = async (values) => {
        setLoading(true)
        setError(null)

        try { 
            const response = await axios.post(`/account/email/verify-request/${values}`)
            console.log(response)
            if(response.statusText == 'OK'){ 
                console.log(response.statusText)
            
                setLoading(false)
                setSuccess(true)
           }
        }catch(err){ 
          console.log(err.response.data.error)  
            setLoading(false)
            setError(err.response.data.error)
            setSuccess(false)
        }  
        
    }
    return {verificationCode, loading, error, success}
}

export default UseVerificationCode