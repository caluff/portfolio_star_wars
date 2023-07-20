import {useCallback} from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import {ParticleConfig} from "../utils/particleConfig.js";

const Design = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);

        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <div className={"relative"}>
            <Particles
                className={"absolute w-48 h-48"}
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={ParticleConfig}
            />
        </div>
    );
};
export default Design;
