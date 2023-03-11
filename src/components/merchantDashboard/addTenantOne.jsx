import React, { useContext } from 'react'
import { mytenantContext } from '../../pages/merchantDashoard/MyTenant'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
// import useState  from 'react';
// import axios from '../../../axiosInstance'

const AddTenantOne = props => {
    console.log(props);

    const { datas, setDatas } = props;

    const contextData = useContext(mytenantContext)
    console.log(contextData);
    const { step, setStep } = contextData;


    //    const [datas, setDatas] = useState(props);

    const handleSubmit = e => {
        e.preventDefault();
        setStep(step + 1)
    }

    return (
        <div className='px-8 bg-[#f9f9f9] '>
            <div className="rounded py-4 px-4 border mt-7">
                <h3
                    className="font-normal text-[1.2rem] leading-[28px] "
                >My Tenant
                </h3>
            </div>
            <div className="mt-[2rem] mx-auto max-w-screen-md">

                <div className='flex justify-center mb-3 w-20 h-20 rounded-full bg-[#d1d0d0] mx-auto items-center'>
                    <CameraAltOutlinedIcon />
                </div>
                <div className='text-center text-[#d1d0d0] '>
                    <small>Upload photo. It will help in easy identification</small>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className=''>
                    <div className="mb-5">
                        <label for="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                        {/* <input  
                    value={datas.name}
                    onChange={(e) => { setDatas({ ...datas, name: e.currentTarget.value }); console.log(datas) }}
                    type="text" className="w-full rounded-lg py-[10px] px-[20px] border border-black bg-transparent outline-none placeholder:text-[#c6c6c6] placeholder:text-base" /> */}

                        <input
                            type="text"
                            // value={name}
                            // onChange={(e) => setName(e.target.value)}
                            value={datas.name}
                            onChange={(e) => { setDatas({ ...datas, name: e.currentTarget.value }); console.log(datas) }}
                            placeholder="E.g Treasure Home"
                            className="w-full rounded-lg py-[10px] px-[20px] border border-black bg-transparent outline-none placeholder:text-[#c6c6c6] placeholder:text-base"
                        />
                    </div>
                    <div className="mb-5">
                        <label for="Company(Optional)" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company(Optional)</label>
                        <input
                            value={datas.company}
                            onChange={(e) => { setDatas({ ...datas, company: e.currentTarget.value }); console.log(datas) }}
                            type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="" />
                    </div>
                    <div className="mb-5">
                        <label for="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                        <input type="email" id="repeat-email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="" />
                    </div>
                    <div className="mb-5">
                        <label for="Phone Number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
                        <input
                            value={datas.phone_no}
                            onChange={(e) => { setDatas({ ...datas, phone_no: e.currentTarget.value }); console.log(datas) }}
                            type="number" id="number" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="" />
                    </div>
                    <div className="mb-5">
                        <label for="Gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gender</label>
                        <input
                            value={datas.gender}
                            onChange={(e) => { setDatas({ ...datas, gender: e.target.value }); console.log(datas) }}
                            type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="" />
                    </div>

                    <div className='flex justify-center mb-3'>
                        <button className='bg-[#7F3DFF] hover:bg-[#8a50ff] rounded-lg px-[4rem] py-2 text-white '>Next</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default AddTenantOne
