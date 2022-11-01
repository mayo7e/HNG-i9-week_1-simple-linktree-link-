import React from "react"
import zuri from "../assets/zuri.png"
import i4g from "../assets/I4G.png"



export default function Footer () {
    return(
        <footer>
        <img id = "footer_zuri-logo" src={zuri} alt="zuri's internship logo" />
        <p id = "footer_hng" >HNG Internship 9 Frontend Task</p>
        <img id = "footer_ingressive" src={i4g} alt="ingressive for good's logo" />
 </footer>
    )
}