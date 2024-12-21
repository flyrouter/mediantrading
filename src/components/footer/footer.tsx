import cert from '../../assets/pics/certificate.jpg';
import certPdf from '../../assets/docs/certificate.pdf';
import ModalImage from '../modal-image';
import { useState } from 'preact/hooks';

export default function Footer() {

  const [ picToShow, setPicToShow ] = useState<{src: string, alt: string} | null>(null);

  function handleImgClick(e: Event) {
    if (e.target instanceof HTMLImageElement) {
      const src = e.target.getAttribute('src');
      const alt = e.target.getAttribute('alt');
      if (src && alt) setPicToShow({ src, alt });
    }
  }

  function closeModalImage() {
    setPicToShow(null);
  }

  return (
    <footer>
      <div className="bg-light-grey flex flex-col justify-center items-center min-h-16 w-full">
        <div className="flex flex-row justify-start w-full max-w-[1240px] px-4 md:px-0 pt-10 pb-16 border-b-2 border-black">
          <div className="grow flex flex-col justify-end">
            <p className="text-3xl pb-8">Hong Kong</p>
            <p className="text-3xl">FO TAN, NEW TERRITORIES</p>
            <p className="text-2xl pb-8">info@mediantrading.com</p>
            <p className="text-3xl max-w-[800px]">VALIANT INDUSTRIAL CENTRE, 2-12 AU PUI WAN STREET ROOM 8, S-V, 6/F</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-[260px] aspect-auto" src={cert} alt="certificate_image" onClick={handleImgClick}></img>
            <a className="block w-60 h-12 bg-brand-blue text-center pt-3 mt-2 text-white text-lg" href={certPdf}>DOWNLOAD CERTIFICATE</a>
          </div>
        </div>
        <p className="text-lg py-8">© Mediantrading.net 2024, All rights reserved</p>
      </div>
      { picToShow && <ModalImage src={picToShow.src} alt={picToShow.alt} close={closeModalImage}/> }
    </footer>
  );
}
