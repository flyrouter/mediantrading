/// <reference types="vite-plugin-svgr/client" />
import Clock from './pics/clock.svg?react';
import Envelope from  './pics/envelope.svg?react';
import Phone from './pics/phone.svg?react';
import logo from '../../assets/pics/logo.svg';
import phon from './pics/phon.png';
export default function Header() {

  return (
    <header>
      <div className="bg-light-grey flex flex-col justify-center items-center min-h-16 w-full">
        <div className="flex flex-row justify-start items-center gap-x-4 w-full max-w-[1240px] px-4 md:px-0">
          <ul className="w-full max-w-[1240px] flex flex-row justify-start">
            <li className="border-r-2 border-grey pr-4 text-sm flex flex-row items-center gap-x-1 *:w-5 *:h-5"><Clock />Mon - Sat 9:00 Am to 7:00 Pm</li>
            <li className="border-r-2 border-grey px-4 text-sm flex flex-row items-center gap-x-1 [&>svg]:w-5 [&>svg]:h-5">
              <Envelope />
              <a href="mailto:info@mediantrading.com">info@mediantrading.com</a>
            </li>
            <li className="pl-2 text-sm flex flex-row items-center gap-x-1 [&>svg]:w-5 [&>svg]:h-5">
              <Phone />
              <a href="tel:86 136 5108 0957" className="w-max">86 136 5108 0957</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-brand-blue flex flex-col items-center min-h-14 w-full">
        <nav className="min-h-16 bg-brand-blue flex flex-row justify-between items-center relative w-full max-w-[1240px] px-4 md:px-0">
          <img src={logo} className="w-[140px] aspect-auto"/>
          <ul className="flex flex-row gap-x-6">
            <li className="text-white opacity-60 hover:opacity-100 text-base">About us</li>
            <li className="text-white opacity-60 hover:opacity-100 text-base">Transportation</li>
            <li className="text-white opacity-60 hover:opacity-100 text-base">Advantages</li>
            <li className="text-white opacity-60 hover:opacity-100 text-base">News</li>
            <li className="text-white opacity-60 hover:opacity-100 text-base">Contact us</li>
          </ul>
        </nav>
      </div>
      <div className="bg-white flex flex-col items-center min-h-14 w-full">
        <div className="bg-white flex flex-row items-center relative w-full max-w-[1240px] px-4 md:px-0">
          <div className="mr-auto pt-4 flex flex-row">
            <div className="border-r-2 pr-4 flex flex-row justify-start items-center gap-x-2">
              <img src={phon} className="w-[42px] h-[42px]"/> 
              <div>
                <p className="text-xl">Needed to buy and ship DDP?</p>
                <p className="text-xl">Call Us Now</p>
              </div>
            </div>
            <div className="pl-4 flex flex-col justify-center">
              <p className="text-2xl">86 136 5108 0957</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
