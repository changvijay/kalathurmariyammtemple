'use client'
import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useAuth0 } from "@auth0/auth0-react";
import AuthSection from "./AuthSection";
import ImageGallery from "./ImageGallery";
import styled from 'styled-components';
import './home.css'

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
width: 100%;
max-width: 600px; /* Limit the max width of the cards */
border-radius: 10px;
color: white;
cursor: pointer;
transition: 400ms;
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

export  function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [businessType, setBusinessType] = useState("அம்பிகை மாரியம்மன் அருளால் நலம் மற்றும் பாதுகாப்பு பெறுங்கள்.");
  const [animate, setAnimate] = useState(false);
  // hero-section text
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true); 
      setTimeout(() => setAnimate(false), 500); 
      setBusinessType((prev) => {
        const businessTypes = ["Experience the Blessings of Mariyaman.", "அம்பிகை மாரியம்மன் அருளால் நலம் மற்றும் பாதுகாப்பு பெறுங்கள்."];
        const currentIndex = businessTypes.indexOf(prev);
        const nextIndex = (currentIndex + 1) % businessTypes.length;
        return businessTypes[nextIndex];
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);
  const {
    isLoading,isAuthenticated
  } = useAuth0();
  if (isLoading && isAuthenticated) {
    return <div>Loading...</div>;
  }
  return (
    < >
      {/* nave bar */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
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
            <AuthSection />
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden ">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">mariyamman</span>
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

            {/* Mobile Auth Section */}
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6">
                  <AuthSection />
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* hero section */}
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
             {} Welcome to Kalathur mariyamman temple
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
                  href="/payment"
                  className="rounded-md block bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                 
                  Donate
          </a>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center lg:w-1/1 lg:justify-end relative p-4 bg-gold imgs">
              <img
                src="/pngwing.png"
                alt="Description"
                className="w-full block rounded  focus:outline-none focus:ring-4 focus:ring-gold focus:ring-opacity-50 hover:scale-105 transition-transform duration-500"
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

      {/* social media icons */}
      <center className="soc block justify-items-center">
        <ul>
          <li>
            <a 
              href="https://www.youtube.com/channel/UCzar0OCX91zwYqBnYsC-ymA" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="YouTube Channel"
            >
              <i className="fab fa-youtube" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a 
              href="https://www.instagram.com/kalathurmariamman/profilecard/?igsh=MXF0aTlwYmkxYTNlNQ==" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram Profile"
            >
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook Page"
            >
              <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a 
              href="https://www.twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter Profile"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </center>
      
      {/* 3 img section */}
      <center>
        <StyledWrapper className='flex justify-center block relative p-4'>
          <Card  tabIndex="0">
            <img
              src="/mariamman_1.jpg"
              alt="Batman and VR headset"
              className="rounded-lg w-full block h-64"  
            />
          </Card>
          <Card tabIndex="0">
            <img
              src="/mariamman_2.jpg"
              alt="Batman and VR headset"
              className="rounded-l w-full block h-64" 
            />
          </Card>
          <Card  tabIndex="0">
            <img
              src="/mariamman_3.jpg"
              alt="Batman and VR headset"
              className="rounded-lg w-full block h-64"  
            />
          </Card>
          <Card  tabIndex="0">
            <img
              src="/mariyaman_4.jpg"
              alt="Batman and VR headset"
              className="rounded-lg w-full block h-64"  
            />
          </Card>
        </StyledWrapper>

      </center>

      {/* slider */}
      <div className="mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden" style={{width: "80%"}}>
      {/* Header Section */}
      <div className="bg-green-500 text-white text-center py-4 text-2xl font-bold">
        📂 Google Drive Image Gallery
      </div>

      {/* Iframe Section */}
      <div className="overflow-hidden">
        <iframe
          src="https://drive.google.com/embeddedfolderview?id=1LhOkUpjHz4nE-US3N9k_HYQ3Y2bTBT-O#grid"
          className="w-full h-[500px] border-none"
          title="Google Drive Folder"
        ></iframe>
      </div>

      {/* Button Section */}
      <div className="text-center py-5">
        <a
          href="https://drive.google.com/drive/folders/1LhOkUpjHz4nE-US3N9k_HYQ3Y2bTBT-O?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-6 py-2 rounded-lg text-lg font-semibold shadow-md transition transform hover:scale-105 hover:bg-green-600"
        >
          🔗 View All Files
        </a>
      </div>
      </div>

      <ImageGallery/>
      


      {/* main-section */}
      <div className='flex block justify-center'>
        <div className="flex flex-col lg:flex-row justify-between items-center bg-gradient-to-r from-black to-yellow-500 text-white rounded-lg shadow-lg w-full m-10 p-5 h-auto">
          <div className="w-full lg:w-1/2 mb-5 lg:mb-0">
            <div className="bg-red-600 text-white text-xs font-bold py-5 px-5 rounded inline-block mb-3">
            Welcome to Kalathur Mariamman Temple
            </div>
            <div className="text-sm mt-2 mb-4">
              A spiritual haven preserving the cultural and historical essence of Tamil Nadu. <br />
              <div className="p-4 text-sm italic font-normal border border-gray-200 rounded-lg bg-gray-50" style={{color:'black'}}>
                Join us for the grand Maha Kumbhabhishekam ceremony on June 26, 2025, asacred event to bless the temple.
              </div>
            </div>
            
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center relative">
            <img
              src="/pngwing.png"
              alt="Batman and VR headset"
              className="rounded-lg sectionimg object-contain h-auto"
            />
          </div>
        </div>
      </div >
      
      {/* z-section */}
      <div className="container mx-auto  z-container">

        <div className="grid grid-cols-1 md:grid-cols-2 p-6 row gap-6 block items-center">
          <div>
            <p className="text-justify">
            மாரியம்மன் சொல்கிறாள்: ‘மக்களே, உங்கள் வாழ்வின் மகத்துவம் பிறருக்கு உதவுவதிலும், அவர்கள் துன்பங்களில் கருணையுடன் செயல்படுவதிலும் தான் உள்ளது. உங்கள் மனதில் அமைதியையும், உங்கள் செயல்களில் பரப்பும் ஒளியையும் ஊட்டுங்கள். மற்றவர்களின் துயரங்களை நீக்குவது, தெய்வீகத்துடன் உங்கள் வாழ்க்கையை இணைப்பதாக இருக்கும்.
            </p>
          </div>
          <center>
          <img src="/1.jpeg" alt="Placeholder" className="rounded-lg order-1 md:order-none z-img" /> 
          </center>         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 p-6 row gap-6 block items-center mt-10">
        <center>
          <img src="/3.png" alt="Placeholder" className="rounded-lg order-1 md:order-none z-img" />   
          </center>       
          <div>
            <p className="text-justify">
            மாரியம்மன் உபதேசிக்கிறார்: ‘எப்போதும் உங்கள் சகோதரரைப் போல பிறரைப் பாருங்கள். துன்பம் அவர்களை சுற்றியிருக்கும்போது, உங்கள் கரங்களால் ஆதரவளிக்கவும். இதுவே உண்மையான மனம் கொண்ட மனிதனின் பண்பும், கடவுளின் வரமும் ஆகும்.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 p-6 row gap-6 block items-center mt-10">
          <div>
            <p className="text-justify">
            மாரியம்மன் கூறுகிறாள்: ‘அன்பே உங்கள் சக்தி. பிறர் துன்பத்தில் இருக்கும் போது அவர்களைப் பாதுகாக்குங்கள். நீங்கள் செய்வதற்கு திரும்பும் நன்மைகள் உங்கள் வாழ்க்கையைச் சிறப்பாக்கும். பக்தியில் மட்டுமல்ல, உதவியிலும் தெய்வத்தை காணுங்கள்.
            </p>
          </div>
          <center>
          <img src="/2.jpeg" alt="Placeholder" className="rounded-lg order-1 md:order-none z-img" />
          </center>
        </div>

      </div>

      {/* events section */}
      <div className="relative flex justify-center p-5" style={{width: "100%"}}>
          {/* Central Line */}
          <div className="absolute w-1 bg-gray-300 dark:bg-gray-700 h-full left-1/2 transform -translate-x-1/2"></div>

          <ol className="relative w-full">
            {[
              { date: "தை 10 23.01.2025 வியாழன்", event: "காலை 8.00 மணிக்கு 9.00 மணி முதல் \n மாலை 4.30 மணிக்கு 5.00 மணி முதல்" , mess:"காலை: தேவதா அனுக்ஞை, விக்னேஸ்வர பூஜை, எஜமானர் சங்கல்பம், ஸ்ரீ கணபதி ஹோமம், ஸ்ரீ லஷ்மி ஹோமம், ஸ்ரீ நவகிரஹ ஹோமம், கோ பூஜை, தன பூஜை, பூர்ணாஹுதி, தீபாராதனை, பிரசாதம் வழங்குதல். மாலை: வாஸ்து சாந்தி, ரக்ஷோக்ன ஹோமம், பிரவேசபலி, ம்ருத்ஸங்கிரஹணம்."},
              { date: "தை 11 24.01.2025 வெள்ளி", event: "காலை 8.00 மணிக்கு 9.00 மணி முதல் \nமாலை 4.30 மணிக்கு 5.00 மணி முதல்", mess: "காலை: சாந்தி ஹோமம், மூர்த்தி ஹோமம், திசா ஹோமம், ஸம்ஹிதா ஹோமம், அக்னி & தீர்த்த ஸங்கிரஹணம், ஆச்சார்ய தசவிதஸ்நானம், யாகசாலை நிர்மாணம்.மாலை: அங்குரார்பணம், ரக்ஷாபந்தனம், விசேஷ சந்தி கும்பாலங்காரம், கலாகர்ஷணம், யாத்ராதானம், யாகசாலை பிரவேசம், முதற் கால யாக பூஜைகள், விசேஷ த்ரவ்யாஹூதி, மூல மந்திர ஜபம், பூர்ணாஹூதி, தீபாராதனை, பிரசாதம் வழங்குதல்." },
              { date: "தை 12 25.01.2025 சனிக்கிழமை", event: "காலை 8.00 மணிக்கு 8.30 மணிக்கு , 10.30 மணிக்குமேல் 11.30 மணிக்குள் மீன லக்னத்தில் \nமாலை 4.00 மணிக்கு 5.00 மணி முதல்", mess:"காலை: விசேஷ சந்தி, இரண்டாம் கால யாகபூஜை, ஷண்ணவதி த்ரவ்யாஹுதி, பூர்ணாஹுதி, தீபாராதனை, பிரசாதம் வழங்குதல், அஷ்டபந்தனம் சாற்றுதல். மாலை: விசேஷ சந்தி, மூன்றாம் கால யாகபூஜை, நாடீசந்தானம், தத்வார்ச்சனை, ஜீவன்யாஸம், ஸ்பர்ஸாகுதி, சுவாஸினி பூஜை, கன்யா பூஜை, பூர்ணாஹுதி, தீபாராதனை, பிரசாதம் வழங்குதல்." },
              { date: "தை 13 26.01.2025 ஞாயிற்றுக்கிழமை", event: "காலை 5.30 மணிக்கு 6.00 மணிக்கு, காலை 8.30 மணிக்கு 9.10 மணியளவில், 10.15 மணிக்கு, 11.30 மணிக்கு, மதியம் 12.00 மணிக்கு \n மாலை 6.00 மணிக்குமேல்", mess:"காலை: விசேஷ சந்தி, அவப்ருதயாகம், மஹா பூர்ணாஹுதி, யாத்ராதானம், கடங்கள் பறப்பாடு, மஹா கும்பாபிஷேகம், மஹாபிஷேகம், மஹாதீபாராதனை, எஜமானர், ஆச்சார்யர் உற்சவம்.மாலை: மஹாமாரி ரேணுகா பிராட்டி, ஸ்ரீ குளிந்தினி மாரியம்மன், திருவீதி உற்சவம்." }
            ].map((item, index) => (
              <li
                key={index}
                className={`mb-10 flex w-full block items-center ${
                  index % 2 === 0
                    ? "lg:justify-start justify-center"
                    : "lg:justify-end justify-center"
                }`}
              >
                {/* Timeline Card */}
                <div
                  className={`relative lg:w-5/12 w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-700 dark:border-gray-600 ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  {/* Timeline Icon */}
                  <span
                    className={`absolute top-1/2 transform -translate-y-1/2 w-10 h-10 bg-blue-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 flex items-center justify-center ${
                      index % 2 === 0 ? "-right-5" : "-left-5"
                    }`}
                  >
                    <img
                      className="rounded-full shadow-lg w-8 h-8"
                      src="/pngwing.png"
                      alt="Event Icon"
                    />
                  </span>
                  {/* Card Content */}
                  <time className="mb-1 text-sm font-normal text-gray-400 block">
                    {item.date}
                  </time>
                  <div className="mt-2 text-sm italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300 p-4">
                    {item.event}
                  </div>
                  <div className="mt-2 text-sm italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300 p-4">
                    {item.mess}
                  </div>
                </div>
              </li>
            ))}
          </ol>
      </div>

      {/* about section */}
      <div className="flex flex-wrap justify-center items-center m-10 gap-6">
        <div className="relative block flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <img src="/pudhariaman.jpg" alt="card-image" />
          </div>
          <div className="p-4">
            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
              குளுத்தினாயம்மன்: கிராமங்களின் பாதுகாவலரும் அருளாளருமாக
            </h6>
            <p className="text-slate-600 leading-normal text-justify font-light">
              குளுத்தினாயம்மன், கிராமங்களை பாதுகாக்கும் சக்தியாயிருப்பவர், ஆரோக்கியம், செழிப்பு மற்றும் சமரசத்தை அருள்வார். அவரின் அருள் கிராம மக்களை துன்பத்திலிருந்து காப்பாற்றி, செழிப்புக்கும் உறுதிக்கும் வழி வகுக்கின்றது. அவர் பக்தர்களுக்கு உறுதி மற்றும் நம்பிக்கையின் அடையாளமாக, சமாதானம் மற்றும் சக்தி அளிக்கிறார். கிராமங்களில் நிகழும் திருவிழாக்கள் மற்றும் பூஜைகள் மூலம் அவர் அனைத்து மக்களுக்கும் அருள் பரப்புகிறார்.    </p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2">
            
          </div>
        </div> 
        <div className="relative block flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <img src="/kuluthiyaman.jpg" alt="card-image" />
          </div>
          <div className="p-4">
            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
              புதாரியம்மன்: கிராமத்தின் காவல் தேவியும் பரிபாலகியும்
            </h6>
            <p className="text-slate-600 text-justify leading-normal font-light">
              புதாரியம்மன்: கிராமத்தின் காவல் தேவியும் பரிபாலகியும்
              புதாரியம்மன், கிராம மக்களின் பாதுகாவலராக, ஆரோக்கியம் மற்றும் செழிப்பை பரிசளிக்கிறார். அவர் வாழ்ந்த கிராமங்களில் மக்கள் ஒருமித்துக் கொள்வதற்கும், வாழ்வின் அனைத்து பிரச்னைகளையும் எதிர்கொள்வதற்கும் தன்னை காப்பாற்றி அருள் வழங்குகிறார். அவரது அருள், கிராமங்களை சோர்வு மற்றும் துன்பங்களிலிருந்து பாதுகாக்கும் சக்தியாய் பிரகடனமாக உள்ளது.
            </p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2">
            
          </div>
        </div>
      </div>
 
      {/* footer section */}
      <footer className="bg-white dark:bg-gray-900 block">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Kalathur Mariyaman Kovils
              </span>
            </a>
          </div>
        </div>

        <section className="text-gray-600 body-font rounded-[30px] shadow-lg relative">
          <div className="absolute rounded-[30px] shadow-lg inset-0 bg-gray-300">
            <iframe
              className="rounded-[30px] shadow-lg"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="map"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492.52993941766175!2d79.5357733838393!3d12.869494398130064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52cf2712b11d39%3A0x30eb4d53a95cf9a4!2sMaariyamman%20Koil!5e1!3m2!1sen!2sin!4v1734143238413!5m2!1sen!2sin"
            ></iframe>
          </div>

          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </section>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024-2025{' '}
            <a href="https://flowbite.com/" className="hover:underline">
              Chang™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.316.974.975 1.253 2.241 1.315 3.608.059 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.34 2.633-1.315 3.608-.975.974-2.242 1.253-3.608 1.315-1.265.059-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.34-3.608-1.315-.974-.975-1.253-2.242-1.315-3.608-.059-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.34-2.633 1.315-3.608.975-.974 2.242-1.253 3.608-1.315 1.265-.059 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.67.014-4.947.072-1.518.07-2.884.405-4.001 1.522C2.586 2.88 2.251 4.245 2.18 5.763c-.058 1.277-.072 1.687-.072 4.947s.014 3.67.072 4.947c.07 1.518.405 2.884 1.522 4.001 1.117 1.117 2.483 1.452 4.001 1.522 1.277.058 1.687.072 4.947.072s3.67-.014 4.947-.072c1.518-.07 2.884-.405 4.001-1.522 1.117-1.117 1.452-2.483 1.522-4.001.058-1.277.072-1.687.072-4.947s-.014-3.67-.072-4.947c-.07-1.518-.405-2.884-1.522-4.001-1.117-1.117-2.483-1.452-4.001-1.522-1.277-.058-1.687-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.325 12 18.325s6.162-2.759 6.162-6.162S15.403 7.838 12 7.838zm0 10.162c-2.213 0-4.007-1.794-4.007-4.007s1.794-4.007 4.007-4.007 4.007 1.794 4.007 4.007-1.794 4.007-4.007 4.007zm6.406-11.845c-.796 0-1.443-.647-1.443-1.443s.647-1.443 1.443-1.443 1.443.647 1.443 1.443-.647 1.443-1.443 1.443z" />
              </svg>
              <span className="sr-only">Instagram account</span>
            </a>

            <a
              href="https://youtube.com"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .333A9.67 9.67 0 0 0 1.183 3.65a9.582 9.582 0 0 0 0 12.7A9.67 9.67 0 0 0 10 19.667a9.67 9.67 0 0 0 8.817-3.317 9.582 9.582 0 0 0 0-12.7A9.67 9.67 0 0 0 10 .333ZM8.333 13.5v-7l6.334 3.5-6.334 3.5Z" />
              </svg>
              <span className="sr-only">YouTube account</span>
            </a>

            <a
              href="https://twitter.com"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 3.538a8.13 8.13 0 0 1-2.357.646A4.065 4.065 0 0 0 19.447 2c-.797.474-1.682.819-2.623 1.004A4.088 4.088 0 0 0 9.847 5.548 11.605 11.605 0 0 1 1.392 2.798a4.083 4.083 0 0 0-.553 2.054c0 1.42.723 2.677 1.823 3.411A4.072 4.072 0 0 1 .8 7.25v.051a4.087 4.087 0 0 0 3.277 4.004 4.094 4.094 0 0 1-1.852.07 4.087 4.087 0 0 0 3.816 2.835A8.203 8.203 0 0 1 .98 15.52a11.57 11.57 0 0 0 6.29 1.847c7.547 0 11.675-6.255 11.675-11.675 0-.178-.004-.356-.012-.532A8.352 8.352 0 0 0 20 3.538Z" />
              </svg>
              <span className="sr-only">Twitter account</span>
            </a>
          </div>
        </div>
      </div>
      </footer>
    </>
  )
}