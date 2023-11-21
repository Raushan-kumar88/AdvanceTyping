import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const RegistrationForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        dob: '',
        contactNumber: '',
        address: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            await axios.post('http://localhost:5000/register', formData);
            alert('Registration successful');
            navigate('/login');
        } catch (error) {
            alert('Error in registration');
        }
    };
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


    return (
    <div class="flex min-h-full flex-col justify-center px-6 py-8 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src="https://www.vhv.rs/dpng/d/538-5388000_master-of-typing-png-download-master-of-typing.png" alt="Your Company" />
    <h2 class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Registration</h2>
  </div>
      <div class="sm:mx-auto sm:w-full sm:max-w-sm lg:max-w-3xl">
    <form class="space-y-6" onSubmit={handleSubmit}>
      <div class="mt-10">
      <div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
      <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
          <div class="mt-2">
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required  autocomplete="given-name" class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
          <div class="mt-2">
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required  autocomplete="given-name" class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
      </div>
        

        

        <div class="lg:w-full">
          <label for="email" class="block w-full text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2 w-full">
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required autocomplete="email" class="block px-2 lg:w-full w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        {/* <div class="lg:w-full">
          <label for="password" class="block w-full text-sm font-medium leading-6 text-gray-900">Password</label>
          <div class="mt-2 w-full">
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required autocomplete="password" class="px-2 block lg:w-full w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div> */}
        <div class="lg:w-full">
            <label htmlFor="password" class="block w-full text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="mt-2 w-full relative">
                <input 
                    type={passwordVisible ? "text" : "password"} 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    placeholder="Password" 
                    required 
                    autoComplete="password" 
                    class="px-2 block lg:w-full w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                />
                <span 
                    onClick={togglePasswordVisibility} 
                    class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                    {passwordVisible ? (
                        <i>👁️</i>  
                    ) : (
                        <i>👁️‍🗨️</i> 
                    )}
                </span>
            </div>
        </div>
        <div class="lg:w-full">
          <label for="phone" class="block w-full text-sm font-medium leading-6 text-gray-900">Contact</label>
          <div class="mt-2 w-full">
            <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" required autocomplete="phone" class="block px-2 lg:w-full w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="lg:w-full">
          <label for="date" class="block w-full px text-sm font-medium leading-6 text-gray-900">Date of Birth</label>
          <div class="mt-2 w-full">
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required class="block px-2 lg:w-full w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div class="col-span-full">
          <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
          <div class="mt-2">
            <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address" required autocomplete="street-address" class=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        
      </div>
      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
      </div>
      </form>
      <p class="mt-8 text-center text-sm text-gray-500">
      Already have a member? 
      <Link to="/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2">Login</Link>
    </p>
      </div>
    </div>


  

    );
};

export default RegistrationForm;
