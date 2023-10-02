import Header from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App bg-gray-950 text-white'>
      <div className='max-w-5xl block m-auto'>
        <Navbar />
        <Header />
        <Skills />
        <Projects />
        {/* <Education /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
