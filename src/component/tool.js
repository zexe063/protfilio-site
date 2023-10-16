
import TogtherImage from "../together.png"
import fastImage from "../fast.png"

function Tool(){
    return(
<div className="content">
    <div className="toolname">
        <div className="data">
            <h3>Unstopable And Skippable</h3>
            <span>thousands of company,<br></br> and AI tools are Collabarate width version editor here's the list.</span>
        </div>
        <div className="image">

            <div className="first">
         <img src="https://www.bing.com/th?id=OIP.ypa1w7pwHVfHb3axUk7mKAHaEK&w=180&h=101&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="jjs" width="120px" height="70px"></img>
         <img src="https://th.bing.com/th?id=OIP.BiEYk_E7T7adTwlH9dBh-QHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="rapidos" width="170px" height="140px"></img>
         <img src="https://th.bing.com/th?id=OIP.ncBbLcnIzBmPG9Q4pU-XtAHaEJ&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="walmart" width="120px" height="70px"></img>
         <img src="https://th.bing.com/th?id=OIP.xeVpAShsrzriqSfxbH42hAHaG1&w=260&h=240&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="amaxon" width="90px" height="70px"></img>
         </div>

         <div className="second">
            <img src="https://th.bing.com/th?id=OIP.B27XajWwojY93P3VmeYAwwHaD4&w=345&h=180&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="tcs" width="100px" height="70px"></img>
         <img src="https://th.bing.com/th?id=OIP.kz362e0cJzsKYwzeAFMwzQHaGk&w=265&h=235&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="wipro"  width="90px" height="80px"></img>
         <img src="https://th.bing.com/th?id=OIP.vBmeNfhXI1Sue8fAfAmKWAAAAA&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="flipcart" width="70px" height="40px"></img>
<img src="https://th.bing.com/th?id=OIP.U5F3vX2c4Kw7D_1_RtKa6QAAAA&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="ineuorn" width="70px" height="70px"></img>
</div>
</div>
    </div>

    <div className="uses">

   <div className="first">

   <div className="image"> 
   <img src={TogtherImage} alt="together"></img>
   </div>

   <div className="data">
    <h2>Connect from awesome<br></br>team live.</h2>
    <span>everyday my team connect with you for awesome solution for your problem in a live chat </span>
    <button>Get Started</button>
   </div>

</div>

<div className="second">

<div className="data">
    <h2>Realistic Faster Development<br></br>Which You Makes Carrer<br></br>Like SpaceShip</h2>
    <span>we undertsnad developers think about your project, how can create faster than SpaceShip</span>
    <button>Get Started</button>
   </div>
<div className="image"> 
   <img src={fastImage} alt="together"></img>
   </div>
   </div>
 
   


</div>


</div>// content parent

    )
}

export default  Tool;