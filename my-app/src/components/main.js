import React from "react"
import github from "../assets/github.png"
import slack from "../assets/slack.png"



export default function Main (){
                    return(
                        <main>
                            <ul>
                            <li> <a   rel="noreferrer"  href="https://twitter.com/MayowaWn">Twitter Link</a></li>
                            <li> <a id="btn_zuri" target="_blank" rel="noreferrer"  href="https://training.zuri.team/">Zuri Teams</a></li>
                            <li> <a id="books" target="_blank" rel="noreferrer"  href="https://twitter.com/MayowaWn">Zuri Books</a></li>
                            <li> <a id="book_python" target="_blank" rel="noreferrer"  href="https://books.zuri.team/python-for-beginners?ref_id=mayowaade">Python Books</a></li>
                            <li> <a id="pitch" target="_blank" rel="noreferrer"  href="https://background.zuri.team">Background Checks for coders</a></li>
                            <li> <a id="book_design" target="_blank" rel="noreferrer"  href="https://books.zuri.team/design-rules">Design Books</a></li>
                            </ul>
                            <div  className="sm_section" >
                                <img id="slack_logo" src={slack} alt="slack's logo" />
                                <img id="github_logo" src={github} alt="github's" />
                            </div>
                        </main>
                        )
}