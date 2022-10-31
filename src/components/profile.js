
import React from "react"
import mayo from "../assets/mayo.jpg"
// import '../index.css';


export default  function Profile(){
    return(
        <header>
            <div id="header_profile" >
                <img id="profile_img" src={mayo} alt="side face view in monochrome" />
                    <p id="twitter" >MayowaWn </p>
                    {/* <p id="slack" >Mayowa Ade</p> */}

            </div>
      </header>
    )
}

