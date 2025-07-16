/**
 * Home Page Component
 * Displays the main landing page of the application featuring:
 * - Hero slider with featured movies
 * - Popular movie categories
 * - Trending movies with pagination
 * - Footer section
 */
import React, { useState } from 'react';
import HeroSlider from '../components/HeroSlider';
import CategoryCard from '../components/CategoryCard';
import MovieCard from '../components/MovieCard';
import Footer from '../components/Footer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample categories data for the featured categories section
const categories = [
  {
    id: 'action',
    title: 'Action',
    description: 'High-octane thrills and adrenaline-pumping adventures',
    image: 'https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=400',
    movieCount: 245
  },
  {
    id: 'drama',
    title: 'Drama',
    description: 'Compelling stories that touch the heart and soul',
    image: 'https://images.pexels.com/photos/7991440/pexels-photo-7991440.jpeg?auto=compress&cs=tinysrgb&w=400',
    movieCount: 189
  },
  {
    id: 'comedy',
    title: 'Comedy',
    description: 'Laugh-out-loud moments and feel-good entertainment',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    movieCount: 156
  },
  {
    id: 'sci-fi',
    title: 'Sci-Fi',
    description: 'Futuristic worlds and mind-bending adventures',
    image: 'https://i.ytimg.com/vi/lsy_UAFFl_w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD_2KGMFZtwbQpa9A2fV9YR6et3dg',
    movieCount: 98
  },
  {
    id: 'horror',
    title: 'Horror',
    description: 'Spine-chilling tales that will keep you on the edge',
    image: 'https://images.pexels.com/photos/8983035/pexels-photo-8983035.jpeg?auto=compress&cs=tinysrgb&w=400',
    movieCount: 87
  },
  {
    id: 'romance',
    title: 'Romance',
    description: 'Love stories that warm the heart and inspire',
    image: 'https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg?auto=compress&cs=tinysrgb&w=400',
    movieCount: 134
  },
  {
    id: 'animation',
    title: 'Animation',
    description: 'Beautifully crafted stories for all ages',
    image: 'https://images.pexels.com/photos/8111358/pexels-photo-8111358.jpeg?auto=compress&cs=tinysrgb&w=400',
    movieCount: 76
  },
  {
    id: 'fantasy',
    title: 'Fantasy',
    description: 'Magical worlds and epic adventures',
    image: 'https://images.pexels.com/photos/3224344/pexels-photo-3224344.jpeg?auto=compress&cs=tinysrgb&w=400',
    movieCount: 92
  }
];

// Sample movies data for the featured movies section
const allMovies = [
  {
    id: '1',
    title: 'The Batman',
    image: 'https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop',
    rating: 8.5,
    year: 2022,
    duration: '2h 56m',
    genre: 'Action'
  },
  {
    id: '2',
    title: 'Spider-Man: No Way Home',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop',
    rating: 8.7,
    year: 2021,
    duration: '2h 28m',
    genre: 'Action'
  },
  {
    id: '3',
    title: 'Dune',
    image: 'https://images.pexels.com/photos/7991440/pexels-photo-7991440.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop',
    rating: 8.2,
    year: 2021,
    duration: '2h 35m',
    genre: 'Sci-Fi'
  },
  {
    id: '4',
    title: 'Top Gun: Maverick',
    image: 'https://i.ytimg.com/vi/gKXFUSBBJL0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDhBk1W7Vlmqu2lsX97EvNyN4V_OQ',
    rating: 8.8,
    year: 2022,
    duration: '2h 10m',
    genre: 'Action'
  },
  {
    id: '5',
    title: 'The Whale',
    image: 'https://images.pexels.com/photos/7319074/pexels-photo-7319074.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop',
    rating: 8.0,
    year: 2022,
    duration: '1h 57m',
    genre: 'Drama'
  },
  {
    id: '6',
    title: 'Everything Everywhere All at Once',
    image: 'https://images.pexels.com/photos/8111358/pexels-photo-8111358.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop',
    rating: 8.9,
    year: 2022,
    duration: '2h 19m',
    genre: 'Sci-Fi'
  },
  {
    id: '7',
    title: 'Avatar: The Way of Water',
    image: 'https://images.pexels.com/photos/3224344/pexels-photo-3224344.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop',
    rating: 8.3,
    year: 2022,
    duration: '3h 12m',
    genre: 'Fantasy'
  },
  {
    id: '8',
    title: 'Black Panther: Wakanda Forever',
    image: 'https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop',
    rating: 8.2,
    year: 2022,
    duration: '2h 41m',
    genre: 'Action'
  },
  {
    id: '9',
    title: 'The Menu',
    image: 'https://images.pexels.com/photos/7991582/pexels-photo-7991582.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop',
    rating: 7.9,
    year: 2022,
    duration: '1h 47m',
    genre: 'Thriller'
  },
  {
    id: '10',
    title: 'Glass Onion',
    image: 'https://images.pexels.com/photos/8983035/pexels-photo-8983035.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop',
    rating: 8.1,
    year: 2022,
    duration: '2h 19m',
    genre: 'Mystery'
  },
  {
    id: '11',
    title: 'The Northman',
    image: 'https://images.pexels.com/photos/7991440/pexels-photo-7991440.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop',
    rating: 7.8,
    year: 2022,
    duration: '2h 17m',
    genre: 'Action'
  },
  {
    id: '12',
    title: 'The Banshees of Inisherin',
    image: 'https://images.pexels.com/photos/8111359/pexels-photo-8111359.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop',
    rating: 8.0,
    year: 2022,
    duration: '1h 54m',
    genre: 'Drama'
  }
];

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 8;
  const totalPages = Math.ceil(allMovies.length / moviesPerPage);

  // Get current movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = allMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to movies section smoothly
    document.getElementById('movies-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Categories Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Categories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore our vast collection of movies by genre
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Movies Section */}
      <section id="movies-section" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Movies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The latest and greatest in cinema, handpicked for you
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {currentMovies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center items-center space-x-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-full ${currentPage === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-blue-600 hover:bg-blue-100 dark:hover:bg-gray-700'
                }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`w-10 h-10 rounded-full ${currentPage === i + 1
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700'
                  }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full ${currentPage === totalPages
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-blue-600 hover:bg-blue-100 dark:hover:bg-gray-700'
                }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;