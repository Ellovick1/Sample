export const PropertyTopRightComponent = ({type}) => { 
    let data;
    switch(type){
        case 'A':
            data = { 
                heading1:'Number of',
                heading2:'apartments',
                number:3
            }
            break;
        case 'B':
            data = { 
                heading1:'Vacant',
                heading2:'unit',
                number:3
            }
            break;
        case 'C':
            data = { 
                heading1:'Occupied',
                heading2:'unit',
                number:10
            }
            break;
        case 'D':
            data = { 
                heading1:'Number of',
                heading2:'apartment',
                number:10
            }
            break;
        case 'E':
            data = { 
                heading1:'Number of',
                heading2:'apartment',
                number:10
            }
            break;
        case 'F':
            data = { 
                heading1:'Number of',
                heading2:'apartment',
                number:3
            }
            break;
    }
    return( 
      <div className="bg-[#faf7ff] rounded-md flex items-center p-4 justify-between">
      <div className="font-regular text-sm leading-3">
          <p>{data.heading1}</p>
          <p className="mt-1">{data.heading2}</p>
      </div>
      <div className="text-[#7F3DFF] font-bold text-lg leading-7">
       {data.number}
      </div>
   </div>
    )
  }
