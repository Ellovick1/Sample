// import { Google } from "@mui/icons-material";
// import FormPagination from "./FormPagination";
import GoogleAuthentication from "./GoogleAuthentication";
import NewSignInFormInputs from "./NewSignInFormInputs"
// import {useState} from "react"
// import {useNavigate} from "react-router-dom"
// import { app } from '../../firebase'
// import { getFirestore, collection, query, where } from "firebase/firestore"
// import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth'


function NewSignup() {
  // const [error, setError] = useState(false);
  // const [success, setSuccess] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();


  // // initialize services
  // const auth = getAuth()
  // const provider = new GoogleAuthProvider();
  // const db = getFirestore();

  // // collection ref
  // const colRef = collection(db, "users");
  // // find user // form
  // function findUser(email, password) {
  //   setLoading(true)
  //   const q = query(colRef, where("email", "==", email))
  //   if (q) {
  //     signInWithEmailAndPassword(auth, email, password)
  //     .then(()=>{
  //       setSuccess(true)
  //       setError(false)
  //       setTimeout(() => {
  //         navigate("/merchant-dashboard")
  //         setLoading(false)
  //       }, 5000);
  //     }) 
  //     .catch(err=>{
  //       console.log(err)
  //       setLoading(false);
  //       setSuccess(false)
  //       setError(true)
  //     })
  //   }
  // }

  // // login with email
  // function loginUser(e) {
  //   e.preventDefault()
  //   const email = e.target.email.value
  //   const password = e.target.password.value
  //   findUser(email, password)
  // }

  // google authentication
  // function googleAuth (){
  //   setLoading(true)
  //   signInWithPopup(auth, provider)
  //   .then((result) => {
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;
  //     // The signed-in user info.
  //     const user = result.user;
  //     setSuccess(true)
  //     setError(false)
  //     setTimeout(() => {
  //       navigate("/merchant-dashboard")
  //       setLoading(false)
  //     }, 5000);
  //   })
  //   .catch(err=>{
  //     console.log(err)
  //     setLoading(false);
  //     setSuccess(false)
  //     setError(true)
  //   })
  // }
  return (
    <div className="max-w-[25rem] w-full mx-auto ">
      
      <div className="h-fit bg-[#fff] rounded-md py-3 ">
      
        <h5 className="text-3xl text-center pt-4 px-8 py-4 text-[2em] font-[600]">
          Sign In
        </h5> 
         <GoogleAuthentication  /> 
         {/* <GoogleAuthentication google={googleAuth} />  */}
        <NewSignInFormInputs/>
        {/* <NewSignInFormInputs loader={loading} isSuccess={success} isError={error} login={loginUser} /> */} 

      </div>
    </div>
  );
}

export default NewSignup;
