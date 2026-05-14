import About from './components/About';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Education from './components/Education';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Experiences />
      <Projects />
      <Education />
      <Contact />
    </>
  )
}

export default App;