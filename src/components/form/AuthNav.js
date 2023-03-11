import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Frame.svg";

function AuthNav() {
  // const [page, setPage] = useState("")
  // useEffect(() => {
  //   checkPage()
  // }, [])
  
  // function checkPage() {
  //   if(routePageName === "Login"){
  //     setPage("/login")
  //   }if(routePageName === "Sign Up"){
  //     setPage("/SignUp")
  //   }
  // }
  return (
    <nav className="flex justify-between align-middle h-16 px-4 py-2 md:px-12">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="items-center space-x-4 flex">
        <p className="text-[#4F4F4F] hidden sm:block">Have an Account?</p>
        <Link to= "/login" className="bg-white py-2 px-8 text-[#4857EC] border-2 border-[#CAD4DD] rounded-md hover:outline-1 hover:outline hover:outline-themePurple">
         Login
        </Link>
      </div>
    </nav>
  );
}

export default AuthNav;

