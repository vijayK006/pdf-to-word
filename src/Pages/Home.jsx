import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../Layouts/Navbar';
import statusIcon from '../Img/status.png'
import { IoCloseCircleSharp } from 'react-icons/io5';
import { IoIosCloudDownload } from 'react-icons/io';
import { FaCloudDownloadAlt } from 'react-icons/fa';

const Home = () => {
    const [valueData, setValueData] = useState({ files: [] });
    const [links, setLinks] = useState([]);
    const [fileCount , setFileCount] = useState(0);
    const [loading, setLoading] = useState(false);


    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();

        const formData = new FormData();

        valueData.files.forEach(file => {
            formData.append('files', file);
        });

        axios.post('http://44.223.30.95:7000/convert/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {
            console.log('PDF Submitted Successfully');
            setLinks(res.data.download_links);
        setLoading(false);


            const status= document.getElementById('status');
        status.classList.add('open-popup')
        })
        .catch(err => console.log(err));
    };

    const handleChange = (e) => {
        const files = Array.from(e.target.files);
        setValueData({ files });
        setFileCount(files.length);
    };

    const closePopup = ()=>{
        const status= document.getElementById('status');
        status.classList.remove('open-popup')
    }

    return (
        <>
<Navbar/>

<div className='drag-body'>
 <div className='drag-section'>
              <form onSubmit={handleSubmit}>
            <label for='files'  className='theme-btn'></label>
            <p className='drag-text'>Select PDF Files Here
            {fileCount > 0 && (
                <p className='text-center'> {fileCount} </p>
                        )}
            </p>
                <input
                    type='file'
                    className='form-control d-none'
                    id='files'
                    name='files'
                    accept='.pdf'
                    multiple
                    onChange={handleChange}
                    required
                />
                <button
                    type='submit'
                    className='btn-bg-theme d-flex align-items-center gap-3 justify-content-center'
                    style={{ width: "200px" }}
                    disabled={loading}
                >
  {loading ? ( 
    <>
    <div class="spinner-border text-light spinner-border-sm"></div>  Submit
    </>
    ):(
<>
   
    Submit
</>
    )}
                
                   
                </button>
            </form>
        </div>
</div>
       
          <div className='status d-flex justify-content-center align-items-center ' id='status'>
            <div className='message-card shadow w-30 bg-white py-3 px-4'>
            <IoCloseCircleSharp className='icon'  onClick={closePopup}/>
            <div className='d-flex justify-content-center w-100'>
            <img src={statusIcon} alt='statusicon'/>
            </div>

            <p className='text-center t-gray m-0 pt-4'>Your files have been converted to document(.docx). You can download them here</p>
           
            {links.length > 0 && (
                <div>
                    <ul className='download-list pt-4 px-md-5 px-0'>
                        {links.map((link, index) => (
                            <li key={index} className='my-2'>
                                <a href={`http://44.223.30.95:7000${link}`}  download>
                                  <p className='m-0 d-flex justify-content-between align-items-center'>Download File {index + 1} <FaCloudDownloadAlt style={{fontSize:"25px"}}/></p>  
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
           
           
            </div>
          </div>

        </>
    );
};

export default Home;
