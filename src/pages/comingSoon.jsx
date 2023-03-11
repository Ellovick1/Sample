import React from 'react'
import Nav from '../components/navbars/LatestLandingNavbar'


export const ComingSoon = () => {
    return (
      <>
        <section>
            <Nav />
              <div className='relative'>
              <div className='absolute top-0 font-bold text-black bottom-0 left-0 right-0 m-auto w-fit '
              style={{top: "10rem", fontWeight: "bold", fontSize: "2rem"}}
              >
               Coming Soon!...
               </div>
              </div>
        </section>
      </>
    );
  };
  