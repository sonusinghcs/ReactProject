import { useState,useCallback , useEffect, useRef} from 'react'


function App() {
const [length, setLength] = useState(8);
const [numberAllow, setNumberAllow] = useState(false);
const [charAllow, setCharAllow] = useState(false);
const [password, setPassword] = useState('');

const passwordRef = useRef(null)

const passwordGenerator = useCallback(()=>{

  let pass=""
  let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if(numberAllow){
    str+="0123456789"
  }
  if(charAllow){
    str+="!@#$%^&*()-_=+[{]}|;:',<.>/?~`"
  }
  for(let i=0; i<length; i++){
    let char = Math.random() * str.length + 1;
    pass += str.charAt(char)
  }
  setPassword(pass)
  

},[length, numberAllow, charAllow,setPassword])

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    
    window.navigator.clipboard.writeText(password)
  },[password])

useEffect(()=>{
  passwordGenerator()
},[length, numberAllow, charAllow,passwordGenerator])

  return (
    <>
      
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3 my-5'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyPassword}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        
        >copy</button>
        <button 
        onClick={passwordGenerator}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        
        >new</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={8}
          max={40} 
          value={length}
          className='cursor-pointer'
          onChange={(e)=>setLength(Number(e.target.value))}
          />
          <label htmlFor="">length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllow}
          id="numberInput"
          onChange={()=>setNumberAllow(prev=>!prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllow}
          id="charInput"
          onChange={()=>setCharAllow(prev=>!prev)}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>


    </>
    
    
  )
}

export default App
