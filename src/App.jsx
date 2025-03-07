import {BrowserRouter} from "react-router-dom";
import {About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, ParticlesCanvas} from './components';
import { Toaster } from 'sonner'

function App() {
  return (
    <BrowserRouter>
      <Toaster richColors expand={false} position="bottom-center"/>
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
