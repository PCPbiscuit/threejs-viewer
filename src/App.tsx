import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

import './App.css';

import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as ShareIcon } from './assets/share.svg';
import { ReactComponent as CameraIcon } from './assets/camera.svg';
import { ReactComponent as FloraIcon } from './assets/flora.svg';

const models = [
  {
    preview: '/hat.png',
    model:
      'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/korrigan-hat/model.gltf',
  },
  {
    preview: '/old.png',
    model:
      'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/old-korrigan/model.gltf',
  },
  {
    preview: '/box.png',
    model: 'https://lk.simple-ar.ru/uploads/products/file_3d_model/box.glb',
  },
  {
    preview: '/girl.png',
    model:
      'https://lk.simple-ar.ru/uploads/products/bundle_file_webgl/lp_girl_gltf_01.glb',
  },
];

function App() {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const [arStarted, setArStarted] = useState(false);
  const ref2 = useRef(null);

  const handleModel = (index: number) => () => {
    setCurrentModelIndex(index);
  };
  const activateAR = () => {
    ref2.current?.activateAR();
  };
  useEffect(() => {
    const slider = document.querySelector('#slider');
    const viewer = document.querySelector('#test');
    slider?.addEventListener('beforexrselect', (ev) => {
      ev.preventDefault();
    });
    viewer?.addEventListener('ar-status', (event) => {
      console.log(event);
      if (event.detail.status === 'session-started') {
        setArStarted(true);
      }
    });
  }, []);
  return (
    <div className='h-screen bg-gradient-to-r from-[#201B18] to-[#7C6C60]'>
      <main className='px-8 py-11 h-full '>
        <div className='grid md:grid-cols-3 grid-cols-1 h-full'>
          <div className={clsx('flex flex-col space-y-4 text-white z-10')}>
            <div className='flex items-center justify-between space-x-4'>
              <Logo /> <FloraIcon />
            </div>
            <div className='rounded-[14px] bg-white bg-opacity-10 h-full flex flex-col md:p-10 p-4 justify-between'>
              <div className='hidden md:block'>
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
              <div className='font-bold cursor-pointer hidden md:block'>
                Купить на сайте{' '}
              </div>
              <div className='relative'>
                <model-viewer
                  id='test'
                  ref={ref2}
                  ar
                  // ar-modes='scene-viewer webxr quick-look'
                  camera-controls
                  class='w-full'
                  src={models[currentModelIndex]?.model}
                  reveal='manual'
                  alt='A 3D shoes'
                >
                  <button
                    slot='ar-button'
                    style={{
                      backgroundColor: 'black',
                      color: 'white',
                      borderRadius: '4px',
                      border: 'none',
                      position: 'absolute',
                      top: '0px',
                      left: '0',
                    }}
                  >
                    Activate AR
                  </button>
                  {arStarted && (
                    <div className='flex w-full absolute top-0 left-0 items-center justify-between space-x-4 p-10'>
                      <Logo /> <FloraIcon />
                    </div>
                  )}
                  <div
                    className='w-full absolute bottom-0 overflow-hidden'
                    id='slider'
                  >
                    <div className='flex overflow-x-auto snap-mandatory scroll-smooth'>
                      {models.map((model, index) => (
                        <button
                          className='flex border-none mr-2 bg-cover bg-no-repeat w-24 h-24 rounded-lg shrink-0 bg-center'
                          onClick={handleModel(index)}
                          style={{ backgroundImage: `url(${model.preview})` }}
                          key={index}
                        ></button>
                      ))}
                    </div>
                  </div>
                </model-viewer>
              </div>
            </div>
            <div className='md:hidden flex flex-col space-y-2 text-sm'>
              <button className='bg-white p-5 text-black'>
                Открыть в мобильном приложении
              </button>
              <button className='bg-white bg-opacity-25 p-5'>
                Открыть в браузере
              </button>
            </div>
            <div className='bg-white h-24 md:flex hidden items-center justify-center space-x-6 rounded-xl'>
              <div className='border border-[#dcdcdc] rounded-full h-[60px] w-[60px] flex items-center justify-center shrink-0'>
                <CameraIcon />
              </div>
              <div className='border border-[#dcdcdc] rounded-full h-[60px] w-[60px] flex items-center justify-center shrink-0'>
                <ShareIcon />
              </div>
              {/* <div className='border border-[#dcdcdc] bg-red-600 rounded-full h-[60px] w-[60px] flex items-center justify-center shrink-0'>
                <XIcon />
              </div> */}
              d
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
