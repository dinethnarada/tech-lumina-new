'use client';

const ContactForm = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Column - Contact Information */}
      <div>
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-8">CONTACT INFORMATION</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 mt-1">
                <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold mb-1">ADDRESS</p>
                <p className="text-gray-300">TECH LUMINA, COLOMBO, SRI LANKA</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 mt-1">
                <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-bold mb-1">EMAIL</p>
                <p className="text-gray-300">CONTACT@TECHLUMINA.COM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 mt-1">
                <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold mb-1">PHONE</p>
                <p className="text-gray-300">+94 (123) 456 7890</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-bold mb-4">OFFICE HOURS</h3>
            <div className="space-y-2 text-gray-300">
              <p>MONDAY - FRIDAY: 9:00 AM - 6:00 PM</p>
              <p>SATURDAY: BY APPOINTMENT</p>
              <p>SUNDAY: CLOSED</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Contact Form */}
      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">NAME</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 bg-white/5 border border-violet-500/20 rounded-lg focus:outline-none focus:border-violet-500/40 text-white placeholder-gray-400"
              placeholder="YOUR NAME"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">EMAIL</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-white/5 border border-violet-500/20 rounded-lg focus:outline-none focus:border-violet-500/40 text-white placeholder-gray-400"
              placeholder="YOUR@EMAIL.COM"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">COMPANY</label>
            <input
              type="text"
              id="company"
              className="w-full px-4 py-3 bg-white/5 border border-violet-500/20 rounded-lg focus:outline-none focus:border-violet-500/40 text-white placeholder-gray-400"
              placeholder="YOUR COMPANY NAME"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">MESSAGE</label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-3 bg-white/5 border border-violet-500/20 rounded-lg focus:outline-none focus:border-violet-500/40 text-white placeholder-gray-400 resize-none"
              placeholder="TELL US ABOUT YOUR PROJECT"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#6B17ED] text-white rounded-lg font-medium hover:bg-[#5912c7] transition-colors"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
