

import zuri from "../assets/zuri.png"
import i4g from "../assets/I4G.png"
import Profile from "../components/profile.js"
import Main from "../components/main.js"
// import Footer from "../components/footer.js"
import '../index.css';

function App() {
  return (
    <div className="App">
      <Profile />
      <Main />
      
      
      <footer>
             <img src={zuri} alt="zuri's internship logo" />
             <p>HNG Internship 9 Frontend Task</p>
             <img src={i4g} alt="ingressive for good's logo" />
      </footer>

    </div>
  );
}

export default App;
