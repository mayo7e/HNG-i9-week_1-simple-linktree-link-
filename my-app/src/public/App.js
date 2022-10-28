import mayo from "../assets/mayo.jpg"
import github from "../assets/github.png"
import slack from "../assets/slack.png"
import zuri from "../assets/zuri.png"
import i4g from "../assets/I4G.png"
// import './index.css';

function App() {
  return (
    <div className="App">
      <header>
          <img id="profile_img" src={mayo} alt="side face view in monochrome" />
            <p id="twitter" >@MayowaWn</p>
            {/* <p id="slack" >Mayowa Ade</p> */}
      </header>
      
      <main>
            <ul>
              <li> <a   rel="noreferrer"  href="https://twitter.com/MayowaWn">Twitter Link</a></li>
              <li> <a id="btn_zuri" target="_blank" rel="noreferrer"  href="https://training.zuri.team/">Zuri Teams</a></li>
              <li> <a id="books" target="_blank" rel="noreferrer"  href="https://twitter.com/MayowaWn">Zuri Books</a></li>
              <li> <a id="book_python" target="_blank" rel="noreferrer"  href="https://books.zuri.team/python-for-beginners?ref_id=mayowaade">Python Books</a></li>
              <li> <a id="pitch" target="_blank" rel="noreferrer"  href="https://background.zuri.team">Background Checks for coders</a></li>
              <li> <a id="book_design" target="_blank" rel="noreferrer"  href="https://books.zuri.team/design-rules">Design Books</a></li>
            </ul>
            <div  className="" >
              <img src={slack} alt="slack's logo" />
              <img src={github} alt="github's" />
            </div>
      </main>
      <footer>
             <img src={zuri} alt="zuri's internship logo" />
             <p>HNG Internship 9 Frontend Task</p>
             <img src={i4g} alt="ingressive for good's logo" />
      </footer>

    </div>
  );
}

export default App;
