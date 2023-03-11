// import React, { useContext } from 'react'
// import {AuthContext} from "../../context/authContext"
// import { Navigate, Outlet } from 'react-router-dom'

// const PrivateRoutes = () => {
//     const {user} = useContext(AuthContext);
//     console.log(user);
//   return (
//     (user?.token) ? <Outlet /> : <Navigate to="/login"/> 
//   )
// }

// export default PrivateRoutes