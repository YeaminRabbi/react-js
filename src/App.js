import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

import Navbar from './pages/navbar/Navbar';
import Home from './pages/home/Home';
import NotFound from './pages/others/NotFound.js';
import Create from './pages/blog/Create.js';
import BlogDetails from './pages/blog/BlogDetails.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />  
            <Route path="/create" element={<Create />} /> 
            <Route path="/blogs/:id" element={<BlogDetails />} /> 
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;