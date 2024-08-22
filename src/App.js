import React from 'react';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import Footer from './components/Footer/footer';
import About from './components/About/about';
import Publications from './components/Publications/Publications';
import Blog from './components/Blog/blog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <div>
      <Router>
            <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route  path="/about" element={<About/>}/>
                    <Route  path="/blog" element={<Blog/>}/>
                    <Route  path="/publications" element={<Publications/>}/>
                </Routes>
                <Footer />
            </Router>
          
           
      </div>
    </>
  );
}

export default App;
