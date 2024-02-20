import React, { useEffect, useState } from 'react';
import Typed from 'react-typed';
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "../index.css";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();

        if (address) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const redirectToPatientPage = () => {
    navigate('/patient'); // Use navigate to redirect to the patient page
  };

  return (
    <>
      <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold p-2 text-lg'>
            Welcome to our health record website powered by blockchain technology and say goodbye to complicated medical records.
          </p>
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-'
            strings={['Secure', 'transparent', 'Interoperatible']}
            typeSpeed={130}
            backSpeed={150}
            loop
          />
          <p className='md:text-2xl text-xl font-bold text-gray-700'>
            Your data privacy is our priority as we revolutionize patient care. Join us on this journey towards a more efficient healthcare system!
          </p>
          {isAuthenticated ? (
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black' onClick={redirectToPatientPage}>
              Get Started
            </button>
          ) : (
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black' onClick={checkAuthentication}>
              Sign in with MetaMask
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
