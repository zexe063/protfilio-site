import { useEffect, useRef } from "react";
import hljs from "highlight.js";
import 'highlight.js/styles/github-dark.css';

function Indexhtml(){


    const indexdata = useRef(null)

    useEffect(()=>{
hljs.highlightBlock(indexdata.current)
    },[])
    return(
        <div className="codeindex">
            

           <div className="program">
           <div className="content">
                <div className="tittle">
                    <span>index.html</span>
                
                </div>
            </div>
            <div className="codedata">
            <pre>
                <code ref={indexdata}>
                    
                    {`

                   <div class="position-absolute">
                <div class="container-xl">
                <div class="d-flex">
                <div class="col-8-n12 events-none">
                
                     <img src="astro-mona.svg"">
                         </picture>
                       </div>
                     </div>
                   </div>
                 </div>
                    
                    `}
                
                </code>
            </pre>
            </div>
            </div>
         </div>     
    )
}
export default Indexhtml;