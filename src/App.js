import React from "react"
import { Canvas } from "@react-three/fiber"
import Text3DScene from "./components/Text3DScene"

const App = () => {

    return (
        <Canvas>
            <Text3DScene />
        </Canvas>
    )
}

export default App