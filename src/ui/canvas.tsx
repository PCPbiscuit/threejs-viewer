import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';

import { Canvas as Can, CanvasProps } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { forwardRef } from 'react';

export const Canvas = forwardRef<
  OrbitControlsImpl,
  CanvasProps & { rotate: boolean }
>((props, ref) => {
  return (
    <Can
      className='fixed top-0 left-0'
      camera={{ position: [0, 0, 5], fov: 30 }}
      {...props}
    >
      <Environment files='/studio.hdr' />
      <ambientLight intensity={0.1} />
      {/* <directionalLight intensity={1} /> */}
      <group>{props.children}</group>
      <OrbitControls
        ref={ref}
        zoomSpeed={0.5}
        // onChange={() => console.log('has changed')}
        // minDistance={3.25}
        maxDistance={20}
      />
    </Can>
  );
});
