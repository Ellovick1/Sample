import { Google } from "@mui/icons-material";
import { useState } from "react";
import {app} from "../../firebase"
import { Link, useNavigate } from "react-router-dom";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import FormPagination from "./FormPagination";
import GoogleAuthentication from "./GoogleAuthentication";
import NewSignUpFormInputs from "./NewSignUpFormInputs";

function NewSignup() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Initialize services
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const db = getFirestore();

  // collection ref
  const colRef = collection(db, "users");

  // add user to db // form
  function addUser(email, phone, password) {
    addDoc(colRef, {
      email: email,
      phone: phone,
      password: password,
    })
      .then((result) => {
        console.log(result);
        setLoading(false);
        setSuccess(true)
        setError(false)
      })
      .catch((error) => {
        setLoading(false);
        setSuccess(false)
        setError(true)
      });
  }
  // add user to db // google
  const addUserGoogle = (user) => {
    addDoc(colRef, {
      email: user.email,
    })
      .then((result) => {
        console.log(result)
        setLoading(false);
        setSuccess(true)
        setError(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setSuccess(false)
        setError(true)
      });
  };
  // email authentication
  function checkUser(email, phone, password) {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        addUser(email, phone, password);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        setSuccess(false)
        console.log(err);
      });
  }
  // google authentication
  function googleAuth() {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        addUserGoogle(user);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
        setSuccess(false)
        console.log(error);
      });
  }
  return (
    <div className="mx-4 z-50">
      <div className=" max-w-[25rem] w-full mx-auto h-fit bg-[#fff] rounded-md  ">
        <FormPagination />
        <h5 className="text-3xl text-center pt-4 px-8 text-[2em] font-[600]">
          Create an account
        </h5>
        <GoogleAuthentication auth={googleAuth} add={addUserGoogle} />
        <NewSignUpFormInputs check={checkUser} isSuccess={success} isError={error} loader={loading} />
      </div>
    </div>
  );
}

export default NewSignup;
