import React, {useRef} from "react";
import { Sphere } from "@react-three/drei";
import {useFrame} from "@react-three/fiber";

const BallScene = () => {
    const myMesh = useRef()

    useFrame(({ clock }) => {
        const a = clock.getElapsedTime()
        myMesh.current.rotation.y = a
    })

    return (
        <Sphere ref={myMesh}>
            <meshPhysicalMaterial color="#813f2e" wireframe />
        </Sphere>
    )
}

export default BallScene