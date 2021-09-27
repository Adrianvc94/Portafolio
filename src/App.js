import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
