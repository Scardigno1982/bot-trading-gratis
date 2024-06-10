import { Button } from "flowbite-react";
import type { FC } from "react";
import { blue } from "tailwindcss/colors";

const AppScreenshotWithCTAsHero: FC = function () {
  return (
<section className="bg-white dark:bg-gray-900">
  <div className="mx-auto max-w-screen-xl px-4 pt-8 text-center lg:px-12 lg:pt-16">
    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
      Invierte en el potencial del mercado global
    </h1>
    <p className="mb-8 text-gray-500 dark:text-gray-400 sm:px-16 md:text-lg lg:text-xl xl:px-48">
      Con nuestro bot de señales de trading, te ayudamos a identificar oportunidades en los mercados financieros para maximizar tus inversiones.
    </p>
    <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16">
      <Button href="#" size="lg" color="blue">
        Prueba gratuita por 30 días
      </Button>
      {/* <Button
        color="light"
        outline
        size="lg"
        className="[&>span]:items-center"
      >
        Precios y Preguntas Frecuentes
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button> */}
    </div>
    <img
      className="z-1 mx-auto mb-5 rounded-lg border border-gray-200 shadow-xl dark:hidden dark:border-gray-600 lg:mb-8"
      src="img/telegram.png"
      alt="vista general del dashboard"
    />
    <img
      className="z-1 mx-auto mb-5 hidden rounded-lg border border-gray-200 shadow-xl dark:block dark:border-gray-600 lg:mb-8"
      src="img/telegram.png"
      alt="vista general del dashboard en modo oscuro"
    />
  </div>
  <div className="z-2 -mt-48 bg-gray-50 pb-8 pt-48 dark:bg-gray-800 sm:-mt-80 sm:pt-80 lg:pb-16">
    <div className="mx-auto px-4 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
      <div className="mt-8 flex flex-wrap items-center justify-center text-gray-500 sm:justify-between">
      
      
      <a 
        href="#" 
        className="mb-5 mr-5  lg:mb-0 hover:text-gray-900 dark:hover:text-gray-400"
        aria-label="Binance"
      >
        <svg fill="currentColor" width="100px" height="100px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white">  
          <path d="M15.986 1.019l9.189 9.159-3.396 3.393-5.793-5.793-5.793 5.823-3.396-3.393 9.189-9.189zM4.399 12.605l3.365 3.395-3.363 3.365-3.396-3.365zM15.986 12.607l3.394 3.363-3.395 3.395-3.395-3.365 3.395-3.393zM27.572 12.605l3.423 3.395-3.393 3.395-3.395-3.395zM21.778 18.399l3.396 3.393-9.189 9.189-9.189-9.187 3.396-3.395 5.793 5.823 5.793-5.823z"></path>
        </svg>
      </a>

      <a
        href="#"
        className="mb-5 mr-5  lg:mb-0 hover:text-gray-900 dark:hover:text-gray-400"
        aria-label="Coinbase" 
      >
        <svg fill="currentColor" width="100px" height="100px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"></path>
        </svg>
      </a>

           

          </div>
        </div>
      </div>
    </section>

  );
};

export default AppScreenshotWithCTAsHero;
