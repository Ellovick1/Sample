import React from 'react';
import centerImg from '../../../assets/dash-details-img/detailscenterImg.svg'
import {PropertyTopRightComponent} from './PropertyTopRightComponent'
import {PropertyOverviewBottomComponent} from './PropertyOverviewBottomComponent'
// import AddPropertyForm from '../../../components/modals/AddPropertyForm'
import AddPropertyList from '../../../components/modals/AddPropertyList'

const PropertyOverview = () => {

  const handlePropertyList = () => { 
    console.log('list is clicked')
  }

  return (
    <div className="overview px-8 font-Karla bg-[#f9f9f9]">
      <div className="top rounded-md py-4 mt-7 px-4 border bg-[#fff] mt-4 flex items-center justify-between">
            <h3
                className="font-normal text-[1.2rem] leading-[28px] "
               >My Property 
               </h3>
               
               <AddPropertyList />
         </div>
         
         <div className="center mt-7 flex items-start justify-between gap-[20px] flex-wrap">
               <div className="left flex-1 bg-[#fff] rounded-md px-4 py-3">
                    <p
                    className="text-[#7d7d7d] font-semibold leading-7 text-base"
                    >property details</p>
                    <div className="flex my-5 mb-10 gap-[30px] items-center">
                        <div className="innerLeft">
                          <img src={centerImg} alt="innerLeft image" className='object-fit'/>
                        </div>
                        <div className="innerRight">
                          <h4
                          className="font-bold font-Poppins text-lg leading-7"
                          >Treasure Homes</h4>
                          <p
                          className = " font-Inter font-regular text-base tracking-tighter"
                          >13,Shoyemi street,Ikeja</p>
                          <p className=" mt-[1px] text-[#DD2929] font-Inter font-semibold tracking-tight text-sm leading-4">unverified</p>
                        </div>
                    </div>
               </div>
               <div className="right flex-1 bg-[#fff] rounded-md px-4 py-3">
               <h5
                    className="text-[#7d7d7d] font-semibold leading-7 text-base"
                    >Total Number of Tenants</h5>
                    <div className="my-4 grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                      <PropertyTopRightComponent type="A" />
                      <PropertyTopRightComponent type="B"/>
                      <PropertyTopRightComponent type="C"/>
                      <PropertyTopRightComponent type="D"/>
                      <PropertyTopRightComponent type="E"/>
                      <PropertyTopRightComponent type="F"/>
                    </div>
               </div>
         </div>
         <div className="bottom bg-[#f9f9f9] mt-7 ">
                <PropertyOverviewBottomComponent />  
         </div>
    </div>
  );
}

export default PropertyOverview;


