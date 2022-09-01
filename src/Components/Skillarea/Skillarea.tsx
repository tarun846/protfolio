import React from 'react'
import {textinterface} from '../../types/Commontypes'
export  function Skillarea({data} : {data :textinterface  } ) {
  return (
   <>
  <li  data-icon = 'sahi'>
   <h2> {data.text} </h2>
   <p>{data.value}</p>
  </li>
   </>
  )
}

