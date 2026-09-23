import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

const CLAY = "#c6d5e6";
const CLAY_DARK = "#a7bdd4";
const NAVY = "#16233a";
const CORAL = "#f5714e";
const EYE = "#eef4fb";

function Robot() {
  const group = useRef();

  // Le perso tourne doucement vers le pointeur (effet "il te regarde").
  useFrame((state) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, state.pointer.x * 0.5, 0.06);
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, -state.pointer.y * 0.28, 0.06);
  });

  return (
    <group ref={group} position={[0, -0.1, 0]}>
      {/* Antenne */}
      <mesh position={[0, 1.35, 0]} castShadow>
        <cylinderGeometry args={[0.035, 0.035, 0.4, 16]} />
        <meshStandardMaterial color={CLAY_DARK} roughness={0.6} />
      </mesh>
      <mesh position={[0, 1.6, 0]} castShadow>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial color={CORAL} roughness={0.35} />
      </mesh>

      {/* Bras */}
      <RoundedBox args={[0.28, 0.85, 0.34]} radius={0.14} smoothness={4} position={[-1.02, 0.05, 0]} rotation={[0, 0, 0.12]} castShadow>
        <meshStandardMaterial color={CLAY_DARK} roughness={0.6} />
      </RoundedBox>
      <RoundedBox args={[0.28, 0.85, 0.34]} radius={0.14} smoothness={4} position={[1.02, 0.05, 0]} rotation={[0, 0, -0.12]} castShadow>
        <meshStandardMaterial color={CLAY_DARK} roughness={0.6} />
      </RoundedBox>

      {/* Corps */}
      <RoundedBox args={[1.7, 1.85, 1.15]} radius={0.5} smoothness={5} position={[0, 0.15, 0]} castShadow receiveShadow>
        <meshStandardMaterial color={CLAY} roughness={0.5} metalness={0.05} />
      </RoundedBox>

      {/* Ecran / visage */}
      <RoundedBox args={[1.18, 0.98, 0.18]} radius={0.3} smoothness={5} position={[0, 0.28, 0.55]} castShadow>
        <meshStandardMaterial color={NAVY} roughness={0.35} />
      </RoundedBox>

      {/* Yeux */}
      <mesh position={[-0.26, 0.34, 0.66]}>
        <sphereGeometry args={[0.13, 32, 32]} />
        <meshStandardMaterial color={EYE} roughness={0.3} />
      </mesh>
      <mesh position={[0.26, 0.34, 0.66]}>
        <sphereGeometry args={[0.13, 32, 32]} />
        <meshStandardMaterial color={EYE} roughness={0.3} />
      </mesh>
      <mesh position={[-0.24, 0.32, 0.75]}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshStandardMaterial color={NAVY} />
      </mesh>
      <mesh position={[0.28, 0.32, 0.75]}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshStandardMaterial color={NAVY} />
      </mesh>

      {/* Sourire (demi-tore retourne pour faire un U) */}
      <mesh position={[0, 0.08, 0.66]} rotation={[0, 0, Math.PI]}>
        <torusGeometry args={[0.17, 0.028, 16, 32, Math.PI]} />
        <meshStandardMaterial color={EYE} roughness={0.3} />
      </mesh>

      {/* Joues */}
      <mesh position={[-0.44, 0.12, 0.62]}>
        <sphereGeometry args={[0.11, 24, 24]} />
        <meshStandardMaterial color={CORAL} transparent opacity={0.5} roughness={0.6} />
      </mesh>
      <mesh position={[0.44, 0.12, 0.62]}>
        <sphereGeometry args={[0.11, 24, 24]} />
        <meshStandardMaterial color={CORAL} transparent opacity={0.5} roughness={0.6} />
      </mesh>

      {/* Point d'etat */}
      <mesh position={[0.5, -0.5, 0.56]}>
        <sphereGeometry args={[0.07, 24, 24]} />
        <meshStandardMaterial color="#2fbf71" emissive="#2fbf71" emissiveIntensity={0.4} />
      </mesh>

      {/* Pieds */}
      <RoundedBox args={[0.5, 0.26, 0.6]} radius={0.12} smoothness={4} position={[-0.42, -1.02, 0.05]} castShadow>
        <meshStandardMaterial color={CLAY_DARK} roughness={0.6} />
      </RoundedBox>
      <RoundedBox args={[0.5, 0.26, 0.6]} radius={0.12} smoothness={4} position={[0.42, -1.02, 0.05]} castShadow>
        <meshStandardMaterial color={CLAY_DARK} roughness={0.6} />
      </RoundedBox>
    </group>
  );
}

export default function Robot3D({ className = "" }) {
  return (
    <div className={className}>
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ position: [0, 0.25, 5.4], fov: 32 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.75} />
        <directionalLight position={[3.5, 5, 4]} intensity={1.4} castShadow shadow-mapSize={[1024, 1024]} />
        <pointLight position={[-4, 2, 3]} intensity={0.5} color="#dfe8f2" />
        <pointLight position={[0, 3, -4]} intensity={0.6} color="#ffd9c9" />
        <Float speed={2} rotationIntensity={0.25} floatIntensity={0.9}>
          <Robot />
        </Float>
        <ContactShadows position={[0, -1.45, 0]} opacity={0.3} blur={2.8} scale={9} far={4} color="#16233a" />
      </Canvas>
    </div>
  );
}
