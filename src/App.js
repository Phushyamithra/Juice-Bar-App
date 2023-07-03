import './App.css';
import NavBar from './components/NavBar';
// import { Switch } from 'react-router';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer.js'
import About from './pages/About.js'
import Home from './pages/Home.js';
import Menu from './pages/Menu.js'
import Contact from './pages/Contact.js'
function App() {
  return (
    <div className="App">
      <Router>
        {/* This one is constant that's why about routes tag as header */}
        <NavBar />
        {/* For travelling accross different pages Routes are used  */}
        <Routes>
          {/* Path for each route exact means starts at that point */}
          <Route path='/' exact element={<Home/>}/>
          <Route path='/menu' exact element={<Menu/>}/>
          <Route path='/about' exact element={<About/>}/>
          <Route path='/contact' exact element={<Contact/>}/>

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
