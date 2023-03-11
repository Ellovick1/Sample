import {useState} from 'react'
import { useAuthContext } from './useAuthContext'
import axios from '../axiosInstance'

// const useLogout = () => {
//     const {dispatch} = useAuthContext()
//     function logout() {
//         // remove user from storage
//         localStorage.removeItem("user")

//         // DISPATCH LOGOUT ACTIONS
//         dispatch({type: "LOGOUT"})
//     }
//     return {logout}
// }

// export default useLogout

const useLogin = () => {
    // const [loading, setLoading] = useState(false)
     
    const [success, setSuccess] = useState(false)
    const {dispatch} = useAuthContext()
    const [error, setError] = useState(null)
    const logout = async (user) => {
        // setLoading(true)
        setError(null)

        try { 
            const response = await axios.post("/account/logout",user)
            console.log(response)
            if(response.statusText == 'OK'){ 
                console.log(response.statusText)
                //  remove user from storage
                     localStorage.removeItem("user")

               // DISPATCH LOGOUT ACTIONS
                    dispatch({type: "LOGOUT"})
                // setLoading(false)
                setSuccess(true)
           }
        }catch(err){ 
          console.log(err.response.data.error)  
            // setLoading(false)
            setError(err.response.data.error)
            setSuccess(false)
        } 
    }
    return {logout}
};


  const defaultErrMsg = 'An error occurred. Please try again and enter correct details';

export default useLogin