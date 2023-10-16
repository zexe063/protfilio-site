
import hljs from "highlight.js";
import 'highlight.js/styles/night-owl.css';
import { useEffect, useRef, useState } from "react";




function Code(){


    const code = useRef(null)
    const terminalcode = useRef(null)
    const codedata = ` const context = canvas.getContext('2d');
    const boxSize = 20;
    let score = 0;
    let food = { x: 0, y: 0 };
    let snake = [];
    snake[0] = { x: 10 * boxSize, y: 10 * boxSize };
    let d;
    
    document.addEventListener("keydown", direction);
    
    if (snakeX < 0 || snakeY < 0 || snakeX >= canvas.width || snakeY >= canvas.height || collision(newHead, snake)) {
        clearInterval(game);
    }

    snake.unshift(newHead);

    context.fillStyle = "white";
    context.font = "45px Changa one";
    context.fillText(score, 2 * boxSize, 1.6 * boxSize);
}

let game = setInterval(draw, 100);
let data =>1 == ?console.log("game is over") : console.log("you hight scroe")
  `
  




   
  

  useEffect(()=>{
    hljs.highlightBlock(code.current);
    hljs.highlightBlock(terminalcode.current) 
  })

   return(
   
  

    <div className="codeeditor">
      <div className="content">

     <div className="threecircle">
     <div className="circle"></div>  
      <div className="circle"></div>
      <div className="circle"></div>
     </div>

     <div className="input">
<input type="text" value="Snake Game"></input>
     </div>

     <div className="cut">
      <span>X</span>
     </div>


      </div>

        <div className={"code"}>
        <div className="sidebar">
           
        </div>
        <div className="program">
 

     <div className="tittle">
   <div className="tittlename">
   <span> Snake.Js</span>
   </div>
     </div>
       <pre>
        <code ref={code} className="precode">
 {codedata}
        </code>
        </pre>
        {/* here the trminal */}
        <div className="terminal">

  <div className="button">
      <a href="#">PROBLEMS</a>
      <span>4</span>
          <a href=".terminal">OUTPUT</a>
          <a href=".terminal">DEBUG CONSOLE</a>
          <a href=".terminal" style={{color:"#fff"}}>TERMINAL</a>
          <a href=".terminal">PORTS</a>
        </div>

<div className="terminalcode">
  <pre>
    <code ref={terminalcode} className="output">
      {
        `
        [09:43:36] Starting 'watch-extension:vscode-api-tests' ...
        [09:43:36] Finished 'clean-extension:typescript-language-features' after 248 ms
        [09:43:36] Starting 'watch-extension:typescript-language-features' ...
        [09:43:36] Finished 'clean-extension:php-language-features' after 384 ms
        [09:43:36] Starting 'watch-extension:php-language-features' ...
        [09:43:40] Finished 'clean-extension:html-language-features-server' after 4.66 s
        [09:43:40] Starting 'watch-extension:html-language-features-server' ...
        [09:43:43] Finished 'clean-client' after 7.33 s
        [09:43:43] Starting 'watch-client' ...

        `
      }
</code>
  </pre>
</div>

        </div>
    {/* end terminal */}

        </div>
        </div>
       
    </div>
    
   )
}

export default Code