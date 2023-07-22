import {BrowserRouter} from "react-router-dom";
import {About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, ParticlesCanvas} from './components';

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="gotham relative">
          <ParticlesCanvas/>
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App
