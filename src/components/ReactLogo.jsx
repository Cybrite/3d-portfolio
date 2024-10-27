import {Float, useGLTF} from '@react-three/drei'

const ReactLogo = (props) => {
    const { nodes, materials } = useGLTF('/models/react.glb')
    return (
        <Float floatIntensity={1} >
            <group scale={0.5} {...props} position={[8,4,0]} dispose={null}>
                <mesh
                    geometry={nodes['React-Logo_Material002_0'].geometry}
                    material={materials['Material.002']}
                    position={[0, 0.07935, 0.18102]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.39166, 0.39166, 0.52734]}
                />
            </group>
        </Float>
    )
}

useGLTF.preload('/models/react.glb');

export default ReactLogo;