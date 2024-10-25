import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [question, setQuestion] = useState("Hi, what is your name ?");
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    window.confirm("are you sure you wana send the messge ?");
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "votre Nom",
          from_email: form.email,
          to_email: "votre email",
          message:
            form.company +
            ", wanna get touch with you contact him back to start new projects!",
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Merci pour votre message. Je reviendrai vers vous dès que possible."
          );

          setForm({
            name: "",
            company: "",
            email: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ah, quelque chose a mal tourné. Veuillez réessayer.");
        }
      );
  };
  return (
    <div className="rounded-xl  mx-20 my-10 pb-20 py-15 px-10 bg-gradient-to-r from-smooth_green/80 to-custom_black">
      <h3 className="capitalize text-3xl text-white font-bold py-10">
        If you're ready to start, get in touch with us!
      </h3>
      <div  className="h-2 bg-white rounded w-full mb-20"></div>
      
      <span className="text-white text-3xl pb-14 font-semibold">{question}</span>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className=" py-5 flex gap-14 items-center ">
          <input
            className="py-4 px-6 text-xl rounded-xl"
            onFocus={()=>{setQuestion('Hi, what is your name ?')}}
            type="text"
            name="name"
            placeholder="enter your name"
            onChange={handleChange}
          />
          <input
            className="py-4 px-6 text-xl rounded-xl"
            onFocus={()=>{setQuestion('Hi, what is your email ?')}}          
            type="email"
            name="email"
            placeholder="enter your email"
            onChange={handleChange}
          />
          <input
            className="py-4 px-6 text-xl rounded-xl"
            onFocus={()=>{setQuestion('Hi, what is your company name ?')}}            
            type="text"
            name="company"
            placeholder="enter your company name"
            onChange={handleChange}
          />
        </div>
      <div  className="h-2 bg-white rounded w-full mt-5"></div>
      <div className="flex justify-end items-center"><button type="submit" className="font-semibold px-6 py-2 rounded-full text-custom_black bg-gray-50 text-lg mt-4 ">Done</button>
      </div>      
      </form>
      

    </div>        

  );
};

export default ContactUs;
