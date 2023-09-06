import Header from './components/Home';
import Pulse from './components/Pulse';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Qualification from './components/Qualification';

function App() {
  return (
    <div className='App bg-gray-950 text-white'>
      <div className='max-w-5xl block m-auto'>
        <Navbar />
        <Header />
        <Skills />
        <Qualification />
      </div>
    </div>
  );
}

export default App;
