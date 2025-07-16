import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Profile', href: '/profile' }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      href: "https://github.com/MohamedAbdrabou12",
      label: "GitHub",
      hoverColor: "hover:text-gray-400"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      href: "mailto:mohamedabdrabou840@gmail.com",
      label: "Email",
      hoverColor: "hover:text-blue-400"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      href: "https://www.linkedin.com/in/mohamed-abdrabou-34812223a/",
      label: "LinkedIn",
      hoverColor: "hover:text-blue-500"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Film className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold">CinemaHub</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your ultimate destination for discovering and exploring movies.
              From blockbusters to indie gems, we have it all.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex flex-col space-y-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-300 ${link.hoverColor} transition-colors duration-300 flex items-center space-x-2`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-5 w-5" />
                <span>Egypt, Cairo</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-5 w-5" />
                <span>+20 1006641942</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4 text-center pt-8 mt-8 border-t border-gray-800 border-solid">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} CinemaHub. By Mohamed Abdrabou. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;