import {useCallback} from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import {ParticleConfig} from "../utils/particleConfig.js";

const Design = () => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    return (
            <Particles
              className={'absolute h-[100%] w-[100%] z-0'}
                id="tsparticles"
                init={particlesInit}
                options={ParticleConfig}
            />
    );
};
export default Design;
