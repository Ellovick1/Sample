import React, { useState } from 'react'
import { app } from '../../firebase'
import { getFirestore, addDoc, collection } from "firebase/firestore"
import { useNavigate } from 'react-router-dom';

const LandlordForm = () => {
    const [loading, setLoading] = useState(false)
    let history = useNavigate();
    // const [success, setSuccess] = useState(false)
    // initialize services
    const db = getFirestore();

    // collection ref
    const colRef = collection(db, "landlords");

    function addLandlord(e) {
        setLoading(true)
        e.preventDefault()
        addDoc(colRef, {
            title: e.target.title.value,
            fullname: e.target.fullName.value,
            email: e.target.email.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
            gender: e.target.gender.value
        }).then(result=>{
            console.log(result);
            alert("Congratulations! 🥳 You have been registered as a landlord.")
            setTimeout(() => {
                history("/landlord-dashboard")
                setLoading(false)
            }, 2000);
        }).catch(error=>{
            console.log(error);
            alert(error)
            setLoading(false)
        })
    }
  return (
    <div>
        <div className='text-center mt-16'>
            <h1 className='text-[#343172d3] text-2xl md:text-3xl font-bold my-3'>Complete your account</h1>
            <p className='text-gray-700'>Nobody but you and <strong>Mend Inc</strong> will see this information. Only relevant information will be shared publicly on the platform 🙂</p>
        </div>
        <div>
            <form className='mt-10 md:mt-16 md:grid grid-cols-2 gap-10 px-5 md:px-40 text-sm' onSubmit={addLandlord}>
            <div>
                <div className='my-4'>
                    <label className='text-gray-500' htmlFor='title'>Title *</label>
                    <input className='mt-2 border border-gray-200 outline-purple-50 rounded-full py-2 md:py-3 px-3 w-full text-gray-600' type="text" name='title' placeholder='Mr, Mrs or Miss' required />
                </div>
                <div className='my-4'>
                    <label className='text-gray-500' htmlFor='fullName'>Fullname *</label>
                    <input className='mt-2 border border-gray-200 outline-purple-50 rounded-full py-2 md:py-3 px-3 w-full text-gray-600' type="text" name='fullName' required />
                </div>
                <div className='my-4'>
                    <label className='text-gray-500' htmlFor='email'>Email *</label>
                    <input className='mt-2 border border-gray-200 outline-purple-50 rounded-full py-2 md:py-3 px-3 w-full text-gray-600' type="email" name='email' required />
                </div>
            </div>
            <div>
                <div className='my-4'>
                    <label className='text-gray-500' htmlFor='address'>Address *</label>
                    <input className='mt-2 border border-gray-200 outline-purple-50 rounded-full py-2 md:py-3 px-3 w-full text-gray-600' type="text" name='address' required />
                </div>
                <div className='my-4'>
                    <label className='text-gray-500' htmlFor='phone'>Phone number *</label>
                    <input className='mt-2 border border-gray-200 outline-purple-50 rounded-full py-2 md:py-3 px-3 w-full text-gray-600' type="text" name='phone' required />
                </div>
                <div className='my-4'>
                    <label className='text-gray-500' htmlFor='gender'>Gender *</label>
                    <input className='mt-2 border border-gray-200 outline-purple-50 rounded-full py-2 md:py-3 px-3 w-full text-gray-600' type="text" name='gender' required />
                </div>
            </div>
            <div>
                <button type='submit' className={`${loading ? "bg-white" : "bg-[#7F3DFF]"} text-gray-100 px-7 py-2 rounded-full my-5 text-lg`}>{
                loading ? <svg role="status" class="w-8 h-8 mr-2 text-gray-400 animate-spin dark:text-gray-400 fill-[#7F3DFF]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg> : "Submit"
              }</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default LandlordForm