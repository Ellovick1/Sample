import React, {useState, createContext} from 'react';
import NoTenantPage from "../../components/merchantDashboard/NoTenants"
import AddTenantOnePage from "../../components/merchantDashboard/addTenantOne"
import AddTenantTwoPage from "../../components/merchantDashboard/addTenantTwo"
import AddTenantDashboard from "../../components/merchantDashboard/addTenantDashboard"
import  SuccessMessage from '../../components/merchantDashboard/successMessage'

export const mytenantContext = createContext() 

const MyTenant = () => {

  const [datas, setDatas] = useState(
    {
          name: "",
          email: "",
          company: "",
          phone_no: "",
          gender: "",
          flat: "",
          apartment_id: "",
          move_in_at: "",
          move_out_on: "",
          rent_amount: "",
          lease_img: "",
          mend_lease_img: ""

    }

);

  const [step,setStep ] =  useState(1)

  const DisplayPage = () => {
      if(step === 1){ 
           return <NoTenantPage />
      }else if(step ===2){
            return <AddTenantOnePage 
            datas = {datas}
            setDatas = {setDatas}
            />
      }else if (step === 3){ 
             return <AddTenantTwoPage 
             datas = {datas}
             setDatas = {setDatas}
             />
      }else if(step === 4){ 
             return <SuccessMessage/>
      }else {
            return <AddTenantDashboard />
      }
    }
      return (
        <mytenantContext.Provider value = {{step,setStep}}>
              
            <DisplayPage />
      
        </mytenantContext.Provider>
       
      );
}

export default MyTenant;
