import {useState} from 'react'
import {Flat} from './Flat'
import {Tenant} from './Tenant'
import {Finance} from './Finance'


export const PropertyOverviewBottomComponent = () => { 
     const [currentTab, setCurrentTab] = useState('1')
    const tabs = [
        {
            id:'1',
            tabTitle:'Flat',
            content: <Flat />,
         
          },
          {
            id: '2',
            tabTitle:'Tenant',
            content: <Tenant/>,
            
        },
        {
            id: '3',
            tabTitle:'Finance',
            content: <Finance/>,
          
        }
    ]
    
    const handleTabClick = (e) => {
        console.log(e.target.id)
          setCurrentTab(e.target.id)
      }
    
    return ( 
        
        <div className="tab--container p-4 mb-7 bg-white">
            <div className="tabs px-4 rounded-xl bg-[#f9f9f9]">
          <div className="max-w-3xl mx-auto  flex items-center justify-between">
                {tabs.map((tab, i) => 
                    <button key={i} className="hover:text-[#7F3DFF] w-[100px] py-5 border-[#7F3DFF] disabled:border-b-[4px] font-semibold text-lg disabled:text-[#7F3DFF]" id={tab.id} disabled={currentTab === `${tab.id}`} onClick={handleTabClick}>{tab.tabTitle}</button>
                )}
            </div>
        </div>
            <div className="content">
                {tabs.map((tab, i) => 
                    <div key={i}>
                       {currentTab === `${tab.id}` && <div>
                            <p>{tab.content}</p>
                        </div>}
                    </div>
                )}
            </div>
        </div>
      
    )
}


  





   
