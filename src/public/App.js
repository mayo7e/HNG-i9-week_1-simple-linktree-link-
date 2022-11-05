

import Home from "../components/home.js"
import Contact from "../components/contact.js"
import NotFound from "../components/notFound.js"

import { HashRouter as Router, Route, Routes  } from 'react-router-dom';
import '../index.css';

function App() {
  return (
    <Router >
     
        <Routes>
            <Route index path="" element={<Home />} />
            <Route path= "/contact" element={<Contact />} />
            <Route path= "*" element={<NotFound />} />

        </Routes>
          
    </Router>
  );
}




export default App;
