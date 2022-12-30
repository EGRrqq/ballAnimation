import React from "react"
import {OrbitControls, PerspectiveCamera } from "@react-three/drei"

const Scene = () => {

    return (
        <>
            <OrbitControls />
            <PerspectiveCamera makeDefault fov={75} position={[0,0,20]}/>
            <ambientLight />
            <pointLight position={[10,10,0]}/>
            <mesh>
                <sphereGeometry />
                <meshStandardMaterial color="#8C3021"/>
            </mesh>
        </>
    )
}

export default Scene