import {Navbar} from './Components/Navbar';
import { Capability } from './Components/Capability';
import { Skillarea } from './Components/Skillarea';
import { Footer } from './Components/Footer';

import data from './data/data.json'
import textdata from './data/textdata.json'

import './Styles/App.css'
import { useContextValue } from './Context/Context';
function App() {
  const {theme} =  useContextValue()
  
  return (
    <div style={{...theme}} >
    <div className="box_container"> 
    

   <section className='header' >
    <Navbar/>
    
<div className="container-details  ">
     <h2>Hi 👋 I’m <span>Nihar</span></h2>
     <h3>Web and Mobile App Developer</h3>
     <p>Nihar Ranjan Rout is pioneer in providing Website Design, Mobile Application and Custom software development services to business .Based out in Bhubaneswar, have been working with clients all over the world.</p>
     <strong>Find me</strong>

     <ul className="icons_container">
<li className='morphism' ><a href="https://www.facebook.com/iniharrout"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a></li>
<li className='morphism' ><a href="https://instagram.com/iniharrout"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a></li>
<li className='morphism' ><a href="https://www.linkedin.com/in/niharrout"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a></li>
<li className='morphism'  ><a href="https://twitter.com/iniharrout"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a></li>
</ul>

</div>



    </section>

    <section className="about morphism">
        <h1>About Nihar</h1>
        <hr />
        <h2>My background includes corporate and freelance experience in the tech industry, with a history of Web and Mobile Application Development. I have worked on multiple projects across different business domains ranging from startups to large scale businesses. I’ve worked in the software industry for years with a combination of well-reputed local and international businesses.</h2>
        <h2>Technology excites me like magic. Creating a user-centric digital experience is always what I wished to create, to get the user attracted, engaged, and then diverted towards the business. The initiation of my fascinating professional career in web and app development always had the goal to turn the ideas into real-life solutions. I have always been full of enthusiasm and technology gives life to the enthusiastic me!</h2>
        <h2>Let’s shake the hands if you are looking for a techie like me to help you with driving an audience to your company or an application or website that speaks for you rather than just being available on the internet to be searched.</h2>
  </section>


  <div className="project_exp">
      <h1 className='section_title' > skills </h1>
      {data.map( (e, i) =>  <Capability data = {e} key = {i}/>   )}
   </div>


   <div className="project_exp">
      <h1 className='section_title' > Knowledge </h1>
      <section className="about morphism skillset">
      <ul>
      {textdata.map( (e ,i ) => <Skillarea data = {e} key = {i} />   )}
      </ul>
</section>
   </div>
   </div>
   
 <Footer/>
    </div>
  );
}

export default App;
{/* <img src="./nihar-ranjan-rout.jpg" alt="" /> */}