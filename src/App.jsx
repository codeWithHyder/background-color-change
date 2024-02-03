import { useState } from 'react'


function App() {
  
const [color, setColor] = useState('olive');
  return (
    <div className="w-full h-screen relative flex justify-center items-center" style={{backgroundColor:color}}>
      <div className='h-auto w-[70%] mx-1 bg-slate-200 shadow-lg bottom-1 rounded-3xl flex flex-wrap justify-center items-center absolute p-2'>
        <button className='bg-red-500 rounded-lg w-20 h-10 p-1 shadow-lg mx-1'
        onClick={()=>setColor('red')}
        >Red</button>
        <button className='bg-blue-900 rounded-lg w-20 h-10 p-1 shadow-lg mx-1'
        onClick={()=>setColor("blue")}
        >Blue</button>
        <button className='bg-green-500 rounded-lg w-20 h-10 p-1 shadow-lg mx-1'
        onClick={()=>setColor("green")}
        >Green</button>
        <button className='bg-black rounded-lg w-20 h-10 p-1 shadow-lg mx-1 text-white'
         onClick={()=>setColor("black")}
        >Black</button>
        <button className='bg-white rounded-lg w-20 h-10 p-1 shadow-lg mx-1 text-black'
         onClick={()=>setColor("white")}
        >White</button>
         <button className='bg-purple-500 rounded-lg w-20 h-10 p-1 shadow-lg mx-1 text-black'
          onClick={()=>setColor('purple')}
         >Purple</button>
      </div>
    </div>
  )
}

export default App
