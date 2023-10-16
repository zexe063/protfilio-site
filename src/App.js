
import "./App.css"
import "./editor.css"
import Code from "./component/codeeditorr"
// import Helo from "./component/helo"

import Home from "./component/home";
import Indexhtml from "./component/codeindex";
import Liveserver from "./component/liverserver"; 
import Editor from "./component/editorcontent";
import Tool from "./component/tool";
import Card from "./component/card";
import Foter from "./component/footer";
// import CardCarousel from "./component/swiper";





function App(){
return(

  <div className="container">

<section className="homecontainer">
<Home></Home>
{/* <Helo></Helo> */}
</section>

<section className="codecontainer">
  <Indexhtml></Indexhtml>
  <Code></Code>
  <Liveserver></Liveserver>
 <Editor></Editor>
</section>

<section className="toolcontainer">
<Tool></Tool>
</section>

<section className="cardcontainer">
<Card></Card>
</section>


<section className="footercontainer">
  <Foter></Foter>
</section>

</div>
)

}

export default App