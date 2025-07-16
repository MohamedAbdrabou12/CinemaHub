import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Send, MessageSquare, Linkedin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Footer from '../components/Footer';
import ReactLogo from '../components/ReactLogo';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key

const Contact = () => {
  const { isDark } = useTheme();
  const canvasRef = useRef(null);
  const logoRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    reportType: 'general',
    description: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const logo = new ReactLogo();
    logoRef.current = logo;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = 400; // Fixed height for the animation section

    // Initialize and start the animation
    logo.init(canvas);
    logo.start();

    // Cleanup
    return () => {
      logo.stop();
    };
  }, []);

  const contactMethods = [
    {
      icon: <Github className="h-8 w-8" />,
      href: "https://github.com/yourusername",
      hoverColor: "hover:text-gray-600",
      ariaLabel: "GitHub Profile"
    },
    {
      icon: <Mail className="h-8 w-8" />,
      href: "mailto:your.email@example.com",
      hoverColor: "hover:text-blue-600",
      ariaLabel: "Email"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      href: "tel:+201006641942",
      hoverColor: "hover:text-green-600",
      ariaLabel: "Phone"
    },
    {
      icon: <Linkedin className="h-8 w-8" />,
      href: "https://linkedin.com/in/yourusername",
      hoverColor: "hover:text-blue-500",
      ariaLabel: "LinkedIn Profile"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          to_email: 'mohamedabdrabou840@gmail.com',
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          report_type: formData.reportType,
          message: formData.description
        }
      );

      // Clear the form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        reportType: 'general',
        description: ''
      });

      // Show success message
      setIsSubmitted(true);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* React Logo Animation Canvas */}
      <div className="relative h-[400px] overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
          style={{ background: isDark ? 'rgb(17, 24, 39)' : 'rgb(249, 250, 251)' }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-lg max-w-2xl mx-auto px-4`}>
              Have a question or want to collaborate? Feel free to reach out through any of these platforms.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className={`max-w-4xl mx-auto ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-8`}>
          {/* Contact Icons */}
          <div className="flex justify-center space-x-8 mb-12">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDark ? 'text-gray-300' : 'text-gray-600'} ${method.hoverColor} transition-colors duration-300`}
                aria-label={method.ariaLabel}
              >
                {method.icon}
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} ref={form} className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className={`w-full px-4 py-2 rounded-md ${isDark
                    ? 'bg-gray-700 text-white border-gray-600'
                    : 'bg-white text-gray-900 border-gray-300'
                    } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  required
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className={`w-full px-4 py-2 rounded-md ${isDark
                    ? 'bg-gray-700 text-white border-gray-600'
                    : 'bg-white text-gray-900 border-gray-300'
                    } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  required
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-2 rounded-md ${isDark
                  ? 'bg-gray-700 text-white border-gray-600'
                  : 'bg-white text-gray-900 border-gray-300'
                  } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                required
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Type of Inquiry
              </label>
              <select
                name="reportType"
                value={formData.reportType}
                onChange={(e) => setFormData({ ...formData, reportType: e.target.value })}
                className={`w-full px-4 py-2 rounded-md ${isDark
                  ? 'bg-gray-700 text-white border-gray-600'
                  : 'bg-white text-gray-900 border-gray-300'
                  } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              >
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="feedback">Feedback</option>
                <option value="business">Business Proposal</option>
              </select>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Message
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className={`w-full px-4 py-2 rounded-md ${isDark
                  ? 'bg-gray-700 text-white border-gray-600'
                  : 'bg-white text-gray-900 border-gray-300'
                  } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                required
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-md ${isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
                  } ${isLoading ? 'opacity-70 cursor-not-allowed' : ''
                  } text-white transition-colors duration-300`}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>

            {isSubmitted && (
              <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-md text-center">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;