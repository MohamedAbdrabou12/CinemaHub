import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Calendar, Clock, Play, Heart, Share, BookmarkPlus } from 'lucide-react';
import Footer from '../components/Footer';

const MovieDetails = () => {
  const { id } = useParams();

  const movie = {
    id: '1',
    title: 'The Dark Knight',
    image: 'https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&fit=crop',
    backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop',
    rating: 9.0,
    year: 2008,
    duration: '2h 32m',
    genre: 'Action, Crime, Drama',
    director: 'Christopher Nolan',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart', 'Michael Caine'],
    plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman has been able to keep a tight lid on crime in Gotham City.',
    trailer: 'https://example.com/trailer',
    budget: '$185 million',
    boxOffice: '$1.005 billion'
  };

  const relatedMovies = [
    {
      id: '2',
      title: 'Batman Begins',
      image: 'https://images.pexels.com/photos/7991440/pexels-photo-7991440.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop',
      rating: 8.2
    },
    {
      id: '3',
      title: 'The Dark Knight Rises',
      image: 'https://i.ytimg.com/vi/lMeijOXTJEU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBv736K5wDqj6tVixF7_qxPta2Q6A',
      rating: 8.4
    },
    {
      id: '4',
      title: 'Joker',
      image: 'https://images.pexels.com/photos/8983035/pexels-photo-8983035.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop',
      rating: 8.4
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${movie.backdrop})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {movie.title}
                </h1>
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                    <span className="text-2xl font-bold">{movie.rating}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>{movie.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>{movie.duration}</span>
                  </div>
                </div>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {movie.plot}
                </p>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg transition-colors text-lg font-semibold">
                    <Play className="h-6 w-6" />
                    <span>Watch Trailer</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 px-6 py-4 rounded-lg transition-colors">
                    <BookmarkPlus className="h-5 w-5" />
                    <span>Watchlist</span>
                  </button>
                  <button className="p-4 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="p-4 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors">
                    <Share className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="rounded-lg shadow-2xl max-w-sm w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Details */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Movie Details
              </h2>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Director</h3>
                    <p className="text-gray-600 dark:text-gray-300">{movie.director}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Genre</h3>
                    <p className="text-gray-600 dark:text-gray-300">{movie.genre}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Budget</h3>
                    <p className="text-gray-600 dark:text-gray-300">{movie.budget}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Box Office</h3>
                    <p className="text-gray-600 dark:text-gray-300">{movie.boxOffice}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cast</h3>
                  <div className="flex flex-wrap gap-2">
                    {movie.cast.map((actor, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {actor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Related Movies
              </h3>
              <div className="space-y-4">
                {relatedMovies.map((relatedMovie) => (
                  <div
                    key={relatedMovie.id}
                    className="flex items-center space-x-4 bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                  >
                    <img
                      src={relatedMovie.image}
                      alt={relatedMovie.title}
                      className="w-16 h-24 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {relatedMovie.title}
                      </h4>
                      <div className="flex items-center space-x-1 mt-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {relatedMovie.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MovieDetails;