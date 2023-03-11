// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import useSignup from "../../hooks/useSignup";
// // import AuthNav from "./authNav";
// // import AuthFooter from "./authFooter";

// const Signup = () => {
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [address, setAddress] = useState("")
//   const [phone, setPhone] = useState("")
//   const [country, setCountry] = useState("")
//   const [role, setRole] = useState("")
//   const {signup, error, loading, success} = useSignup()
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     await signup(name, email, password, address, phone, country, role)
//   }

//   useEffect(() => {
//     setTimeout(() => {
//       success && navigate("/merchant-dashboard")
//     }, 3000);
//   }, [success])

//   return (
//     <div className=" box-border ">
//       <div className="h-screen bg-[#D9D9D9] relative">
//         {/* <AuthNav /> */}

//         <div className="max-w-md w-full min-h-[70vh] bg-[#fff] rounded-md  absolute top-0 bottom-0 right-0 left-0 m-auto ">
//           {/* <div>
//             <h1 className="font-bold text-3xl md:text-4xl pb-10 text-[#7F3DFF]">
//               Register
//             </h1>
//             <p className="text-[#7F3DFF] pb-5 text-lg md:text-xl font-medium hidden md:block">
//               Ready to start accessing and renting out apartments? register now.
//             </p>
//             <p className="text-gray-600 mb-8">
//               Let's get you all set up so you can start setting up your landlord
//               or tenant account!
//             </p>
//           </div> */}

//           <form onSubmit={handleSubmit} className=" p-8 ">
//           <div>
//           {
//             error && <p className='errorStyle my-4'>{error}</p>
//           }
//           {
//             success && <p className='successStyle my-4'>You have successfully signed up!</p>
//           }
//           <input 
//             className='inputStyle'
//             type="text"
//             placeholder='Enter your full name'
//             onChange={(e) => setName(e.target.value)}
//             value={name} />
//             <input 
//             className='inputStyle'
//             type="email"
//             placeholder='Enter your email'
//             onChange={(e) => setEmail(e.target.value)}
//             value={email} />
//             <input 
//             className='inputStyle'
//             type="password"
//             placeholder='Password'
//             onChange={(e) => setPassword(e.target.value)}
//             value={password} />
//             <input 
//             className='inputStyle'
//             type="text"
//             placeholder='Enter your current address'
//             onChange={(e) => setAddress(e.target.value)}
//             value={address} />
//             <input 
//             className='inputStyle'
//             type="number"
//             placeholder='Enter your phone number'
//             onChange={(e) => setPhone(e.target.value)}
//             value={phone} />
//             <input 
//             className='inputStyle'
//             type="text"
//             placeholder='Enter your Country'
//             onChange={(e) => setCountry(e.target.value)}
//             value={country} />
//             <input 
//             className='inputStyle'
//             type="text"
//             placeholder='Enter your Role'
//             onChange={(e) => setRole(e.target.value)}
//             value={role} />
//             {/* <select value={role}>
//               <option>Select a role</option>
//               <option>Landlord</option>
//               <option>Tenant</option>
//             </select> */}
//             {/* <input 
//             className='inputStyle'
//             type="text"
//             placeholder='Are you sign'
//             onChange={(e) => setEmail(e.target.value)}
//             value={email} /> */}
//           </div>
//           <button disabled={loading} className='formButton' type='submit'>{
//                 loading ? "Loading..." : "Create Account"
//             }</button>
//             <br />
//             <Link to="/account/login" className="text-gray-600">
//               Already registered?
//               <span className="text-[#7F3DFF]">Sign in!</span>
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
