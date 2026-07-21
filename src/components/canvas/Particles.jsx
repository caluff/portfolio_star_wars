import Particles, {ParticlesProvider} from "@tsparticles/react";
import {loadSlim} from "@tsparticles/slim";
import {ParticleConfig} from "../../utils/particleConfig.js";

const initializeParticles = async engine => {
    await loadSlim(engine);
};

const ParticlesCanvas = () => {
    return (
        <ParticlesProvider init={initializeParticles}>
            <Particles
              className={'absolute h-[100%] w-[100%] z-0'}
                id="tsparticles"
                options={ParticleConfig}
            />
        </ParticlesProvider>
    );
};
export default ParticlesCanvas;
