
import React from "react"
import mayo from "../assets/mayo.jpg"
import avatar from "../assets/avatar-svgrepo.svg"
import avatarShare from "../assets/avatar_share_button.png"




export default  function Profile(){
    return(
        <header>
            <div id="header_profile" >
                
                    <img id="profile__img" class="image" src={mayo} alt="Avatar" />
                    <div class="overlay">
                            <a href="0#" class="icon" title="User Profile">
                                <img alt="avatar placeholder" src={avatar} id="avatar_placeholder" />
                            </a>

                </div>
                    <p id="twitter" >MayowaWn </p>
                     <p id="slack" >Mayo7e</p> 

                   <a href="#0" ><img  title="Share Link"alt="avatar share button" src={avatarShare} id="avatar_share_button" /></a>


            </div>
      </header>
    )
}

