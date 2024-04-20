import './App.css';
import Companies from './Component/Companies/Companies';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Getstarted from './Component/Getstarted/Getstarted';
import Header from './Component/Header/Header';
import Main from './Component/Main/Main';
import Residencies from './Component/Residencies/Residencies';
import Value from './Component/Value/Value';


function App() {
  return (
    <div className="App">
     <div>
          <div className='white-gradient' />
          <Header />
          <Main />
      </div>
          <Companies />
          <Residencies /> 
           <Value />
           <Contact />
          <Getstarted />
          <Footer /> 
    </div>
  );
}

export default App;
