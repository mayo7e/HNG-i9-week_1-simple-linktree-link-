import React from "react"
import {Link} from "react-router-dom"






export default function NotFound (){
    return(
     <div className="error_text">
            <div className="error_container" >
                <p>404 error</p>
                <h1>We can't find the page</h1>
                <p className="not_exist">Sorry the page you are looking for doesn't exist</p>
            </div>
            <div className="option_btn" >
              
              <Link to-="/contact"><button className="goback">🔙 Go Back </button></Link>
              <Link to=""><button id="goHome" >Take me Home</button></Link>

            </div>
      </div> 
    )
  }