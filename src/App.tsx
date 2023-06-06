import { useState, useEffect } from 'react';

import './App.css';

const models = [
  {
    preview: '/box.png',
    model:
      'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/korrigan-hat/model.gltf',
  },
  {
    preview: '/girl.png',
    model:
      'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/old-korrigan/model.gltf',
  },
];

function App() {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);

  const handleModel = (index: number) => () => {
    setCurrentModelIndex(index);
  };
  useEffect(() => {
    const slider = document.querySelector('#slider');
    console.log(slider);
    slider?.addEventListener('beforexrselect', (ev) => {
      ev.preventDefault();
    });
  }, []);
  return (
    <div className='md:h-screen bg-gradient-to-r from-[#201B18] to-[#7C6C60]'>
      <main className='px-8 py-11 h-full '>
        <div className='grid grid-cols-1 h-full'>
          <div className='flex flex-col space-y-4 text-white z-10'>
            <div className='rounded-[14px] bg-white bg-opacity-10 h-full flex flex-col p-4 justify-between'>
              <div className='relative'>
                <model-viewer
                  id='test'
                  ar
                  // ar-modes='scene-viewer webxr'
                  camera-controls
                  class='w-full min-h-10 md:hidden'
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
                    Activate AR new
                  </button>
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
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
