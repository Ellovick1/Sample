import styled from 'styled-components';
import WidgetSecondPart from './Widget-Second-Part'

const Left = styled.div`
// background:url("./images/tenimage.png");
// background-size:cover;
// background-repeat:no-repeat;
// background-position:100%;
// background:linear-gradient(rgba(0))
background:#000;
padding:20px;
position:relative;
font-family:'work sans';
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:200px;

`
const Manage = styled.p`
 font-size:16px;
 font-weight:700;
 line-height:18.77px;
 color:white;
 position:absolute;
 top:20px;
 right:15%;

`

const Account = styled.h3`
font-weight:700;
font-size:24.8px;
line-height:28.10px;
color:white;
text-align:center;
text-decoration:underline;
// margin-top:-20px;
`

const Balance = styled.h3`
font-weight:700;
font-size:24.8px;
line-height:28.10px;
color:white;
text-align:center;
margin-top:17px;
 text-decoration:underline;
`


const Widget = () => { 
    return ( 
        <div className="widget  ">
            <div className="max-w-7xl mx-auto p-4 sm:flex gap-[30px] md:px-8 ">
                  <Left className="flex-1 p-[20px] rounded-lg  mt-[15px]">
                            <Manage>Manage</Manage>
                            <Account>Saving Account</Account>
                            <Balance>N0.000</Balance>

                    </Left>
                  <div className="flex-1 p-[20px] shadow-md  bg-white rounded-lg mt-[15px]">
                      <WidgetSecondPart type="left"/>
                  </div>
                  <div className="flex-1 p-[20px] shadow-md bg-white rounded-lg mt-[15px]" >
                    <WidgetSecondPart type="right"/>
                  </div>
             </div>
        </div>
    )
}
export default Widget