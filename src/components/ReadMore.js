import React from "react"
import github from "../assets/github.png"
import slack from "../assets/slack.png"





export default function Main (){

    
        const [open, setOpen] = React.useState(false);
        const [openZuriTeams, setOpenZuriTeams] = React.useState(false);
        const [openZuriBooks, setOpenZuriBooks] = React.useState(false);

                const [openZuriPythonBooks, setOpenZuriPythonBooks] = React.useState(false);
                const [openBackgroundChecks, setOpenBackgroundChecks] = React.useState(false);
                const [openZuriBookDesign, setOpenZuriBookDesign] = React.useState(false);



        const handleOpen = () => {
            setOpen(!open);
        }

        const handleOpen_zuri_teams = () => {
            setOpenZuriTeams(!openZuriTeams);
        }

        const handleOpen_zuri_books = () => {
            setOpenZuriBooks(!openZuriBooks);
        }


                const handleOpen_python_books = () => {
                    setOpenZuriPythonBooks(!openZuriPythonBooks);
                }

                const handleOpen_background_checks = () => {
                    setOpenBackgroundChecks(!openBackgroundChecks);
                }

                const handleOpen_book_design = () => {
                    setOpenZuriBookDesign(!openZuriBookDesign);
                }




                    return(
                        <main>
                            
                        <li><Button  onClick={handleOpen}  type="submit" > Twitter Link</Button></li>
                            
                            {open ? <div id="btn_grp" >
                            
                                <div id="dropdown_menu" >
                                    <p>Click <a id="twitter_link"  rel="noreferrer" 
                                                href="https://twitter.com/MayowaWn"> Twitter Link</a></p>
                                </div>
                                
                            </div>: null}

                        <li><Button  onClick={handleOpen_zuri_teams}  type="submit" > Zuri Teamss</Button></li>
                            
                            {openZuriTeams ? <div id="btn_grp" >
                            
                                <div id="dropdown_menu" >
                                    <p>Click  <a id="btn_zuri" target="_blank" rel="noreferrer"  
                                            href="https://training.zuri.team/">Zuri Teams</a></p>
                                </div>
                                
                            </div>: null}

                        <li><Button  onClick={handleOpen_zuri_books}  type="submit" > Zuri Books</Button></li>
                            
                            {openZuriBooks ? <div id="btn_grp" >
                            
                                <div id="dropdown_menu" >
                                    <p>Click <a id="books" target="_blank" rel="noreferrer"  
                                            href="https://twitter.com/MayowaWn">Zuri Books</a></p>
                                </div>
                                
                            </div>: null}


                        <li><Button  onClick={handleOpen_python_books}  type="submit" > Python Book</Button></li>
                                
                            {openZuriPythonBooks ? <div id="btn_grp" >
                            
                                    <div id="dropdown_menu" >
                                        <p>Click <a id="book_python" target="_blank" rel="noreferrer" 
                                                    href="https://books.zuri.team/python-for-beginners?ref_id=mayowaade">
                                                            Python Books</a></p>
                                    </div>
                                
                                </div>: null}

                        <li><Button  onClick={handleOpen_background_checks}  type="submit" > 
                                    Background Checks for coders</Button></li>
                                
                            {openBackgroundChecks ? <div id="btn_grp" >
                            
                                    <div id="dropdown_menu" >
                                        <p>Click <a id="pitch" target="_blank" rel="noreferrer" 
                                                    href="https://background.zuri.team">Background Checks for coders</a></p>
                                    </div>
                                
                                </div>: null}

                        <li><Button  onClick={handleOpen_book_design}  type="submit" > Design Books</Button></li>
                                
                            {openZuriBookDesign ? <div id="btn_grp" >
                            
                                    <div id="dropdown_menu" >
                                        <p>Click <a id="book_design" target="_blank" rel="noreferrer" 
                                                    href="https://books.zuri.team/design-rules">Design Books</a></p>
                                    </div>
                                
                                </div>: null}


                           


                                <div  className="sm_section" >
                                    <img id="slack_logo" src={slack} alt="slack's logo" />
                                    <img id="github_logo" src={github} alt="github's" />
                                </div>
                            </main>
                        )
}


            const Button = ({ onClick, children }) => {
                return (
                <button type="button" onClick={onClick}>
                    {children}
                </button>
                );
            };