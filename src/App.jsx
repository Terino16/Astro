import { useState } from 'react'
import stars from './animation/stars.json'
import Lottie from 'lottie-react'
import Form from './components/Form'
import { useSpeechSynthesis } from "react-speech-kit";
import axios from "axios";
function App() {
  const { speak } = useSpeechSynthesis();
  const [desc, setDesc]=useState('');

  var audio = new Audio("./src/assets/Audio.mp3")
  

  const getZodiac=(data)=>{
    audio.play();
    const options = {
      method: 'POST',
      url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
      params: {sign: data, day: 'today'},
      headers: {
        'X-RapidAPI-Key': '04681b2d01msh84e5428c9e098efp1eb561jsn79f58b89f74c',
        'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
       setDesc(response.data.description),
       setTimeout(
        function(){speak({text:response.data.description})},5000)
    }).catch(function (error) {
      console.error(error);
    });
   
  }
  return (
    <>
    <div className='grid grid-flow-row gap-1 place-items-center bg-gradient-to-b from-red-500 via-blue-500 to-green-500'>
      <div className='flex place-items-center justify-around'>
      <Lottie animationData={stars} width="300px"/> 
      </div>
    <div className="grid justify-items-center gap-4 place-items-center  backdrop-blur-md backdrop-opacity-75 bg-astrobanner bg-no-repeat bg-center h-screen relative "  >
     <Form onSubmit={getZodiac}/>
     <p className='  font-medium leading-tight text-2xl mb-[200px] text-center mx-[50px] text-white'>{desc}</p>
    </div>
    </div>
    </>
  )
}

export default App




