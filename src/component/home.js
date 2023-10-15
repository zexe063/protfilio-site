import hljs from "highlight.js";
import { useEffect, useRef } from "react";
import myImage from "../image.png"




function Home(){

   const nameref = useRef(null);
   useEffect(()=>{
    hljs.highlightBlock(nameref.current);
   })
    

    return(
        <div className="home">
     
           <nav className="navigation">
        <div className="content">

       
        <div className="name">
      <pre className="nameref" ref={nameref}>
         <code>{`{Version Editor}`}
          </code></pre>
         </div>

         <div className="button">
            <a href=".container">Editor Tool</a>
            <a href=".container">Productivity</a>
           <a href=".codecontaier">Signup for Editor</a> 
         </div>
        </div>
           </nav>
         

      
      <div className="homecontent">
      <div className="data">
      <h2>Let's Start Code Journey</h2>
        <p> The Version Editor Enhance Your Developnmet 100X Times With My InBuild AI Than Other Software</p>
       <div className="button">
       <button>Start The Editor</button>
       </div>
      </div>

   <div className="image">
      <img src={myImage} alt="code"></img>
   </div>
      </div>
         
       
        </div>
    )
}

export default Home;