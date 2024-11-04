import React, { useState } from 'react'
import { WavyBackground } from './ui/wavy-background'
import { NavbarDemo } from './Navbar'
import { CardSpotlight } from './ui/card-spotlight'
import { Form } from 'react-router-dom'
import { FileUpload } from './ui/file-upload'
// import Input from './Input'

const Add = () => {
    const [value, setValue] = useState("");
    const [files, setFiles] = useState([]);
    const handleFileUpload = (files) => {
      setFiles(files);
      console.log(files);
    };
  return (
    <>
            <NavbarDemo />
            <WavyBackground className="max-w-4xl mx-auto pb-40 flex gap-5 flex-wrap">
                {/* {error && <p className="text-red-500"></p>} */}
                
                <div className="h-56 w-76 mb-5">
                <form>    
                <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter subject..."
                />
    <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload onChange={handleFileUpload} />
    </div>
 
                </form>        
                </div>
               
            </WavyBackground>
        </>
  )
}

export default Add