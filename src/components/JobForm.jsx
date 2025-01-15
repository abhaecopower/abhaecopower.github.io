import React, { useState } from 'react'
import './JobForm.css'
import { Link } from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5";
function JobForm() {
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [url, setUrl] = useState('');
    const [jobTitle, setJobTitle] = useState('');

    return (
        <div className='job-container'>
           <Link to='/career' className='go-back'><IoArrowBack/> Go back</Link>
            <div className="job-wrapper">
            <div className="apply-form">
                <h2>Apply for a Job</h2>
                <form action="/submit-application" method="post" encType="multipart/form-data">
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" onChange={(e) => setFullName(e.target.value)} placeholder='Enter your full name' required />

                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' required />

                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" onChange={(e) => setPhone(e.target.value)} placeholder='Enter your phone number' required />

                    <label htmlFor="job-title">Job Title Applying For:</label>
                    <select id="job-title" name="job-title" onChange={(e) => setJobTitle(e.target.value)} required>
                        <option value="">Select a job title</option>
                        <option value="Fitter">Fitter</option>
                        <option value="Sales Person">Sales Person</option>
                    </select>

                    <label htmlFor="cv">URL Of Your CV:</label>
                    <input type="url" id="cv" name="cv" onChange={(e) => setUrl(e.target.value)} placeholder='Enter a url of your CV' required />

                    <a className='submit-job-app' href={`mailto:jobs.abhaecopower@gmail.com?subject=Job%20Application&body=Hi%20my%20name%20is%20${fullName},%20phone%20number%20is%20${phone}%20and%20I%20am%20applying%20for%20the%20post%20of%20${jobTitle}.%20Here%20is%20the%20url%20of%20my%20CV:%20${url}%20Thank%20you`} type="submit">Submit Application</a>
                </form>
            </div>
            </div>
        </div>
    )
}

export default JobForm