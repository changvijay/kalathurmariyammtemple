import React, { useState } from 'react';
import '../App.css'
import './payment.css'
import axios from "axios";

const Modal = ({ isOpen, closeModal, timeOfDay, formData, setFormData, handleSubmit }) => {
  const [alertVisible, setAlertVisible] = useState(false);

  const handleNumPeopleChange = (e) => {
    const number = parseInt(e.target.value);
    if (number > 5) {
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 3000); // Hide alert after 3 seconds
    } else {
      const newFormData = Array.from({ length: number }, () => ({ name: '', rashi: '', nakshatra: '' }));
      setFormData(newFormData);
    }
  };

  const handleInputChange = (e, index, field) => {
    const updatedFormData = [...formData];
    updatedFormData[index][field] = e.target.value;
    setFormData(updatedFormData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 max-h-[80vh] overflow-y-auto relative">
        <h2 className="text-xl font-semibold mb-4">{`${timeOfDay} Process`}</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-4">
            <label htmlFor="numPeople" className="block text-sm font-medium text-gray-700">Number of People</label>
            <input
              type="number"
              id="numPeople"
              value={formData.length === 0 ? '' : formData.length}
              onChange={handleNumPeopleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="space-y-4">
            {formData.map((data, index) => (
              <div key={index} className="space-y-2">
                {/* for name */}
                <div>
                  <label htmlFor={`name-${index}`} className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id={`name-${index}`}
                    value={data.name}
                    onChange={(e) => handleInputChange(e, index, 'name')}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    required
                  />
                </div>
                {/* for rashi */}
                <div>
                  <label htmlFor={`rashi-${index}`} className="block text-sm font-medium text-gray-700">Rashi</label>
                  <select
                    id={`rashi-${index}`}
                    value={data.rashi}
                    onChange={(e) => handleInputChange(e, index, 'rashi')}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    required
                  >
                    <option value="">Select Rashi</option>
                    <option value="மேடம் (Mesham)">மேடம் (Mesham)</option>
                    <option value="ரோகிணி (Rohini)">ரோகிணி (Rohini)</option>
                    <option value="மிதுனம் (Midhunam)">மிதுனம் (Midhunam)</option>
                    <option value="கடகம் (Kataka)">கடகம் (Kataka)</option>
                    <option value="சிம்மம் (Simham)">சிம்மம் (Simham)</option>
                    <option value="கன்னி (Kanni)">கன்னி (Kanni)</option>
                    <option value="துலாம் (Thulam)">துலாம் (Thulam)</option>
                    <option value="விருச்சிகம் (Viruchigam)">விருச்சிகம் (Viruchigam)</option>
                    <option value="தனுசு (Dhanusu)">தனுசு (Dhanusu)</option>
                    <option value="மகரம் (Makaram)">மகரம் (Makaram)</option>
                    <option value="கும்பம் (Kumbam)">கும்பம் (Kumbam)</option>
                    <option value="மீனம் (Meenam)">மீனம் (Meenam)</option>
                  </select>
                </div>
                {/* for nakshatra */}
                <div>
                  <label htmlFor={`nakshatra-${index}`} className="block text-sm font-medium text-gray-700">Nakshatra</label>
                  <select
                    id={`nakshatra-${index}`}
                    value={data.nakshatra}
                    onChange={(e) => handleInputChange(e, index, 'nakshatra')}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    required
                  >
                    <option value="">Select Nakshatra</option>
                    {data.rashi === "மேடம் (Mesham)" && (
                      <>
                        <option value="அச்சுவினி (Ashwini)">அச்சுவினி (Ashwini)</option>
                        <option value="பரணி (Bharani)">பரணி (Bharani)</option>
                        <option value="கிருத்திகை (Krittika)">கிருத்திகை (Krittika)</option>
                      </>
                    )}
                    {data.rashi === "ரோகிணி (Rohini)" && (
                      <>
                        <option value="மிருகசீரிடம் (Mrigashira)">மிருகசீரிடம் (Mrigashira)</option>
                        <option value="திருவாதிரை (Thiruvadhirai)">திருவாதிரை (Thiruvadhirai)</option>
                      </>
                    )}
                    {data.rashi === "மிதுனம் (Midhunam)" && (
                      <>
                        <option value="புனர்பூசம் (Punarvasu)">புனர்பூசம் (Punarvasu)</option>
                        <option value="பூசம் (Pushya)">பூசம் (Pushya)</option>
                        <option value="ஆயிலியம் (Ashlesha)">ஆயிலியம் (Ashlesha)</option>
                      </>
                    )}
                    {data.rashi === "கடகம் (Kataka)" && (
                      <>
                        <option value="மகம் (Magha)">மகம் (Magha)</option>
                        <option value="பூரம் (Pooram)">பூரம் (Pooram)</option>
                        <option value="உத்தரம் (Uttaram)">உத்தரம் (Uttaram)</option>
                      </>
                    )}
                    {data.rashi === "சிம்மம் (Simham)" && (
                      <>
                        <option value="அத்தம் (Atham)">அத்தம் (Atham)</option>
                        <option value="சித்திரை (Chitra)">சித்திரை (Chitra)</option>
                        <option value="சோதி (Swathi)">சோதி (Swathi)</option>
                      </>
                    )}
                    {data.rashi === "கன்னி (Kanni)" && (
                      <>
                        <option value="விசாகம் (Vishakha)">விசாகம் (Vishakha)</option>
                        <option value="அனுசம் (Anuradha)">அனுசம் (Anuradha)</option>
                        <option value="கேட்டை (Kettai)">கேட்டை (Kettai)</option>
                      </>
                    )}
                    {data.rashi === "துலாம் (Thulam)" && (
                      <>
                        <option value="மூலம் (Mula)">மூலம் (Mula)</option>
                        <option value="பூராடம் (Purvashada)">பூராடம் (Purvashada)</option>
                        <option value="உத்திராடம் (Uttarashada)">உத்திராடம் (Uttarashada)</option>
                      </>
                    )}
                    {data.rashi === "விருச்சிகம் (Viruchigam)" && (
                      <>
                        <option value="திருவோணம் (Thiruvonam)">திருவோணம் (Thiruvonam)</option>
                        <option value="அவிட்டம் (Avittam)">அவிட்டம் (Avittam)</option>
                        <option value="சதயம் (Sadayam)">சதயம் (Sadayam)</option>
                      </>
                    )}
                    {data.rashi === "தனுசு (Dhanusu)" && (
                      <>
                        <option value="பூரட்டாதி (Purvabhadrapada)">பூரட்டாதி (Purvabhadrapada)</option>
                        <option value="உத்திரட்டாதி (Uttarabhadrapada)">உத்திரட்டாதி (Uttarabhadrapada)</option>
                        <option value="ரேவதி (Revati)">ரேவதி (Revati)</option>
                      </>
                    )}
                    {data.rashi === "மகரம் (Makaram)" && (
                      <>
                        <option value="அச்சுவினி (Ashwini)">அச்சுவினி (Ashwini)</option>
                        <option value="பரணி (Bharani)">பரணி (Bharani)</option>
                        <option value="கிருத்திகை (Krittika)">கிருத்திகை (Krittika)</option>
                      </>
                    )}
                    {data.rashi === "கும்பம் (Kumbam)" && (
                      <>
                        <option value="ரோகிணி (Rohini)">ரோகிணி (Rohini)</option>
                        <option value="மிருகசீரிடம் (Mrigashira)">மிருகசீரிடம் (Mrigashira)</option>
                        <option value="திருவாதிரை (Thiruvadhirai)">திருவாதிரை (Thiruvadhirai)</option>
                      </>
                    )}
                    {data.rashi === "மீனம் (Meenam)" && (
                      <>
                        <option value="புனர்பூசம் (Punarvasu)">புனர்பூசம் (Punarvasu)</option>
                        <option value="பூசம் (Pushya)">பூசம் (Pushya)</option>
                        <option value="ஆயிலியம் (Ashlesha)">ஆயிலியம் (Ashlesha)</option>
                      </>
                    )}
                  </select>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-4">
            <button type="button" onClick={closeModal} className="px-4 py-2 bg-gray-500 text-white rounded-md">
              Close
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Submit
            </button>
          </div>
        </form>

        {alertVisible && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white p-4 rounded-lg shadow-lg animate-pulse3d">
            <p className="text-center">Number must be less than or equal to 5!</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Payment = () => {
  const [isMorningModalOpen, setIsMorningModalOpen] = useState(false);
  const [isEveningModalOpen, setIsEveningModalOpen] = useState(false);
  const [isNightModalOpen, setIsNightModalOpen] = useState(false);

  const [morningData, setMorningData] = useState([{ name: '', rashi: '', nakshatra: '' ,slot:'Morning'}]);
  const [eveningData, setEveningData] = useState([{ name: '', rashi: '', nakshatra: '',slot:'evening' }]);
  const [nightData, setNightData] = useState([{ name: '', rashi: '', nakshatra: '',slot:'nightData' }]);

  const openModal = (time) => {
    if (time === 'morning') setIsMorningModalOpen(true);
    if (time === 'evening') setIsEveningModalOpen(true);
    if (time === 'night') setIsNightModalOpen(true);
  };

  const closeModal = (time) => {
    if (time === 'morning') setIsMorningModalOpen(false);
    if (time === 'evening') setIsEveningModalOpen(false);
    if (time === 'night') setIsNightModalOpen(false);
  };
  const initPay = (data) => {
    console.log("Payment Data:", data);  // Log the payment data for debugging

    const options = {
      key: "rzp_test_wXeis65sVjvtLj",
      amount: data.peopleCount,
      currency: "INR",
      name: "temp",
      description: "Test",
      order_id: data.id, // Ensure this is not undefined
      handler: async (response) => {
        try {
          console.log("Razorpay Response:", response); // Log the response from Razorpay
          const verifyURL = "http://localhost:5000/verify";
          const { data } = await axios.post(verifyURL, response);
          console.log("Verification Response:", data);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };




  const handleMorningSubmit = async (e) => {
    e.preventDefault();
    const peopleCount = morningData.length * 50;
    console.log('Morning Data:', morningData, peopleCount);
    try {
      const response = await fetch('http://localhost:5000/create-payment', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ morningData, peopleCount }),
      });
      const responseData = await response.json();
      console.log(responseData);
      initPay(responseData.data);
      

      if (response.ok) {
          const result = await response.json();
          console.log('Server Response:', result);
      } else {
          console.error('Failed to send data:', response.statusText);
      }
  } catch (error) {
      console.error('Error sending data:', error);
  }
    setMorningData([{ name: '', rashi: '', nakshatra: '' }]);
    closeModal('morning');
  };


  

  const handleEveningSubmit = (e) => {
    e.preventDefault();
    const peopleCount = morningData.length * 50;
    console.log('Evening Data:', eveningData, peopleCount);
    setEveningData([{ name: '', rashi: '', nakshatra: '' }]);
    closeModal('evening');
  };

  const handleNightSubmit = (e) => {
    e.preventDefault();
    const peopleCount = morningData.length * 50;
    console.log('Night Data:', nightData, peopleCount);
    setNightData([{ name: '', rashi: '', nakshatra: '' }]);
    closeModal('night');
  };

  return (
    <div className="p-4 space-y-4 payment">
      <center>
        <div className='slotname'>

          <button
            onClick={() => openModal('morning')}
            className="px-4 py-2 bg-green-500 text-white rounded-md p-5 m-5"
          >
            12:00 PM-1:00 PM darchanai /தர்ச்சனை
          </button> <br/>
          <button
            onClick={() => openModal('evening')}
            className="px-4 py-2 bg-orange-500 text-white rounded-md p-5 m-5"
          >
            1:00 PM-2:00 PM darchanai /தர்ச்சனை
          </button> <br/>
          <button
            onClick={() => openModal('night')}
            className="px-4 py-2 bg-blue-500 text-white rounded-md  p-5 m-5"
          >
            2:00 PM-3:00 PM darchanai /தர்ச்சனை
          </button>
        </div>

      </center>


      <Modal
        isOpen={isMorningModalOpen}
        closeModal={() => closeModal('morning')}
        timeOfDay="Morning"
        formData={morningData}
        setFormData={setMorningData}
        handleSubmit={handleMorningSubmit}
      />
      <Modal
        isOpen={isEveningModalOpen}
        closeModal={() => closeModal('evening')}
        timeOfDay="Evening"
        formData={eveningData}
        setFormData={setEveningData}
        handleSubmit={handleEveningSubmit}
      />
      <Modal
        isOpen={isNightModalOpen}
        closeModal={() => closeModal('night')}
        timeOfDay="Night"
        formData={nightData}
        setFormData={setNightData}
        handleSubmit={handleNightSubmit}
      />
    </div>
  );
};

export default Payment;
