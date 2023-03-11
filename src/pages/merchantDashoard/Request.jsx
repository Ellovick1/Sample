import React, { useState } from 'react'
import NoRequestTable from '../../components/merchantDashboard/request/noRequestTable'
import RequestTable from '../../components/merchantDashboard/request/requestTable'
// import RequestDetails from '../../components/merchantDashboard/request/requestDetails'

function Request() {

  const [showRequestTable, setRequestTable] = useState(true)

  return (
    <div>
      {showRequestTable ? (<RequestTable />) :

        (<NoRequestTable />)
      }

      {/* <RequestDetails /> */}
    </div>
  )
}

export default Request