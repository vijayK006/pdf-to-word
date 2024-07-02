import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [valueData, setValueData] = useState({ files: [] });
    const [links, setLinks] = useState([]);

    const handleSubmit = (e) => {
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
        })
        .catch(err => console.log(err));
    };

    const handleChange = (e) => {
        const files = Array.from(e.target.files);
        setValueData({ files });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='file'
                    className='form-control'
                    id='files'
                    name='files'
                    accept='.pdf'
                    multiple
                    onChange={handleChange}
                />
                <button
                    type='submit'
                    className='btn btn-bg-orange'
                    style={{ width: "200px" }}
                >
                    Submit
                </button>
            </form>

            {links.length > 0 && (
                <div>
                    <p>Your files have been converted. You can download them here:</p>
                    <ul>
                        {links.map((link, index) => (
                            <li key={index}>
                                <a href={`http://44.223.30.95:7000${link}`} target="_blank" rel="noopener noreferrer">
                                    Download File {index + 1}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default Home;
