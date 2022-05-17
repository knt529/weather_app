import image from "../../../../img/sky.jpg"
import image2 from "../../../../img/sky_res.jpg"

import "../../../styles/block/Home.css"

function Home() {
  return(
   <div className="home" > 
    <img src={image} className="main_image"/>
    <img src={image2} className="res_image" />
   </div>
  )
}

export default Home;