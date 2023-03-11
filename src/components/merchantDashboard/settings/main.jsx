import React,  { useState } from 'react'
import Settings from './settings'
import CallSupport from './callSupport'
import DownloadRecord from './downloadRecord'

const Main = ({ activeClass }) => {
    return (
        <div className="mt-5">
            {activeClass === "settings" ? <Settings /> : ""}
            {activeClass === "callSupport" ? <CallSupport /> : ""}
            {activeClass === "downloadRecord" ? <DownloadRecord /> : ""}
        </div>
    )
}

export default Main