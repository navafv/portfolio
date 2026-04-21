import React, { useState } from 'react';
import { Send, Loader2, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [errors, setErrors] = useState({ name: false, email: false, message: false });

  const validate = () => {
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email),
      message: !formData.message.trim()
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(err => err);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error for the field when user starts typing
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: false }));
    }
    // Also reset global error status if user is fixing things
    if (status === 'error') {
      setStatus('idle');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
      return;
    }

    setStatus('loading');

    try {
      // Placeholder API call simulation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Real API Call Implementation:
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) throw new Error('API rejected payload');

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: false, email: false, message: false });

      // Return to idle state after showing success message
      setTimeout(() => {
        setStatus('idle');
      }, 4000);

    } catch (error) {
      console.error("Submission failed:", error);
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10" aria-labelledby="contact-heading">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 id="contact-heading" className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-indigo-400">Connect</span>
          </h2>
          <p className="text-gray-400">
            Have a project in mind or just want to chat? Drop me a message.
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden">
          
          {/* Success Overlay */}
          <div className={`absolute inset-0 z-20 flex items-center justify-center bg-[#0a0a0f]/90 backdrop-blur-md rounded-3xl transition-all duration-500 ${status === 'success' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className="flex flex-col items-center gap-4 transform transition-transform duration-500 scale-100">
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                <CheckCircle size={40} className="text-green-400" />
              </div>
              <p className="text-2xl font-bold text-white font-heading">Message Sent</p>
              <p className="text-gray-400 text-center max-w-xs">Transmission successful. I'll get back to you shortly.</p>
            </div>
          </div>

          <form className="flex flex-col gap-6 relative z-10" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  aria-invalid={errors.name}
                  className={`bg-black/50 border rounded-xl px-4 py-3 text-white focus:outline-none transition-all duration-300 disabled:opacity-50
                    ${errors.name ? 'border-red-500/70 shadow-[0_0_15px_rgba(239,68,68,0.2)] focus:border-red-500' : 'border-white/10 focus:border-purple-500'}
                  `}
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  aria-invalid={errors.email}
                  className={`bg-black/50 border rounded-xl px-4 py-3 text-white focus:outline-none transition-all duration-300 disabled:opacity-50
                    ${errors.email ? 'border-red-500/70 shadow-[0_0_15px_rgba(239,68,68,0.2)] focus:border-red-500' : 'border-white/10 focus:border-purple-500'}
                  `}
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
              <textarea 
                id="message" 
                name="message"
                autoComplete="off"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'loading'}
                aria-invalid={errors.message}
                className={`bg-black/50 border rounded-xl px-4 py-3 text-white focus:outline-none transition-all duration-300 resize-none disabled:opacity-50
                  ${errors.message ? 'border-red-500/70 shadow-[0_0_15px_rgba(239,68,68,0.2)] focus:border-red-500' : 'border-white/10 focus:border-purple-500'}
                `}
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
              <div className="text-sm">
                {status === 'error' && (
                  <p className="text-red-400 animate-pulse">Please correct the highlighted fields and try again.</p>
                )}
              </div>
              <button 
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-linear-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin text-purple-200" />
                    <span className="text-purple-100 tracking-wide">Initiating...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
