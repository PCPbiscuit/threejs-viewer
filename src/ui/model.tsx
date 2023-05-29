import type { PrimitiveProps } from '@react-three/fiber';

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';

export const Model = ({
  url,
  enableRotation,
}: {
  url: string;
  enableRotation: boolean;
}) => {
  const ref = useRef<PrimitiveProps>(null);
  useEffect(() => {
    if (!enableRotation && ref.current && ref.current?.rotation?.y != 0)
      ref.current.rotation.y = 0;
  }, [enableRotation]);
  useFrame((_state, delta) => {
    if (enableRotation && ref.current) {
      ref.current.rotation.y += delta * 0.5;
    }
  });
  const { scene } = useGLTF(url);
  return <primitive ref={ref} position={[-0.5, -0.5, 0]} object={scene} />;
};
