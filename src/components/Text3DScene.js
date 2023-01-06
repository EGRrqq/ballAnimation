import React from "react";
import {Center, Text3D} from "@react-three/drei";
import RubikBubbles from '../fonts/Rubik Bubbles_Regular.json'

const Text3DScene = () => {
    return (
        <Center position-y={0.5}>
            <Text3D font={RubikBubbles} bevelEnabled bevelSize={0.02}>
                Random Text
                <meshNormalMaterial />
            </Text3D>
        </Center>
    )
}

export default Text3DScene

