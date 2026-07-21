import {lazy, Suspense} from "react";
import {BrowserRouter} from "react-router-dom";
import About from "./components/About.jsx";
import DeferredSection from "./components/DeferredSection.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import {Toaster} from "sonner";

const ParticlesCanvas = lazy(() => import("./components/canvas/Particles.jsx"));
const Experience = lazy(() => import("./components/Experience.jsx"));
const Tech = lazy(() => import("./components/Tech.jsx"));
const ProductStack = lazy(() => import("./components/ProductStack.jsx"));
const Works = lazy(() => import("./components/Works.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars.jsx"));

function App() {
  return (
    <BrowserRouter>
      <Toaster richColors expand={false} position="bottom-center"/>
      <div className="relative z-0 bg-primary">
        <div className="gotham relative">
          <Suspense fallback={null}>
            <ParticlesCanvas/>
          </Suspense>
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <DeferredSection id="work" minHeight={900}>
          <Suspense fallback={null}>
            <Experience/>
          </Suspense>
        </DeferredSection>
        <DeferredSection minHeight={400}>
          <Suspense fallback={null}>
            <Tech/>
          </Suspense>
        </DeferredSection>
        <DeferredSection minHeight={850}>
          <Suspense fallback={null}>
            <ProductStack/>
          </Suspense>
        </DeferredSection>
        <DeferredSection minHeight={1200}>
          <Suspense fallback={null}>
            <Works/>
          </Suspense>
        </DeferredSection>
        <DeferredSection id="contact" minHeight={900}>
          <div className="relative z-0">
            <Suspense fallback={null}>
              <Contact/>
              <StarsCanvas/>
            </Suspense>
          </div>
        </DeferredSection>
      </div>
    </BrowserRouter>
  )
}
export default App
