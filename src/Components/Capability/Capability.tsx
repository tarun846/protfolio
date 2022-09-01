import React from 'react'
import {Largedata} from '../../types/Commontypes'
import './Style/Style.css'
export   function Capability({data} : {data  : Largedata } ) {
  return (
  <section className="about morphism">
    <h1>{data.content}</h1>
    <hr />
    <h2>{data.para}</h2>
  
     <div className="skills">
      <ul> 
        {data.links.map((e)=> <Skill skill= {e} /> )}
      </ul>
    </div>
</section>
  )
}


function Skill({skill} : {skill: string } ) {
  return (
   <li> {skill} </li>
  )
}