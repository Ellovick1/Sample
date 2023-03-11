import React, {useContext, useEffect} from 'react'
import {mytenantContext} from '../../pages/merchantDashoard/MyTenant'
import axios from '../../axiosInstance'


const AddTenantTwo = props => {
    console.log(props);

    const {datas, setDatas} = props;

    const contextData = useContext(mytenantContext)
    console.log(contextData)
    const {step,setStep} = contextData;

//    const [datas, setDatas] = useState(props);

const getData = async () => {
          
    try {
          //   // Get Type Id
          const responseType = await axios.get("/apartments/search")
          console.log(responseType);

          if (responseType.statusText == 'OK') {
                // console.log(responseType.statusText)

                const apartmentID = responseType.data.data[2].apartment_id;
                // const apartmentID = responseType.data.apartment_id;
                console.log(apartmentID);

                setDatas({ ...datas, apartment_id:apartmentID });

          }


    } catch(err) {
          const errCode = err.response.data.error;
          // const errorMsg = errMsgs[errCode] ?? defaultErrMsg;
        console.log(err.response.data.error)  
    };
}

useEffect(() => {
    getData()


}, []
)


 
   const handleSubmit = async (e) => { 
       e.preventDefault();

       const response = await axios.post("/leases", JSON.stringify(datas))
       console.log(response);

       if (response.status == 201) {
             setStep(step + 1)

       }
    //    setStep(step + 1)
   }
  return (
    <div className='px-8 bg-[#f9f9f9] '>
            <div className="rounded py-4 px-4 border mt-7">
            <h3
                className="font-normal text-[1.2rem] leading-[28px] "
               >My Tenant
               </h3>
         </div>
    <div className='mt-[2rem] mx-auto max-w-screen-md'>
         
       
       <form 
        onSubmit = {handleSubmit}
       className=''>
                <div className="mb-5">
                    <label for="Flat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Flat</label>
                    <input 
                      value={datas.flat}
                    onChange={(e) => { setDatas({ ...datas, flat: e.currentTarget.value }); console.log(datas) }}
                    type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required="" />
                </div>
                <div className="mb-5">
                    <label for="move in date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Move in Date</label>
                    <input 
                      value={datas.move_in_at}
                    onChange={(e) => { setDatas({ ...datas, move_in_at: e.currentTarget.value }); console.log(datas) }}
                    type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="" />
                </div>
                <div className="mb-5">
                    <label for="rent expiry" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rent Expiry Date</label>
                    <input 
                      value={datas.move_out_on}
                    onChange={(e) => { setDatas({ ...datas, move_out_on: e.currentTarget.value }); console.log(datas) }}
                    type="text" id="repeat-email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="" />
                </div>
                <div className="mb-5">
                    <label for="rent amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rent Amount</label>
                    <input 
                      value={datas.rent_amount}
                    onChange={(e) => { setDatas({ ...datas, rent_amount: e.currentTarget.value }); console.log(datas) }}
                    type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="" />
                </div>
                <div className="mb-5">
                    <label for="agreement" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Upload Lease Agreement</label>
                    <input 
                      value={datas.lease_img}
                    onChange={(e) => { setDatas({ ...datas, lease_img: e.currentTarget.value }); console.log(datas) }}
                    type="file" id="file" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="" />
                </div>

                <div className='text-center text-[red] py-3'>
                    <small>*Please note that this lease agreement will be shared with the tenant*</small>
                </div>

                <div className="mb-5">
                    <label for="agreement" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Generate Lease Agreement from Mend</label>
                    <input 
                      value={datas.mend_lease_img}
                    onChange={(e) => { setDatas({ ...datas, mend_lease_img: e.currentTarget.value }); console.log(datas) }}
                    type="file" id="file" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="" />
                </div>

                <div className='flex justify-center mb-3'>
                    <button className='bg-[#7F3DFF] hover:bg-[#8a50ff] rounded-lg px-[4rem] py-2 text-white '>Add Tenant</button>
                </div>
            </form>

    </div>
    </div>
  )
}

export default AddTenantTwo
