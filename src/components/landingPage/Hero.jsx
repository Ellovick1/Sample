import React from 'react';
import image1 from '../../assets/heroImg4.svg'
import image2 from '../../assets/heroImg1.svg'
import image3 from '../../assets/heroImg3.svg'
import {Link} from 'react-router-dom'
import './hero.css'


const Hero = ({type,color,bgColor}) => {
  console.log(type,color,bgColor)

  let data;
  switch(type){ 
    case 'landlord':
      data = { 
        name:'Landlord',
        color:"#E09700",
        bgColor:'#FFF7D6',
        img:image1,
        
        content:" Our easily used self service platform enables landlords to manage their various properties and tenants in one place thereby limiting various manual documentaation phone calls etc. In 5 minutes, a landlord can record a transaction accurately and easily.",
      }
      break;
      case 'tenant':
      data = { 
      name : 'Tenants',
      color:"#FF6F6F",
      bgColor:'#FFE7E7',
      img:image2,
      marginTop: '50px',
      content:"With our tenant self service portal, tenants can easily self record their payments, sign documents, request for maintenance , tenants can easily self record their payments." 
      }
      break;
      case 'manager':
        data = { 
          name:'Property Managers',
          color:"#DB92D3",
          bgColor:'#FFEFFD',
          img:image3,
          content:"With our tenant self service portal, tenants can easily self record their payments, sign documents, request for maintenance, tenants can easily self record their payments and even list vacant properties at ease without haaving to visit an agent's office." 
        }
        break;
        default:
          break;
  }
  return (
    <div className="">
    <div className="hero mt-[15px] sm:mt-[20px] md:mt-[20px] " >
      <div className="hero-wrapper w-[18.75rem] h-[14rem]">
         <img src= {data.img} alt="pictures of houses for rents" className="w-[100%] h-[100%] object-cover"/> 
      </div>
      <div className={`px-[20px] py-[16px]  bg-[${data.bgColor}] h-[350px] sm:h-[350px]`}  style = {{backgroundColor:bgColor}}>
            <h5 className={`text-left font-medium text-[25px] leading-[28px] text-[${data.color}] mt-2`}  
             style = {{color:color}}
            >{data.name}</h5>
        <div className=" py-[15px]">
          <p className="text-left font-normal text-sm leading-[26px] text-[#3a3a3a]">
             {data.content}
          </p>
        </div>
       { data.marginTop &&  <div style={{marginTop: data.marginTop}}></div>}
       {/* { data.marginTop &&  <div className={`mt-[${data.marginTop}]`}></div>} */}

        <div className="text-left pt-4 relative">
        <Link 
        to="/signup" 
        className=" cursor-pointer rounded-lg border px-[20px] py-[10px] md:px-[28px] md:py-[14px]  font-medium text-xs leading-[20.83px]" 
        style = {{color:color,border:`1px solid ${color}` }}
        >Join our Waitlist </Link>
        </div>
      </div> 
    </div>
    </div>
  );
}

export default Hero;
