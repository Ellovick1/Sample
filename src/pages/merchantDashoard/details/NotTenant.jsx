import img from '../../../assets/dash-details-img/tenantImage.svg'


export const NotTenant = () => { 

    return ( 
      <div>
        <div className="flex justify-center my-6">

        <img src = {img}  alt ="image of no tenant"/>
        </div>

       <div>
          <h3 
             className="text-[#402574] font-semibold text-3xl leading-9 text-center my-3"
             >No Tenant</h3>
             <p className="text-[#91919f] font-regular text-xl leading-7 text-center">When tenant are added,they will be</p>
            <p  className="text-[#91919f] font-regular text-xl leading-7 text-center">displayed here</p>
       </div>
      </div>
    ) 
}