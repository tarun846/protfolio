import React from 'react'
import { useContextValue } from '../../Context/Context'
import './Style/Style.css'
export function Navbar() {
  const {isDark , togglemeet}  = useContextValue()
  function themer(val  : string) {
    document.documentElement.style.setProperty('--primarycolor' , val )
    togglemeet()
  }
   
  const button = isDark ?   <button onClick={() => themer('#d88ab9') }  aria-label="dark" className="
  svelte-5yps4o"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 866 980" version="1.0"><defs></defs><path d="M459
   1A494 494 0 001 469a489 489 0 00836 367c27-27 32-36 26-47-4-8-10-11-31-14a462 462 0 01-292-187 446 446 0 0119-534c15-19 17-21 17-28 0-5-1-7-3-1
   0-5-6-10-10-17-11-22-4-73-6-97-4z" className="sc-theme-switcher"></path></svg></button> :   <button onClick={() => themer('white') } aria-label="light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13"></path></svg></button> 
  return (
    <nav className='morphism' >
    <div className="logo"><h2>👋Nihar</h2></div>
    <div className="toggle">

     {button}
   
    </div>
    </nav>
  )
}

