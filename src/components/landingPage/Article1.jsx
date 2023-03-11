import React from 'react';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import "./article.css"


const Article1 = ({type}) => {
    let data;
    switch(type){ 
        case 'rent' :
            data = { 
                title:'Online rent collection',
                icon:<HouseOutlinedIcon />,
                content:'Get paid and make payments online collect rent from tenants, store your financial data, view reports, all on one dashboard.'
            }
            break;
        case 'bills' :
            data = { 
                title:'Utility bills',
                icon:< LocalAtmOutlinedIcon />,
                content:'Collect residential bills at ease e.g electricity bill, security bill, cleaning bill and other residence bills.'
            }
            break;
        case 'payment' :
            data = { 
                title:'Make payments',
                icon:<AccountBalanceWalletOutlinedIcon />,
                content:'You can pay for land use, estate fees, landlord associations and more.'
            }
            break;
        case 'make' :
            data = { 
                title:'Make your payment online',
                icon:<AccountBalanceWalletOutlinedIcon />,
                content:'Pay rent and utilities bills such as electricity, security bills and general estate utilities conveniently.'
            }
            break;
        case 'report' :
            data = { 
                title:'Report maintenance issues',
                icon:<ReportGmailerrorredOutlinedIcon />,
                content:'Request for maintenace faster from your landlord. you can take pictures of the required maintenance and pay. '
            }
            break;
        case 'vacancy' :
            data = { 
                title:'List vacant apartment',
                icon:<LocationCityOutlinedIcon />,
                content:'You can list vacant apartments on the platform and receive the benefits of a landlord..'
            }
            break;
        default:
            break;
    }
  return (
      <div className="flex items-center justify-center">
      <div className="article font-[DM Sans] pt-[40px] article bg-[#F1EBFF] flex flex-col items-center justify-start ">
         <div className="mb-[10px] border bg-[#5C13EB] rounded-full flex items-center justify-center text-white p-4">
          {data.icon}
         </div>
         <div className="text-[#5C13EB]">
           <p className="font-bold text-sm leading-5" >{data.title}</p>
         </div>
         <div className="text-[#3a3a3a] font-normal leading-5 text-sm px-[22px] py-4 text-center">
           {data.content}
         </div>
    </div>
    </div>
  );
}

export default Article1;
