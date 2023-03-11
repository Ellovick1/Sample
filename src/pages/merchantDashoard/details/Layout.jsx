import React,{useState,createContext} from 'react';
import NotRegistered from './NotRegistered'
import PropertyInformation from './PropertyInformation'
import VerifyProperty from './VerifyProperty'
import  SuccessMessage from './SuccessMessage'
import  PropertyOverview from './PropertyOverview'


export const layoutContext = createContext() 

const Layout = () => {

   const [step,setStep ] =  useState(1)

   const DisplayPage = () => {
       if(step === 1){ 
            return <NotRegistered />
       }else if(step ===2){
             return <PropertyInformation />
       }else if (step === 3){ 
              return <VerifyProperty />
       }else if(step === 4){ 
              return <SuccessMessage/>
       }else {
             return <PropertyOverview />
       }
}

  return (
    <layoutContext.Provider value = {{step,setStep}}>
          
        <DisplayPage />
  
    </layoutContext.Provider>
   
  );
}

export default Layout;
