import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as PhoneIcon } from '../assets/phone.svg';
import { ReactComponent as MailIcon } from '../assets/mail.svg';

export const Product = () => {
  return (
    <main className='bg-white min-h-screen px-4 py-6'>
      <div className='flex flex-col'>
        <Logo className='text-[#5C5C5C]' />
        <div className='bg-white mt-10 rounded-2xl py-2.5 px-4 flex items-center space-x-3 border-[#D7D7D7] border'>
          <div className='py-2.5 text-black px-2 aspect-square flex-col space-y-1 rounded-full items-ceter flex justify-center border border-[#DCDCDC]'>
            <img
              src='/flora.png'
              width='32px'
              height='28px'
              className='object-cover self-center w-8'
            />
            <span className='text-[10px] font-bold tracking-tight'>
              АРТФЛОРА
            </span>
          </div>
          <div className='flex flex-col space-y-1 font-medium text-black'>
            <span className='text-xs text-black text-opacity-50'>Продавец</span>
            <span className='text-xl'>Артфлора</span>
          </div>
        </div>
        <div className='flex items-center justify-center bg-[#F9F9F9] rounded-2xl my-3'>
          <img src='/image-6.png' width='300px' height='300px' />
        </div>
        <div className='py-4 px-5 rounded-2xl border border-[#D7D7D7] flex flex-col'>
          <h1 className='text-xl font-semibold mb-2 text-black'>
            Альпиния лекарственная
          </h1>
          <p className='text-black text-opacity-50 mb-9 text-xs font-medium leading-6'>
            Калган лекарственный — многолетнее травянистое растение, высотой до
            1,5 метров. Корневище горизонтальное, сильноветвистое, толщиной 1—2
            см., покрыто кольчатыми светлыми листовыми рубцами, снаружи
            красно-бурое, внутри почти белое; снизу отходят немногочисленные
            корни.
          </p>
          <button className='bg-[#745CF6] text-xl font-semibold text-[#745CF6] bg-opacity-20 p-2 w-full rounded-full'>
            2 400 руб.
          </button>
        </div>
        <a
          href='/'
          className='font-medium self-center w-fit text-[#745CF6] relative mt-8 after:absolute after:w-full after:left-0 after:h-px after:bg-[#745CF6] after:-bottom-2'
        >
          Перейти в интернет-магазин
        </a>
        <div className='flex items-center justify-between mt-16 font-medium'>
          <a
            href='tel:+74957990960'
            className='space-x-1.5 text-sm flex items-center'
          >
            <PhoneIcon className='text-[#745CF6]' />
            <span className='text-black'>+7 (495) 799‑09‑60</span>
          </a>
          <a
            href='mailto:artflora@info.ru'
            className='space-x-1.5 text-sm flex items-center'
          >
            <MailIcon className='text-[#745CF6]' />
            <span className='text-black'>artflora@info.ru</span>
          </a>
        </div>
      </div>
    </main>
  );
};
