import React, { useState } from 'react'
import { WavyBackground } from './ui/wavy-background'
import { NavbarDemo } from './Navbar'
import { CardSpotlight } from './ui/card-spotlight'
// import { Form } from 'react-router-dom'
import { FileUpload } from './ui/file-upload'
// import Input from './Input'
import axios from 'axios'
const Add = () => {
    const [value, setValue] = useState("");
    const [files, setFiles] = useState([]);

    console.log(files,value)
    const handleFileUpload = (files) => {
        setFiles(files);
        console.log(files);
    };
    const submit = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("title",value)
        formData.append("file",files)

        try {
            const result = await axios.post('http://localhost:5000/upload-files', formData, {
                headers: { 'Content-Type': "multipart/form-data" }
            });
            console.log(result.data); // Log the server response
        } catch (error) {
            console.error('Error uploading file:', error); // Handle error
        }
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    console.log(formData)
    }
    return (
        <>
            <NavbarDemo />
            <WavyBackground className="max-w-4xl mx-auto pb-40 flex gap-5 flex-wrap">
                {/* {error && <p className="text-red-500"></p>} */}

                <div className="h-56 w-76 mb-5">
                    <form onSubmit={submit}>
                        <input className='w-full border dark:border-neutral-800 rounded-lg '
                            
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="Enter subject..."
                        />
                        <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
                            <FileUpload onChange={handleFileUpload} />
                        </div>

                    <button type='submit' className="w-40 h-10 rounded-xl bg-white text-black border  border-black text-sm relative z-20 mt-8">
                        upload
                    </button>
                    </form>
                </div>

            </WavyBackground>
        </>
    )
}

export default Add