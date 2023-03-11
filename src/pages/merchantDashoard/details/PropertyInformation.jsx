import React, { useContext, useState, useEffect } from 'react';
import { layoutContext } from './Layout'
import axios from '../../../axiosInstance'
import { ArrowBackIosTwoTone } from '@mui/icons-material';

const PropertyInformation = () => {

      const contextdatas = useContext(layoutContext)
      console.log(contextdatas);
      const { step, setStep } = contextdatas;

      const [datas, setDatas] = useState(
            {
                  name: "",
                  address: "",
                  propertyType: "",
                  building: "",
                  built_on: 1664765180,
                  occupied: "",
                  state: "",
                  type: ""
            }

      );

      // const [typeId, setTypeId] = useState('');

      const [stateId, setStateId] = useState(
            {
                  "filters": {

                        "iso2": {
                              "includes": ["NG"]
                        },
                        "iso3": {
                              "includes": ["NGA"]

                        }

                  }
            }
      );
      // const axiosPass = axios();
      const getData = async () => {
          
            try {
                  //   // Get Type Id
                  const responseType = await axios.get("/properties/types/search")
                  console.log(responseType);

                  const responseData = await axios.get("/general/states/search")
                  console.log(responseData);

                  if (responseType.statusText && responseData.statusText == 'OK') {
                        // console.log(responseType.statusText)

                        const typeID = responseType.data.data[2].id;
                        console.log(typeID);


                        const stateID = responseData.data.data[2].id;
                        console.log(stateID);

                        setDatas({ ...datas, state: stateID });
                        setDatas({ ...datas, type: typeID });

                  }


            } catch(err) {
                  const errCode = err.response.data.error;
                  // const errorMsg = errMsgs[errCode] ?? defaultErrMsg;
                console.log(err.response.data.error)  
            };
      }

      useEffect(() => {
            getData()


      }, []
      )


      const handleSubmit = async (e) => {
            e.preventDefault();
            console.log(datas);
            const response = await axios.post("/properties", JSON.stringify(datas))
            console.log(response);

            if (response.status == 201) {
                  setStep(step + 1)

            }

      }

      return (
            <div className="wrapper px-8 bg-[#f9f9f9]">
                  <div className="rounded-md py-4 px-4 border mt-4">
                        <h3
                              className="font-normal text-[1.2rem] leading-[28px] "
                        >Property Details
                        </h3>
                  </div>
                  <div className="shadow  mt-7 py-5  bg-[#f9f9f9]">
                        <div className="top flex flex-col items-center">
                              <h3
                                    className="font-normal text-[1.2rem] leading-[28px] "
                              >Property Information
                              </h3>
                              <div className="mt-3">
                                    <p
                                          className="font-normal text-[1rem] leading-[20px] text-center text-[#91919F]"
                                    >Start with providing the property information in order for us to </p>
                                    <p
                                          className="font-normal text-[1rem] leading-[20px] text-center text-[#91919F]"
                                    >serve you better</p>
                              </div>
                        </div>
                        <div className="bottom">
                              <form
                                    onSubmit={handleSubmit}
                              >
                                    <div className="max-w-lg p-[25px] mx-auto space-y-5">
                                          <div className="flex flex-col gap-[5px] ">
                                                <label
                                                      className="font-bold text-base leading-[28px] text-[#7D7D7D]"
                                                >Name of Property</label>
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
                                          <div className="flex flex-col gap-[5px] ">
                                                <label
                                                      className="font-bold text-base leading-[28px] text-[#7D7D7D]"
                                                >Address</label>
                                                <input
                                                      type="text"
                                                   
                                                      value={datas.address}
                                                      onChange={(e) => { setDatas({ ...datas, address: e.currentTarget.value }); console.log(datas) }}
                                                      className="w-full rounded-lg py-[10px] px-[20px] border border-black bg-transparent outline-none "
                                                />
                                          </div>
                                          <div className="flex flex-col gap-[5px] ">
                                                <label
                                                      className="font-bold text-base leading-[28px] text-[#7D7D7D]"
                                                >Property Type</label>
                                                <select
                                                    
                                                      value={datas.propertyType}
                                                      onChange={(e) => { setDatas({ ...datas, propertyType: e.currentTarget.value }); console.log(datas) }}
                                                      className="w-full rounded-lg py-[10px] px-[20px] border border-black bg-transparent outline-none text-[#7d7d7d]"
                                                >
                                                      <option >Select an option</option>
                                                      <option >Lodge</option>
                                                      <option>hostel</option>
                                                      <option>estate</option>
                                                      <option>service apartment</option>
                                                      <option>shop/plaza</option>
                                                      <option>single duplex</option>
                                                      <option>single duplex</option>
                                                      <option>event center</option>
                                                      <option>ware house</option>
                                                </select>
                                          </div>
                                          <div className="flex flex-col gap-[5px] ">
                                                <label
                                                      className="font-bold text-base leading-[28px] text-[#7D7D7D]"
                                                >How many apartment per building</label>
                                                <select
                                                      value={datas.building}
                                                      onChange={(e) => { setDatas({ ...datas, building: e.currentTarget.value }); console.log(datas) }}
                                                      className="w-full rounded-lg py-[10px] px-[20px] border border-black bg-transparent outline-none text-[#7d7d7d]"
                                                >
                                                      <option >Select an option</option>
                                                      <option>1</option>
                                                      <option>2</option>
                                                      <option>3</option>

                                                </select>
                                          </div>
                                          <div className="flex flex-col gap-[5px] ">
                                                <label
                                                      className="font-bold text-base leading-[28px] text-[#7D7D7D]"
                                                >Is the apartment/flat occupied?</label>
                                                <select
                                                      className="w-full rounded-lg py-[10px] px-[20px] border border-black bg-transparent outline-none text-[#7d7d7d]"
                                                      value={datas.occupied}
                                                      onChange={(e) => { setDatas({ ...datas, occupied: e.currentTarget.value }); console.log(datas) }}
                                                >
                                                      <option >Select an option</option>
                                                      <option>Yes</option>
                                                      <option>No</option>


                                                </select>
                                          </div>
                                          <div className="w-1/2 mx-auto pt-[20px]">
                                                <button
                                                      className="py-[10px] bg-[#7F3DFF] text-white font-bold text-[12px] rounded w-full cursor-pointer"
                                                      type='submit'
                                                >
                                                 Submit
                                                </button>
                                          </div>
                                    </div>
                                    {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}

                              </form>

                        </div>
                  </div>
            </div>
      );
};

export default PropertyInformation;
