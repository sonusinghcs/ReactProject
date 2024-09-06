import { useState } from "react";





export default function 
RandomColor(){
    const [type, settype] = useState("hex");
    const [color, setcolor] = useState("#000000")

    function randomhex(){
        const hexa = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexcolor = "#";
        for(let i=0; i<6; i++){
            hexcolor+=hexa[Math.floor(Math.random()*hexa.length)];
        }
        setcolor(hexcolor);
    }

    function randomrgb() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const rgbcolor = `rgb(${r},${g},${b})`;
        setcolor(rgbcolor); 
        console.log(rgbcolor);
      }

   return <div 
   style={{
    width:"100vw",
    height:"100vh",
    background:color
   }}
   >
    
        <button onClick={()=>settype("hex")}>create hex color</button>
        <button onClick={()=>settype("rgb")}>create rgb color</button>
        <button onClick={type=="hex"?randomhex:randomrgb}>Generate color</button>
        <div><h1>{color}</h1></div>
    </div>
}