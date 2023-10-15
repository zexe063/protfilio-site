
import "./App.css"
import Code from "./component/codeeditorr"
// import Helo from "./component/helo"

import Home from "./component/home";
import Indexhtml from "./component/codeindex";
import Liveserver from "./component/liverserver";





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
</section>

<section className="helo">

</section>
<section>galo</section>
<section>jjsjs</section>
<section>phelo</section>
<section>nal</section>
<section>kajl</section>
<section>nhh</section>

</div>
)

}

export default App