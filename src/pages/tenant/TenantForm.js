import React, { useState } from 'react'
import { app } from '../../firebase'
import { getFirestore, addDoc, collection } from "firebase/firestore"
import { useNavigate } from 'react-router-dom';

const TenantForm = () => {
    let history = useNavigate();
    // const [success, setSuccess] = useState(false)
    // initialize services
    const db = getFirestore();

    // collection ref
    const colRef = collection(db, "tenants");

    function addTenant(e) {
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
            alert("Congratulations! 🥳 You have been registered as a tenant.")
            history("/tenant-dashboard")
        }).catch(error=>{
            console.log(error);
            alert(error)
        })
    }
  return (
    <div>
        <div className='text-center mt-16'>
            <h1 className='text-[#343172d3] text-2xl md:text-3xl font-bold my-3'>Complete your account</h1>
            <p className='text-gray-700'>Nobody but you and <strong>Mend Inc</strong> will see this information. Only relevant information will be shared publicly on the platform 🙂</p>
        </div>
        <div>
            <form className='mt-10 md:mt-16 md:grid grid-cols-2 gap-10 px-5 md:px-40 text-sm' onSubmit={addTenant}>
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
                <button type='submit' className='bg-[#7F3DFF] text-gray-100 px-7 py-2 rounded-full my-5 text-lg'>Submit 🚀</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default TenantForm