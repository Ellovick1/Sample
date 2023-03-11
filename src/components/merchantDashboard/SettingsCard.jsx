import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LockIcon from '@mui/icons-material/Lock';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SmsIcon from '@mui/icons-material/Sms';
import CallIcon from '@mui/icons-material/Call';

const SettingsCard = ({type}) => {
    let data;
    switch(type){ 
        case "user":
            data ={ 
                icon:<AccountCircleIcon />,
                name:' Account details'
            }
            break;
        
        case "business":
            data ={ 
                icon:<AccountCircleIcon />,
                name:' Business details'
            }
            break;
        
        case "pin":
            data ={ 
                icon:<LockIcon />,
                name:' Pin & Security'
            }
            break;
        
        case "friend":
            data ={ 
                icon:<FavoriteIcon />,
                name:'Invite Friends'
            }
            break;
        
        case "faq":
            data ={ 
                icon:<SmsIcon />,
                name:'FAQS'
            }
            break;
        case "contact":
            data ={ 
                icon:<CallIcon />,
                name:'Contact Support'
            }
            break;
        default :
        break;
        
    }
  return (
    <div className="inner1 bg-white md:w-2/3 p-3 mt-4 ">
           <div className="flex items-center justify-between ">
           <div className="left flex items-center text-[14px] font-medium">
               <div className="icon">
                    {data.icon}
                </div>
                <div className="pl-4">
                     {data.name}
                </div>
           </div>
           <div className="right cursor-pointer">   
                <KeyboardArrowRightIcon />
           </div>
           </div>
     </div>
  );
}

export default SettingsCard;
