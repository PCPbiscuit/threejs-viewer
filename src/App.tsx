import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';

import { useState, useRef } from 'react';
import clsx from 'clsx';

import './App.css';

import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as RotateIcon } from './assets/360.svg';
import { ReactComponent as ShareIcon } from './assets/share.svg';
import { ReactComponent as CameraIcon } from './assets/camera.svg';
import { Canvas, Model } from './ui';

function App() {
  const ref = useRef<OrbitControlsImpl>(null);
  const [allowRotation, setAllowRotation] = useState(false);
  const handleAllowRotation = () => {
    setAllowRotation(!allowRotation);
    allowRotation && ref.current?.reset();
  };
  return (
    <>
      <Canvas
        rotate={allowRotation}
        ref={ref}
        className='!fixed left-0 top-0 w-full h-full'
      >
        <Model
          url={
            // 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/korrigan-hat/model.gltf'
            'https://lk.simple-ar.ru/uploads/products/bundle_file_webgl/lp_girl_gltf_01.glb'
          }
          enableRotation={allowRotation}
        />
      </Canvas>
      <main className='px-8 py-11 h-full bg-gradient-to-r from-[#201B18] to-[#7C6C60]'>
        <div className='grid md:grid-cols-3 grid-cols-2 h-full'>
          <div
            className={clsx(
              'flex flex-col justify-between md:col-span-2 text-black',
            )}
          >
            <Logo />
            <div
              className='w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center shrink-0 cursor-pointer hover:scale-105 transition-transform transform font-bold'
              onClick={handleAllowRotation}
            >
              {allowRotation ? 'R' : <RotateIcon />}
            </div>
          </div>
          <div className={clsx('flex flex-col space-y-4 text-white z-10')}>
            <div className='rounded-[14px] bg-white bg-opacity-10 h-full flex flex-col p-10 justify-between'>
              <div>
                <img
                  src='/shtule.png'
                  className='w-full rounded-lg overflow-hidden h-60 mb-6 object-cover'
                />
                <h2 className='font-bold text-lg mb-5'>Стул Style DSW серый</h2>
                <p className='font-medium'>
                  Знаменитый образец современного дизайна в стиле минимализм.
                  Дизайнеры и декораторы с неизменным успехом используют стул
                  DSW в гостиных, кухнях, кабинетах, детских комнатах, на
                  террасах и в публичных помещениях.
                </p>
              </div>
              <div className='font-bold cursor-pointer'>Купить на сайте </div>
              <div className='w-40 h-40 relative'>
                <model-viewer
                  id='test'
                  ar
                  ar-modes='webxr scene-viewer quick-look'
                  camera-controls
                  src={
                    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/korrigan-hat/model.gltf'
                  }
                  // src={Model}
                  alt='A 3D shoes'
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    zIndex: '100',
                  }}
                >
                  <button
                    slot='ar-button'
                    style={{
                      backgroundColor: 'black',
                      color: 'white',
                      borderRadius: '4px',
                      border: 'none',
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                    }}
                  >
                    Activate AR
                  </button>
                </model-viewer>
              </div>
            </div>
            <div className='bg-white h-24 flex items-center justify-center space-x-6 rounded-xl'>
              <div className='border border-[#dcdcdc] rounded-full h-[60px] w-[60px] flex items-center justify-center shrink-0'>
                <CameraIcon />
              </div>
              <div className='border border-[#dcdcdc] rounded-full h-[60px] w-[60px] flex items-center justify-center shrink-0'>
                <ShareIcon />
              </div>
              {/* <div className='border border-[#dcdcdc] bg-red-600 rounded-full h-[60px] w-[60px] flex items-center justify-center shrink-0'>
                <XIcon />
              </div> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
