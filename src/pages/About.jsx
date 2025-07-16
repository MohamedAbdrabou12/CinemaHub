import React from 'react';
import { Film, Users, Star, Award, Play, Heart } from 'lucide-react';
import Footer from '../components/Footer';

const About = () => {
  const features = [
    {
      icon: <Film className="h-8 w-8" />,
      title: 'Vast Movie Collection',
      description: 'Access thousands of movies across all genres and decades'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community Reviews',
      description: 'Read and share reviews with fellow movie enthusiasts'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Personalized Recommendations',
      description: 'Get movie suggestions based on your viewing preferences'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Award-Winning Selection',
      description: 'Discover critically acclaimed and award-winning films'
    }
  ];

  const howToUse = [
    {
      step: 1,
      title: 'Browse Categories',
      description: 'Explore movies by genre, year, or popularity'
    },
    {
      step: 2,
      title: 'Find Your Movie',
      description: 'Use search or browse through our curated collections'
    },
    {
      step: 3,
      title: 'Get Details',
      description: 'Read descriptions, reviews, and watch trailers'
    },
    {
      step: 4,
      title: 'Start Watching',
      description: 'Enjoy your selected movie with the best quality'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About CinemaHub
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Your ultimate destination for discovering, exploring, and enjoying the world's best movies. 
            We're passionate about connecting movie lovers with incredible stories.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                At CinemaHub, we believe that great movies have the power to inspire, entertain, and bring people together. 
                Our mission is to make discovering your next favorite film as enjoyable as watching it.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Whether you're looking for the latest blockbusters, hidden indie gems, or classic masterpieces, 
                we've curated a comprehensive collection that caters to every taste and mood.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7991440/pexels-photo-7991440.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Cinema experience"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Makes Us Special
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover why millions of movie lovers choose CinemaHub as their go-to platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How to Use CinemaHub
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Getting started is easy! Follow these simple steps to discover your next favorite movie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howToUse.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Movies Available</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">1M+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Happy Users</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Countries</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">4.9</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;