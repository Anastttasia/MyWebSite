import './App.css';
import Header from './components/Header/Header';
import MainContent from './components/Main content/Main content';
import Footer from './components/Footer/Footer';

// import {BrowserRouter, Route, Routes} from 'react-router-dom';


const App = (props) => {
 
  return (
    <div>
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App; 
