import React from 'react';
import "../index.css";

function About() {
  return (
    <>
     <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='text-[#00df9a] font-bold p-2 text-lg'>Welcome to the forefront of healthcare innovation!</h1>
        <p1 className = "mb-3 text-gray-500 dark:text-gray-400 text-justify text-lg"> At our website, we are dedicated to revolutionizing the way healthcare is delivered, ensuring a future that is globally connected, privacy-centric, and incredibly personalized. Our journey embarks on a pioneering fusion of two transformative technologies - Blockchain and Machine Learning - to meet the pressing needs of our ever-evolving healthcare landscape. Blockchain, with its decentralized and highly secure ledger system, forms the bedrock of our vision, creating a globally interconnected repository of health information while safeguarding patient privacy. Simultaneously, Machine Learning continuously extracts invaluable insights from this extensive data pool, providing real-time collective health status and predicting individual vulnerabilities. This synergy not only enhances healthcare delivery but also empowers pharmaceutical companies to tailor medications for specific communities and individuals. Join us on this exciting journey as we bridge the gap between cutting-edge technologies to usher in a new era of healthcare, one thats interconnected, knowledge-driven, and finely personalized.</p1>
        </div>
      </div>
      </>
  )
}

export default About
