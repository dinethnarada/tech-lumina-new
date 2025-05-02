'use client';

import { useState} from 'react';

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    fetch('api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message
      })
    })

    setFormData({ name: '', email: '', company: '', message: '' });
    
  };

  // Handle form change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
      {/* Left Column - Contact Information */}
      <div>
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-5 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">Contact Information</h2>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0">
                <svg className="w-full h-full text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold mb-1">Address</p>
                <p className="text-gray-300 text-sm sm:text-base">Tech Lumina, Colombo, Sri Lanka</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0">
                <svg className="w-full h-full text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-bold mb-1">Email</p>
                <p className="text-gray-300 text-sm sm:text-base">contact@techlumina.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0">
                <svg className="w-full h-full text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold mb-1">Phone</p>
                <p className="text-gray-300 text-sm sm:text-base">+94 (123) 456 7890</p>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8">
            <h3 className="font-bold mb-3 sm:mb-4">Office Hours</h3>
            <div className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: By Appointment</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Contact Form */}
      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-5 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">NAME</label>
            <input
              type="text"
              id="name"
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-violet-500/20 rounded-lg focus:outline-none focus:border-violet-500/40 text-white placeholder-gray-400 text-sm sm:text-base"
              placeholder="YOUR NAME"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">EMAIL</label>
            <input
              type="email"
              id="email"
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-violet-500/20 rounded-lg focus:outline-none focus:border-violet-500/40 text-white placeholder-gray-400 text-sm sm:text-base"
              placeholder="YOUR@EMAIL.COM"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">COMPANY</label>
            <input
              type="text"
              id="company"
              name='company'
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-violet-500/20 rounded-lg focus:outline-none focus:border-violet-500/40 text-white placeholder-gray-400 text-sm sm:text-base"
              placeholder="YOUR COMPANY NAME"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">MESSAGE</label>
            <textarea
              id="message"
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-white/5 border border-violet-500/20 rounded-lg focus:outline-none focus:border-violet-500/40 text-white placeholder-gray-400 resize-none text-sm sm:text-base"
              placeholder="TELL US ABOUT YOUR PROJECT"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 sm:py-4 bg-transparent text-white rounded-full text-sm tracking-widest uppercase transition-all border border-[#6B17ED] hover:text-[#6B17ED] hover:bg-white hover:border-white mt-2 sm:mt-4"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
