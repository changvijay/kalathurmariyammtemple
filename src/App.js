'use client'

import { useState , useEffect} from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import styled from 'styled-components';
import './App.css'


export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [businessType, setBusinessType] = useState("அம்பிகை மாரியம்மன் அருளால் நலம் மற்றும் பாதுகாப்பு பெறுங்கள்.");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true); // Trigger the animation
      setTimeout(() => setAnimate(false), 500); // Remove animation after duration

      setBusinessType((prev) => {
        // Get the index of the next business type in the array
        const businessTypes = ["Experience the Blessings of Mariyaman.", "அம்பிகை மாரியம்மன் அருளால் நலம் மற்றும் பாதுகாப்பு பெறுங்கள்."];
        const currentIndex = businessTypes.indexOf(prev);
        const nextIndex = (currentIndex + 1) % businessTypes.length;
        return businessTypes[nextIndex];
      });
    }, 3500); // Change every 3 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const StyledWrapper = styled.div`
  display: flex;
  gap: 15px; /* Add spacing between cards */
  position: relative;
  align-items: center;


  /* Switch to column layout on mobile */
  @media (max-width: 768px) {
    flex-direction: column;
  }

  /* Target all cards except the one being hovered */
  &:hover > div:not(:hover) {
    filter: blur(5px);
    transform: scale(1); /* Keep other cards normal scale */
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 400px;
  width: 100%;
  max-width: 600px; /* Limit the max width of the cards */
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: 400ms;
  background-color: ${(props) => props.bgColor}; /* Background color dynamic */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add shadow */
  position: relative; /* Ensure z-index works */

  p.tip {
    font-size: 1em;
    font-weight: 700;
  }

  p.second-text {
    font-size: 0.7em;
  }

  /* Hover effect for the current card */
  &:hover {
    transform: scale(1.2); /* Scale up the card */
    transition: transform 400ms;
    z-index: 1; /* Ensure the hovered card is on top */
  }

  /* Focus effect for accessibility */
  &:focus-within {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }

  /* Mobile specific styling for one-by-one display */
  @media (max-width: 768px) {
    width: 100%; /* Take full width */
    max-width: 100%; /* Override max width */
    margin: 0 auto; /* Center the cards */
    &:hover {
      transform: none; /* Disable hover scale effect */
    }

    &:not(:hover) {
      filter: none;
      transform: scale(1); /* Ensure scale is normal */
    }
  }
`;

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <span className="ms-6">mariyamman kovil</span>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/" className="text-sm/6 font-semibold text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                
                <div className="py-6">
                  <a
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
  <div
    aria-hidden="true"
    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
  >
    <div
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
      className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
    />
  </div>
  <div className=" w-full py-8 sm:py-10 lg:py-8">
    <div className="sm:mb-8 sm:flex sm:justify-center">
      <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        Welcome to Kalathur mariyamman temple
      </div>
    </div>
    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6">
  {/* Content Section */}
  <div className="flex flex-col justify-center">
  <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              <span
                className={animate ? 'business-type-animation' : ''}
                key={businessType}
              >
                {businessType}
              </span>
            </h1>
    <div className="mt-10 flex items-center gap-x-6">
      <a
        href="/"
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Donate
      </a>
      <a href="/" className="text-sm font-semibold text-gray-900">
        Learn more <span aria-hidden="true">→</span>
      </a>
    </div>
  </div>

  {/* Image Section */}
  <div className="flex justify-center lg:w-1/1 lg:justify-end relative p-4 bg-gold imgs">
    <img
      src="/pngwing.png" // Replace with your image URL
      alt="Description"
      className="w-full rounded  focus:outline-none focus:ring-4 focus:ring-gold focus:ring-opacity-50 hover:scale-105 transition-transform duration-500"
    />
  </div>
</div>

  </div>

  <div
    aria-hidden="true"
    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
  >
    <div
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
      className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
    />
  </div>
</div>
<center>
<StyledWrapper className='flex justify-center relative p-4'>
  <Card bgColor="#007e9e" tabIndex="0">
    <img
      src="/1.jpeg"
      alt="Batman and VR headset"
      className="rounded-lg object-cover w-full h-64"  // Set fixed height for all images
    />
  </Card>
  <Card bgColor="#0062ff" tabIndex="0">
    <img
      src="/2.jpeg"
      alt="Batman and VR headset"
      className="rounded-lg object-cover w-full h-64"  // Set fixed height for all images
    />
  </Card>
  <Card bgColor="#18cd5e" tabIndex="0">
    <img
      src="/3.jpeg"
      alt="Batman and VR headset"
      className="rounded-lg object-cover w-full h-64"  // Set fixed height for all images
    />
  </Card>
</StyledWrapper>

  </center>
  <div className='flex justify-center'>
  <div className="flex flex-col lg:flex-row justify-between items-center bg-gradient-to-r from-black to-yellow-500 text-white rounded-lg shadow-lg w-full m-10 p-5 h-auto">
    
    {/* Left content section */}
    <div className="w-full lg:w-1/2 mb-5 lg:mb-0">
      <div className="bg-red-600 text-white text-xs font-bold py-1 px-2 rounded inline-block mb-3">
        Bundle offer
      </div>
      <h1 className="text-2xl font-bold">Get Batman: Arkham Shadow</h1>
      <p className="text-sm mt-2 mb-4">
        Plus three months of Meta Quest+ when you buy Quest 3 or 3S.
      </p>
      <a href="/" className="text-blue-400 font-bold hover:underline">
        Learn more
      </a>
    </div>

    {/* Right image section */}
    <div className="w-full lg:w-1/2 flex justify-center items-center relative">
      <img
        src="/pngwing.png"
        alt="Batman and VR headset"
        className="rounded-lg object-contain w-full h-auto"  
      />
    </div>
  </div>
</div >

<div className='flex justify-center m-5 p-5'>
<ol class="relative border-s border-gray-200 dark:border-gray-700">                  
<li class="mb-10 ms-6">
  <span class="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -start-4 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
    <img class="rounded-full shadow-lg w-8 h-8" src="/pngwing.png" alt="Thomas Lean" />
  </span>
  <div class="p-6 m-6 w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-700 dark:border-gray-600">
    <div class="items-center justify-between mb-4 sm:flex">
      <time class="mb-1 text-sm font-normal text-gray-400 sm:order-last sm:mb-0">26/1/2025</time>
      <div class="text-sm font-normal text-gray-500 dark:text-gray-300"></div>
    </div>
    <div class="p-4 text-sm italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
      Maha Kumbhabhishekam
    </div>
  </div>
</li>

    <li class="mb-10 ms-6">
  <span class="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -start-4 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
    <img class="rounded-full shadow-lg w-8 h-8" src="/pngwing.png" alt="Thomas Lean" />
  </span>
  <div class="p-6 m-6 w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-700 dark:border-gray-600">
    <div class="items-center justify-between mb-4 sm:flex">
      <time class="mb-1 text-sm font-normal text-gray-400 sm:order-last sm:mb-0">26/1/2025</time>
      <div class="text-sm font-normal text-gray-500 dark:text-gray-300"></div>
    </div>
    <div class="p-4 text-sm italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
      Maha Kumbhabhishekam
    </div>
  </div>
</li>

<li class="mb-10 ms-6">
  <span class="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -start-4 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
    <img class="rounded-full shadow-lg w-8 h-8" src="/pngwing.png" alt="Thomas Lean" />
  </span>
  <div class="p-6 m-6 w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-700 dark:border-gray-600">
    <div class="items-center justify-between mb-4 sm:flex">
      <time class="mb-1 text-sm font-normal text-gray-400 sm:order-last sm:mb-0">26/1/2025</time>
      <div class="text-sm font-normal text-gray-500 dark:text-gray-300"></div>
    </div>
    <div class="p-4 text-sm italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
      Maha Kumbhabhishekam
    </div>
  </div>
</li>

</ol>

</div>

<div className="flex flex-wrap justify-center items-center m-10 gap-6">
<div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
  <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
    <img src="/pudhariaman.jpg" alt="card-image" />
  </div>
  <div class="p-4">
    <h6 class="mb-2 text-slate-800 text-xl font-semibold">
    குளுத்தினாயம்மன்: கிராமங்களின் பாதுகாவலரும் அருளாளருமாக
    </h6>
    <p class="text-slate-600 leading-normal font-light">
    குளுத்தினாயம்மன், கிராமங்களை பாதுகாக்கும் சக்தியாயிருப்பவர், ஆரோக்கியம், செழிப்பு மற்றும் சமரசத்தை அருள்வார். அவரின் அருள் கிராம மக்களை துன்பத்திலிருந்து காப்பாற்றி, செழிப்புக்கும் உறுதிக்கும் வழி வகுக்கின்றது. அவர் பக்தர்களுக்கு உறுதி மற்றும் நம்பிக்கையின் அடையாளமாக, சமாதானம் மற்றும் சக்தி அளிக்கிறார். கிராமங்களில் நிகழும் திருவிழாக்கள் மற்றும் பூஜைகள் மூலம் அவர் அனைத்து மக்களுக்கும் அருள் பரப்புகிறார்.    </p>
  </div>
  <div class="px-4 pb-4 pt-0 mt-2">
    <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Read more
    </button>
  </div>
</div> <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
  <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
    <img src="/kuluthiyaman.jpg" alt="card-image" />
  </div>
  <div class="p-4">
    <h6 class="mb-2 text-slate-800 text-xl font-semibold">
    புதாரியம்மன்: கிராமத்தின் காவல் தேவியும் பரிபாலகியும்
    </h6>
    <p class="text-slate-600 leading-normal font-light">
    புதாரியம்மன்: கிராமத்தின் காவல் தேவியும் பரிபாலகியும்
    புதாரியம்மன், கிராம மக்களின் பாதுகாவலராக, ஆரோக்கியம் மற்றும் செழிப்பை பரிசளிக்கிறார். அவர் வாழ்ந்த கிராமங்களில் மக்கள் ஒருமித்துக் கொள்வதற்கும், வாழ்வின் அனைத்து பிரச்னைகளையும் எதிர்கொள்வதற்கும் தன்னை காப்பாற்றி அருள் வழங்குகிறார். அவரது அருள், கிராமங்களை சோர்வு மற்றும் துன்பங்களிலிருந்து பாதுகாக்கும் சக்தியாய் பிரகடனமாக உள்ளது.
    </p>
  </div>
  <div class="px-4 pb-4 pt-0 mt-2">
    <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Read more
    </button>
  </div>
</div> 
</div>


<footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kalathur Mariyaman Kovils</span>
              </a>
          </div>
          {/* <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://flowbite.com/" class="hover:underline">Flowbite</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="/" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="/" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div> */}
      </div>
      <section class="text-gray-600 body-font rounded-[30px]  shadow-lg  relative">
  <div class="absolute rounded-[30px]  shadow-lg  inset-0 bg-gray-300">
    <iframe className='rounded-[30px]  shadow-lg ' width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7779.202877873878!2d79.53361274183588!3d12.86899949974777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52cf4aa2a52245%3A0xdca53bca67d4c9d1!2sVIJAY%20STORE!5e0!3m2!1sen!2sin!4v1734099071131!5m2!1sen!2sin"></iframe>
  </div>
  <div class="container px-5 py-24 mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
    </div>
  </div>
</section>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </a>
              <a href="/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Dribbble account</span>
              </a>
          </div>
      </div>
    </div>
</footer>

    </div>
  )
}