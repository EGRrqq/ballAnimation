import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import Text3DScene from "./components/Text3DScene"
import PlanesScene from "./components/PlanesScene";
import {Grid, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import BallScene from "./components/BallScene";

const App = () => {

    return (
        <Canvas>
            <OrbitControls makeDefault />
            <PerspectiveCamera makeDefault fov={75} position={[0,1.5,5]}/>
            <ambientLight />
            <pointLight position={[10,10,0]}/>

            <Suspense>
                <Text3DScene />
                <PlanesScene />
                <BallScene />
            </Suspense>

            <Grid cellColor="white" args={[10, 10]} />
        </Canvas>
    )
}

export default App