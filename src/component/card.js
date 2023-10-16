
import 'boxicons'

function Card(){
    return(
      
        <div className="content">
            <div className="data">
                <h2>Ramp up the creativity - and efficiency!</h2>
                <p>Whether you want to make a mind-blowing software projects for your bestie or to power through<br></br><span>thousands of software apps in next to no time, version editor makes it happen.</span></p>
            </div>
            <div className="cardcontent">
                <div className="first special">

               <div className="card">
               <box-icon name='apple' type='logo' ></box-icon>
               <p> Apple Development<box-icon name='right-arrow-alt' ></box-icon></p>
               </div>

               <div className="card">
               <box-icon type='logo' name='android'></box-icon>
               <p> Android Development<box-icon name='right-arrow-alt' ></box-icon></p>
               </div>
               <div className="card">
               <box-icon name='code-alt' ></box-icon>
               <p> Web Developers <box-icon name='right-arrow-alt' ></box-icon></p>
               </div>
         
                </div>

                <div className="second special">

                <div className="card">
                <box-icon name='store-alt'></box-icon>
                <p>For Shopkeepers <box-icon name='right-arrow-alt' ></box-icon></p>
                </div>

               <div className="card">
                <box-icon type='solid' name='business'></box-icon>
                <p> For business <box-icon name='right-arrow-alt' ></box-icon></p>
               </div>
               <div className="card">
               <box-icon name='camera'></box-icon>
               <p>For Photographer <box-icon name='right-arrow-alt' ></box-icon></p>
               </div>
                </div>

                <div className="third special">

                <div className="card">
                <box-icon name='heart'></box-icon>
                <p>For Inviduals  <box-icon name='right-arrow-alt' ></box-icon></p>
                </div>

               <div className="card">
               <box-icon name='chat'></box-icon>
               <p>For Accounting  <box-icon name='right-arrow-alt' ></box-icon></p>
               </div>

               <div className="card">
               <box-icon name='brush'></box-icon>
               <p> Magic Brush  <box-icon name='right-arrow-alt' ></box-icon></p>
               </div>
                </div>

               </div> {/* card parent */}
            
        </div>
       
    )
}
export default Card;