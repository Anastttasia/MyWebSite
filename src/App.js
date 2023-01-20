import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import AboutMe from './components/AboutMe/AboutMe';
import Certificate from './components/Certificate/Certificate';
import HardSkills from './components/HardSkills/HardSkills';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
// import {BrowserRouter, Route, Routes} from 'react-router-dom';


const App = (props) => {
  return (
    <div>
      <Header/>
      <Welcome/>
      <AboutMe/>
      <Certificate/>
      <HardSkills/>
      <Portfolio/>
      <Footer/>
    </div>
   
  );
}

export default App; 
