import React from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Footer from '../components/Footer';

const CategoryDetails = () => {
  const { id } = useParams();

  const categoryData = {
    action: {
      title: 'Action Movies',
      description: 'High-octane thrills and adrenaline-pumping adventures',
      image: 'https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1920&h=400&fit=crop',
    },
    drama: {
      title: 'Drama Movies',
      description: 'Compelling stories that touch the heart and soul',
      image: 'https://images.pexels.com/photos/7991440/pexels-photo-7991440.jpeg?auto=compress&cs=tinysrgb&w=1920&h=400&fit=crop',
    },
    comedy: {
      title: 'Comedy Movies',
      description: 'Laugh-out-loud moments and feel-good entertainment',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920&h=400&fit=crop',
    },
    'sci-fi': {
      title: 'Science Fiction',
      description: 'Futuristic worlds and mind-bending adventures',
      image: 'https://i.ytimg.com/vi/lsy_UAFFl_w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD_2KGMFZtwbQpa9A2fV9YR6et3dg',
    }
  };

  const category = categoryData[id] || categoryData.action;

  const movies = [
    {
      id: '1',
      title: 'The Dark Knight',
      image: 'https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop',
      rating: 9.0,
      year: 2008,
      duration: '2h 32m',
      genre: 'Action'
    },
    {
      id: '2',
      title: 'Mad Max: Fury Road',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop',
      rating: 8.1,
      year: 2015,
      duration: '2h 0m',
      genre: 'Action'
    },
    {
      id: '3',
      title: 'John Wick',
      image: 'https://i.ytimg.com/vi/FkNxQ3sVMUE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC9jH2OfGrm9an33c7qj4zTKVmdIg',
      rating: 7.4,
      year: 2014,
      duration: '1h 41m',
      genre: 'Action'
    },
    {
      id: '4',
      title: 'Mission: Impossible',
      image: 'https://images.pexels.com/photos/7991440/pexels-photo-7991440.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop',
      rating: 7.1,
      year: 2018,
      duration: '2h 27m',
      genre: 'Action'
    },
    {
      id: '5',
      title: 'Wonder Woman',
      image: 'https://images.pexels.com/photos/8983035/pexels-photo-8983035.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop',
      rating: 7.4,
      year: 2017,
      duration: '2h 21m',
      genre: 'Action'
    },
    {
      id: '6',
      title: 'Black Panther',
      image: 'https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop',
      rating: 7.3,
      year: 2018,
      duration: '2h 14m',
      genre: 'Action'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${category.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {category.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Movies Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured {category.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Discover the best movies in this category
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                image={movie.image}
                rating={movie.rating}
                year={movie.year}
                duration={movie.duration}
                genre={movie.genre}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryDetails;