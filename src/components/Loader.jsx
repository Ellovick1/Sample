import React from 'react';
import img from '../assets/dash-details-img/preloading-gif-5.gif'

const Loader = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'> 
       <div>
           <img src = {img}  alt='image of a loader'/>
        </div>  
    </div>
  );
}

export default Loader;
