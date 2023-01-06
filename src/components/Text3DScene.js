import React from "react";
import {Center, OrbitControls, PerspectiveCamera, Text3D} from "@react-three/drei";
import RubikBubbles from '../fonts/Rubik Bubbles_Regular.json'

const Text3DScene = () => {
    const MyText = () => {
        return (
            <Center>
                <Text3D font={RubikBubbles} bevelEnabled bevelSize={0.02}>
                    Random Text
                    <meshNormalMaterial />
                </Text3D>
            </Center>
        )
    }

    return (
        <>
            <OrbitControls makeDefault />
            <PerspectiveCamera makeDefault fov={75} position={[0,0,5]}/>
            <ambientLight />
            <pointLight position={[10,10,0]}/>
            <MyText />
        </>
    )
}

export default Text3DScene

