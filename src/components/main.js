import React from "react"
import github from "../assets/github.png"
import slack from "../assets/slack.png"





export default function Main (){

    
   



                    return(
                        <main>
                            
                            <a id="twitter_link" target="_blank"  rel="noreferrer" 
                                    href="https://twitter.com/MayowaWn">
                                    <li> Twitter Link</li>
                                    </a>


                                         

                                <a id="btn__zuri" class="tooltip" target="_blank" rel="noreferrer"  
                                    href="https://training.zuri.team/">
                                        <li> Zuri Teamss</li>
                                        <span>CSS tooltip showing up when your mouse over the link</span>
                                        </a>
                            
                           

                                <a id="books" class="tooltip" target="_blank" rel="noreferrer"  
                                        href="https://twitter.com/MayowaWn">
                                        <li> Zuri Books</li>
                                        <span>CSS tooltip showing up when your mouse over the link</span>
                                        </a>
           
                                  


                                <a id="book__python" class="tooltip" target="_blank" rel="noreferrer" 
                                        href="https://books.zuri.team/python-for-beginners?ref_id=mayowaade">
                                        <li> Python Book</li>
                                        <span>CSS tooltip showing up when your mouse over the link</span>
                                        </a>
                            
                                   
                        

                                <a id="pitch" class="tooltip" target="_blank" rel="noreferrer" 
                                        href="https://background.zuri.team">
                                        <li>Background Checks for coders</li>
                                        <span>CSS tooltip showing up when your mouse over the link</span>
                                        </a>
                                
                                    
                                
                                

                                <a id="book__design" class="tooltip" target="_blank" rel="noreferrer" 
                                        href="https://books.zuri.team/design-rules">
                                        <li> Design Books</li>
                                        <span>CSS tooltip showing up when your mouse over the link</span>
                                        </a>
                            
                                    
                              



                                <div  className="sm_section" >
                                    <img id="slack_logo" src={slack} alt="slack's logo" />
                                    <img id="github_logo" src={github} alt="github's" />
                                </div>
                            </main>
                        )
}


          