import React from 'react'
import Card from './components/Card'
import Header from './components/Header'
import TenantSidebar from './components/TenantSidebar'

const Apartments = () => {
  return (
    <div>
      <div className='md:grid grid-cols-8'>
            <div className='col-span-2'>
                <TenantSidebar />
            </div>
            <div className='col-span-6 px-4'>
              <div className='mb-5'>
                <Header title="Rent Overview" />
              </div>
              <div className='md:grid md:grid-cols-5 py-5 w-full'>
                <div className='mb-2 md:mr-2'>
                  <Card value="N/A" description="Total rent paid"/>
                </div>
                <div className='mb-2 md:mr-2'>
                  <Card value="N/A" description="Total rent due"/>
                </div>
                <div className='mb-2 md:mr-2'>
                  <Card value="N/A" description="Total rent due"/>
                </div>
                <div className='mb-2 md:mr-2'>
                  <Card value="N/A" description="Total rent due"/>
                </div>
                <div className='mb-2 md:mr-2'>
                  <Card value="N/A" description="Total rent due"/>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Apartments