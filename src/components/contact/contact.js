import React from 'react'
import data from '../utils/data.json';
import "./contact.css";

export const Contact = () => {
  return (
    <div className='contact-container' style={{ display: "grid", gridTemplateColumns: "1fr" }}>
      <div style={{ fontWeight: "bold" }}>Contact Info</div>
      {data.contact.map(i => {
        return (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", padding: "1% 5% 1% 0%" }}>
            <label style={{ fontWeight: "bold" }}>{i.label}</label>
            {i.type === "link" ? <a rel="noreferrer" target={"_blank"} href={i.value} style={{ fontWeight: "bold" }}>{i.value}</a> : <label style={{ fontWeight: "bold" }}>{i.value}</label>}
          </div>
        )
      })}
      <a rel="noreferrer" style={{ marginTop: "10px" }} href='https://drive.google.com/file/d/1EbZqn9PD8amjXCCiDbtTU1mEhx7lTGI_/view?usp=sharing' target={"_blank"}>download cv</a>
    </div>
  )
}
