import React from 'react';
import './resume.css';
import data from '../utils/data.json';

export const Resume = () => {
  return (
    <div className='resume-container'>
      <SectionWrapper section={"Employment"}><Employment /></SectionWrapper>
      <SectionWrapper section={"Tech Stack"}>
        {data.skills.map(i => {
          return (
            <SectionWrapper section={i.type}>{i.technology.map(j => {
              return (<TechStack name={j.name} rating={j.rating - 1} />);
            })}</SectionWrapper>
          )
        })}
      </SectionWrapper >
      <SectionWrapper section={"Education"}><Education /></SectionWrapper>
    </div>
  )
}
const SectionWrapper = ({ section, children }) => {
  return (
    <div style={{ padding: "10px", maxWidth: "600px" }}>
      <label style={{ fontWeight: "bold" }}>{section}</label>
      {children}
    </div>
  );
}
const Employment = () => {
  return (
    <div>
      {data.employment.map(i => {
        return (
          <div className='emp-container'>
            <TwoColSection header={i.company} subHeader={i.role} rightHeader={i.period} />
            <div className='responsibilities'>{i.desc}</div>
          </div>
        )
      })}
    </div>

  )
}
const TechStack = ({ name, rating }) => {
  return (
    <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", maxWidth: "300px",padding:"3px 0px",fontSize:"0.9rem",opacity:"0.8" }}>
      <div><label>{name}</label></div>
      <div style={{ display: 'flex' }}>
        {[0, 1, 2, 3, 4, 5, 6].map(i => <RatingDot fillColor={i <= rating ? "#757575" : "#d6d6d6"} />)}
      </div>
    </div>
  )
}
const TwoColSection = ({ header, subHeader, rightHeader }) => {
  return (
    <div className='company-container'>
      <div>
        <div style={{ fontWeight: "bold" }}>{header}</div>
        <div style={{ opacity: "0.7" }}>{subHeader}</div>
      </div>
      <div className='period'>
        {rightHeader}
      </div>
    </div>
  )
}
const RatingDot = ({ fillColor }) => {
  return (
    <div style={{ height: "13px", width: "13px", backgroundColor: fillColor, margin: "4px", borderRadius: "100%" }}></div>
  );
}
const Education = () => {
  return (
    <div>
      {data.education.map(i => <div className='emp-container'><TwoColSection header={i.standard} subHeader={i.stream} rightHeader={i.period} /></div>)}
    </div>
  )
}