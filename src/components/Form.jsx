import React,{useState} from 'react'

const Form = (props) => {
   
    const [zodiac, setZodiac] = useState('')
    const onsubmitHandeler=(e)=>{
        e.preventDefault();
        props.onSubmit(zodiac)
    }
  return (
    <div>
  <form onSubmit={onsubmitHandeler} className="grid grid-flow-row gap-3 place-items-center">
  <h1 className='text-7xl font-normal text-center'>Write your Zodiac sign</h1>
    <input  className='w-[300px] border-2 border-orange-500 rounded-md' value={zodiac} onChange={(e)=>{setZodiac(e.target.value)}} 
    placeholder="cancer"/>
    <button className=" inline-block w-[200px] px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out" >Get Info</button>
    </form>
    </div>
  )
}

export default Form