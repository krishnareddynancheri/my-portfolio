import React from 'react'
import "./profile.css";

export const Profile = () => {
  return (
    <div className='profile-container'>
      <section>
        <img alt='dp'
          className='dp'
          src={require("../../images/dp.jpg")} />
      </section>
      <section>
        <section style={{ paddingBottom: "2%" }}>
          <section><b style={{ fontSize: "1.5rem" }}>Krishnareddy</b></section>
          <small>Software Developer</small>
        </section>
        <section style={{ paddingBottom: "20px" }}>A Developer with strong passion for self-improvement. I have strong problem solving skills & bring energy, patience, positivity and cultural values to the team.</section>
      </section>
    </div>
  )
}
