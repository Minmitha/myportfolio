import React, { useState } from 'react';
import LongButton  from './LongButton';

const Form = () => {
  const [formValues, setFormValues] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    let newErrors = {};
    if (!formValues.name) newErrors.name = 'Valid Name is required';
    if (!/\S+@\S+\.\S+/.test(formValues.email)) newErrors.email = 'Valid Email is required';
    if (!/^\d+$/.test(formValues.phone)) newErrors.phone = 'Valid Phone number is required';
    if (!formValues.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Construct mailto link for sending email
      window.location.href = `mailto:minmitha0822@gmail.com?subject=Message from ${formValues.name}&body=Name: ${formValues.name}%0D%0AEmail: ${formValues.email}%0D%0APhone: ${formValues.phone}%0D%0AMessage: ${formValues.message}`;
    }
  };

  return (
    <form className="w-full lg:max-w-[800px] flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col w-full">
          <input
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
            className={`bg-[#252525] md:h-12 h-10  md:text-xl text-base  font-serif md:text-center pl-4 rounded-full focus:outline-none focus:ring-1 ${
              errors.name ? 'focus:ring-red-500' : 'focus:ring-yellow-500'
            } focus:border-[#FFB400] caret-white text-white`}
            type="text"
            placeholder="Your Name"
          />
          {errors.name && <span className="text-red-500 text-sm mt-1 font-serif">{errors.name}</span>}
        </div>

        <div className="flex flex-col w-full">
          <input
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            className={`bg-[#252525] md:h-12 h-10  md:text-xl text-base font-serif md:text-center pl-4 rounded-full focus:outline-none focus:ring-1 ${
              errors.email ? 'focus:ring-red-500' : 'focus:ring-yellow-500'
            } focus:border-[#FFB400] caret-white text-white`}
            type="text"
            placeholder="Your Email"
          />
          {errors.email && <span className="text-red-500 text-sm mt-1 font-serif">{errors.email}</span>}
        </div>

        <div className="flex flex-col w-full">
          <input
            name="phone"
            value={formValues.phone}
            onChange={handleInputChange}
            className={`bg-[#252525] md:h-12 h-10  md:text-xl text-base font-serif md:text-center pl-4 rounded-full focus:outline-none focus:ring-1 ${
              errors.phone ? 'focus:ring-red-500' : 'focus:ring-yellow-500'
            } focus:border-[#FFB400] caret-white text-white`}
            type="text"
            placeholder="Your Phone"
          />
          {errors.phone && <span className="text-red-500 text-sm mt-1 font-serif">{errors.phone}</span>}
        </div>
      </div>

      <div className="flex flex-col w-full">
        <textarea
          name="message"
          value={formValues.message}
          onChange={handleInputChange}
          className={`bg-[#252525] h-[150px] lg:h-[200px] font-serif w-full  md:text-xl text-base text-left rounded-xl p-4 focus:outline-none focus:ring-1 ${
            errors.message ? 'focus:ring-red-500' : 'focus:ring-yellow-500'
          } focus:border-[#FFB400] caret-white text-white`}
          placeholder="Your Message"
        />
        {errors.message && <span className="text-red-500 text-sm mt-1 font-serif">{errors.message}</span>}
      </div>

      <div className="flex w-full max-w-[400px] lg:max-w-[800px] justify-start mt-4">
        <LongButton text="MESSAGE ME" icon="./img/asset/telegram.svg" iconclass="relative md:w-5 md:h-5 w-4 h-4" link="" />
      </div>
      <div className="flex w-full max-w-[400px] lg:max-w-[800px] justify-start mt-4">
      </div>
    </form>
  );
}
export default Form;