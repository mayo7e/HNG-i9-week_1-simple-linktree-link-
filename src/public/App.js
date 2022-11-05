

import Home from "../components/home.js"
import Contact from "../components/contact.js"
import Footer from "../components/footer.js"
import NotFound from "../components/notFound.js"

import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import '../index.css';

function App() {
  return (
    <Router 
      basename="hngi9_week_01-_linktree"
    >
   
            
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path= "/contact" element={<Contact />} />
            <Route path= "/*" element={<NotFound />} />

        </Routes>
          <Footer />
    </Router>
  );
}




export default App;
