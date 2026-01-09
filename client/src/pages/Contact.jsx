import { useState } from 'react';
import toast  from 'react-hot-toast';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Contact() {
    const [userInput,setuserInput]=useState({
        Name:"",
        email:"",
        Phone:"",
        message:""
    })

    function handleInputChange(e){
        const {name,value} = e.target;
        setuserInput({
            ...userInput,
            [name]:value
        })
    }

  async function onFormSubmit(e){
      e.preventDefault();
      if(!userInput.email || !userInput.Name || !userInput.Phone)
      {
          toast.error("Name and Email and phone are mandatory");
          return
      }

       // checking email validation
       if(!userInput.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
       {
         toast.error("Invalid email ID");
         return;
       }

       axios.post("https://contact-data-1-nmsd.onrender.com/api/v1/contact/contactus",userInput)
       .then((res)=>{
           console.log(res);
           if(res.data.success){
               toast.success("Message sent successfully");
               setuserInput({
                   Name:"",
                   email:"",
                   Phone:"",
                   message:""
               })
           }
           else{
               toast.error("Message not sent, please try again later");
           }
       })
       .catch((err)=>{
           console.log(err);
           toast.error("Something went wrong, please try again later");
       })
       
   }
  return (
       <>
        <div className="flex items-center justify-center h-[100vh]">
            <Link to="/allcontacts" className="absolute top-5 right-5 bg-blue-600 hover:bg-blue-500 transition-all ease-in-out duration-300 text-white px-4 py-2 rounded-md font-semibold">
                View All Contacts
            </Link>
                <form 
                    noValidate
                    onSubmit={onFormSubmit}
                    className="bg-white flex flex-col items-center justify-center gap-2 p-5 rounded-md text-black shadow-[0_0_10px_black] w-[22rem]">

                    <h1 className="text-3xl font-semibold">
                        Contact Form
                    </h1>

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="name" className="text-xl font-semibold">
                            Name
                        </label>
                        <input 
                            className="bg-transparent border px-2 py-1 rounded-sm"
                            id="Name"
                            type="text"
                            name="Name"
                            placeholder="Enter your name"
                            onChange={handleInputChange}
                            value={userInput.Name}
                        />

                    </div>

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="email" className="text-xl font-semibold">
                            Email
                        </label>
                        <input 
                            className="bg-transparent border px-2 py-1 rounded-sm"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={handleInputChange}
                            value={userInput.email}
                        />

                    </div>

                     <div className="flex flex-col w-full gap-1">
                        <label htmlFor="phone" className="text-xl font-semibold">
                            Phone
                        </label>
                        <input 
                            className="bg-transparent border px-2 py-1 rounded-sm"
                            id="Phone"
                            type="number"
                            name="Phone"
                            placeholder="Enter your phone number"
                            onChange={handleInputChange}
                            value={userInput.Phone}
                        />

                    </div>

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="message" className="text-xl font-semibold">
                            Message
                        </label>
                        <textarea 
                            className="bg-transparent border px-2 py-1 rounded-sm resize-none h-40"
                            id="message"
                            name="message"
                            placeholder="Enter your email"
                            onChange={handleInputChange}
                            value={userInput.message}
                        />

                    </div>
                    <button type="submit"
                        className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
                    >
                        Submit
                    </button>

                </form>
            </div>
    </>
  )
}

export default Contact