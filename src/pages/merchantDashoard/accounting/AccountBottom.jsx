
import TransactionBottomCard from '../../../components/merchantDashboard/TransactionBottomCard'
import {AccountBottomRightCard} from './AccountBottomRightCard'

export const AccountBottom = () => { 
    return ( 
        <div className="bottom flex mt-7 mb-5 gap-[20px]">
             <div className="left flex-1 p-4 bg-white rounded-lg">
                <h3 className="font-Karla font-bold text-lg leading-7 px-3">Record Summary</h3>
                <div classname="mt-6">
                <TransactionBottomCard type='land'/>
                <TransactionBottomCard type='land'/>
                <TransactionBottomCard type='land'/>
                <TransactionBottomCard type='land'/>
                <TransactionBottomCard type='land'/>
              
                </div>
             </div>
             <div className="right flex-1 p-4 bg-white rounded-lg">
                <div className="flex items-center justify-between px-3">
                <h3 className="font-Karla font-bold text-sm leading-6" >Tenant with invoice due</h3>
                <h3 className="font-Karla text-[#7F3DFF] font-bold text-sm leading-6">Due Date</h3>
                </div>
                <div classname="mt-6">
                 <AccountBottomRightCard />
                 <AccountBottomRightCard />
                 <AccountBottomRightCard />
                 <AccountBottomRightCard />
                 <AccountBottomRightCard />
                </div> 
             </div>
      </div>
    )
}