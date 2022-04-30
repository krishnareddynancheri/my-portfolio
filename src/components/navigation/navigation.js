import React from 'react'
import { TABS } from '../utils/common'
import "./navigation.css"

export const Navigation = ({ selTab, setTab }) => {

  return (
    <div>
      <div className='tab-container'>{TABS.map((tabname, index) => {
        return (
          <div onClick={() => setTab(index)} style={{ backgroundColor: `${index === selTab ? "#fff" : "inherit"}` }}>
            <Tab tabname={tabname} />
          </div>
        )
      })}</div>
    </div>
  )
}
const Tab = ({ tabname }) => {
  return (
    <div className='tab-item'>
      <img alt={`${tabname}`} src={require(`../../images/${tabname}.svg`)} />
      <label style={{ cursor: "pointer" }}>{tabname}</label>
    </div>
  )
}