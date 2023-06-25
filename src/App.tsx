import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';

import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

import './App.css';

import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as RotateIcon } from './assets/360.svg';
import { ReactComponent as ShareIcon } from './assets/share.svg';
import { ReactComponent as CameraIcon } from './assets/camera.svg';
import { ReactComponent as FloraIcon } from './assets/flora.svg';
import { ReactComponent as PhoneIcon } from './assets/phone.svg';
import { ReactComponent as WebIcon } from './assets/web.svg';
import { Canvas, Model } from './ui';

const models = [
  {
    preview: '/table.png',
    model:
      'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/table-wood/model.gltf',
    title: 'Какой то текст table',
  },
  {
    preview: '/chair.png',
    model:
      'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/chair-wood/model.gltf',
    title: 'Какой то текст chair',
  },
  {
    preview: '/box.png',
    model: 'https://lk.simple-ar.ru/uploads/products/file_3d_model/box.glb',
    title: 'Какой то текст box',
  },
  {
    preview: '/girl.png',
    model:
      'https://lk.simple-ar.ru/uploads/products/bundle_file_webgl/lp_girl_gltf_01.glb',
    title: 'Какой то текст girl',
  },
];

function App() {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const [arStarted, setArStarted] = useState(false);
  const ref = useRef<OrbitControlsImpl>(null);
  const ref2 = useRef<OrbitControlsImpl>(null);
  const [allowRotation, setAllowRotation] = useState(false);
  const handleAllowRotation = () => {
    setAllowRotation(!allowRotation);
    allowRotation && ref.current?.reset();
  };

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
      if (event.detail.status === 'not-presenting') {
        setArStarted(false);
      }
    });
  }, []);
  return (
    <div className='md:h-screen bg-neutral-50 md:bg-gradient-to-r md:from-[#201B18] md:to-[#7C6C60]'>
      {window.innerWidth >= 768 && (
        <Canvas
          rotate={allowRotation}
          ref={ref}
          className='!fixed left-0 top-0 w-screen h-full hidden md:block'
        >
          <Model
            url={models[currentModelIndex]?.model}
            enableRotation={allowRotation}
          />
        </Canvas>
      )}
      <main className='px-8 py-11 h-full '>
        <div className='grid md:grid-cols-3 grid-cols-1 h-full'>
          <div
            className={clsx(
              'md:flex hidden flex-col justify-between md:col-span-2 text-black',
            )}
          >
            <Logo className='text-white' />
            <div
              className='w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center shrink-0 cursor-pointer hover:scale-105 transition-transform transform font-bold'
              onClick={handleAllowRotation}
            >
              {allowRotation ? 'R' : <RotateIcon />}
            </div>
          </div>
          <div className={clsx('flex flex-col space-y-4 text-white z-10')}>
            <div className='md:hidden flex flex-col space-y-6'>
              <Logo className='text-[#5C5C5C] md:text-white' />
              <div className='bg-white rounded-xl py-2.5 px-4 flex items-center space-x-3'>
                <div className='py-2.5 text-black px-2 aspect-square flex-col space-y-1 rounded-full items-ceter flex justify-center border border-[#DCDCDC]'>
                  <img
                    src='/flora.png'
                    width='32px'
                    height='28px'
                    className='object-cover self-center w-8'
                  />
                  <span className='text-[10px]'>АРТФЛОРА</span>
                </div>
                <div className='flex flex-col space-y-1 font-medium text-black'>
                  <span className='text-xs text-black text-opacity-50'>
                    Продавец
                  </span>
                  <span className='text-xl'>Артфлора</span>
                </div>
              </div>
            </div>
            <div className='rounded-[14px] bg-white md:bg-opacity-10 h-full flex flex-col md:p-10 p-6 justify-between z-50'>
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
                Купить на сайте
              </div>
              <div className='relative md:hidden'>
                <div className='flex flex-col'>
                  <span className='bg-[#FFAC0C21] rounded-full py-1 px-3 text-xs font-medium text-[#FF9E0C] w-fit'>
                    Группа
                  </span>
                  <p className='font-medium text-lg mt-1.5'>Стулья DSW</p>
                  <img
                    className='aspect-[5/4] w-full rounded-md'
                    src={models[0].preview}
                  />
                </div>
                <model-viewer
                  id='test'
                  ref={ref2}
                  ar
                  // ar-modes='scene-viewer webxr'
                  camera-controls
                  class='w-full h-0'
                  src={models[currentModelIndex]?.model}
                  reveal={arStarted ? 'auto' : 'manual'}
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
                      display: 'none',
                    }}
                  >
                    Activate AR
                  </button>
                  {arStarted && (
                    <>
                      <div className='flex w-full absolute top-0 left-0 items-center justify-between space-x-4 p-10'>
                        <Logo className='text-white' /> <FloraIcon />
                      </div>
                      <div className='absolute w-full top-1/2 flex items-center justify-center -translate-y-1/2'>
                        {models[currentModelIndex]?.title}
                      </div>
                    </>
                  )}
                  <div
                    className='w-full absolute bottom-0 overflow-hidden'
                    id='slider'
                  >
                    <div
                      className={clsx(
                        'overflow-x-auto snap-mandatory scroll-smooth',
                        arStarted ? 'flex' : 'hidden',
                      )}
                    >
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
              <button
                className='bg-[#1B1B1B] p-4 flex items-center justify-center'
                onClick={activateAR}
              >
                <WebIcon className='mr-2.5' /> <span>Открыть в браузере</span>
              </button>
              <button className='bg-[#745CF6] p-4 flex items-center justify-center'>
                <PhoneIcon className='mr-2.5' />{' '}
                <span>Открыть в приложении</span>
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
