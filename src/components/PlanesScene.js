import React from "react";
import {Plane} from "@react-three/drei";
import { MeshReflectorMaterial } from "@react-three/drei";

const PlanesScene = () => {
    return (
        <>
            <Plane rotation-x={Math.PI / -2} args={[10, 5]} >
                <MeshReflectorMaterial mirror={0} />
            </Plane>
            <Plane position-z={-2} args={[10, 5]}>
                <MeshReflectorMaterial mirror={0} />
            </Plane>
        </>
    )
}

export default PlanesScene

