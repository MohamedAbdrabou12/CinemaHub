/**
 * User Profile Page Component
 * Manages user's personal space with:
 * - Profile information display and editing
 * - Profile photo upload
 * - Watchlist display
 * - Favorites collection
 * - Recent activity tracking
 * - Protected route (requires authentication)
 */
import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Film, Heart, BookmarkPlus, Star, Calendar, Clock, User, Mail, Edit3, Save, X, Camera } from 'lucide-react';
import Footer from '../components/Footer';

const Profile = () => {
  const { user, updateProfile, isAuthenticated } = useAuth();
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: '',
    email: '',
    photoURL: ''
  });
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    if (user) {
      setEditData({
        name: user.name || '',
        email: user.email || '',
        photoURL: user.photoURL || ''
      });
      setPreviewImage(user.photoURL || '');
    }
  }, [user, isAuthenticated, navigate]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setEditData(prev => ({ ...prev, photoURL: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    try {
      await updateProfile(editData);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleCancel = () => {
    setEditData({
      name: user?.name || '',
      email: user?.email || '',
      photoURL: user?.photoURL || ''
    });
    setPreviewImage(user?.photoURL || '');
    setIsEditing(false);
  };

  const watchlist = [
    {
      id: '1',
      title: 'Inception',
      image: 'https://images.pexels.com/photos/7991440/pexels-photo-7991440.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop',
      rating: 8.8,
      year: 2010,
      duration: '2h 28m',
      addedDate: '2024-01-15'
    },
    {
      id: '2',
      title: 'Interstellar',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTelgCJ2SJHhBN1P9M09WCobZy7Hbk9eNNvkQ&s',
      rating: 8.6,
      year: 2014,
      duration: '2h 49m',
      addedDate: '2024-01-10'
    },
    {
      id: '3',
      title: 'The Matrix',
      image: 'https://images.pexels.com/photos/8983035/pexels-photo-8983035.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop',
      rating: 8.7,
      year: 1999,
      duration: '2h 16m',
      addedDate: '2024-01-08'
    }
  ];

  const favorites = [
    {
      id: '3',
      title: 'The Dark Knight',
      image: 'https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop',
      rating: 9.0,
      year: 2008,
      duration: '2h 32m',
      addedDate: '2024-01-20'
    },
    {
      id: '4',
      title: 'Pulp Fiction',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop',
      rating: 8.9,
      year: 1994,
      duration: '2h 34m',
      addedDate: '2024-01-18'
    }
  ];

  const recentActivity = [
    { action: 'Added to watchlist', movie: 'Inception', date: '2024-01-15' },
    { action: 'Marked as favorite', movie: 'The Dark Knight', date: '2024-01-20' },
    { action: 'Watched', movie: 'Interstellar', date: '2024-01-12' },
    { action: 'Added to watchlist', movie: 'The Matrix', date: '2024-01-08' }
  ];

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Please log in to view your profile
          </h2>
          <button
            onClick={() => navigate('/login')}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className={`rounded-lg shadow-lg p-6 mb-8 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="flex flex-col items-center mb-8">
            {/* Profile Photo Section */}
            <div className="relative mb-4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500">
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <User size={48} className={isDark ? 'text-gray-400' : 'text-gray-600'} />
                  </div>
                )}
              </div>
              {isEditing && (
                <>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current.click()}
                    className="absolute bottom-0 right-0 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    <Camera size={20} />
                  </button>
                </>
              )}
            </div>

            <div className="flex justify-between items-center w-full mb-6">
              <h1 className="text-2xl font-bold">Profile</h1>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md ${isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
                    } text-white transition-colors`}
                >
                  <Edit3 size={18} />
                  Edit Profile
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 text-white transition-colors"
                  >
                    <Save size={18} />
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                      } transition-colors`}
                  >
                    <X size={18} />
                    Cancel
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-6 w-full">
              <div className={`p-4 rounded-md ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <div className="flex items-center gap-3 mb-2">
                  <User className={isDark ? 'text-gray-300' : 'text-gray-600'} />
                  <span className="font-medium">Name</span>
                </div>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.name}
                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                    className={`w-full px-4 py-2 rounded-md ${isDark
                      ? 'bg-gray-600 text-white'
                      : 'bg-white text-gray-900'
                      } border border-gray-300`}
                  />
                ) : (
                  <p className="text-lg">{user?.name || 'Not set'}</p>
                )}
              </div>

              <div className={`p-4 rounded-md ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <div className="flex items-center gap-3 mb-2">
                  <Mail className={isDark ? 'text-gray-300' : 'text-gray-600'} />
                  <span className="font-medium">Email</span>
                </div>
                {isEditing ? (
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                    className={`w-full px-4 py-2 rounded-md ${isDark
                      ? 'bg-gray-600 text-white'
                      : 'bg-white text-gray-900'
                      } border border-gray-300`}
                  />
                ) : (
                  <p className="text-lg">{user?.email || 'Not set'}</p>
                )}
              </div>
            </div>
          </div>

          {/* Watchlist Section */}
          <div className={`rounded-lg shadow-lg p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-bold mb-6">My Watchlist</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {watchlist.map((movie) => (
                <div
                  key={movie.id}
                  className={`rounded-lg overflow-hidden shadow-md ${isDark ? 'bg-gray-700' : 'bg-gray-50'
                    }`}
                >
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{movie.title}</h3>
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <Star className="text-yellow-400" size={16} />
                      <span>{movie.rating}</span>
                      <span className="mx-2">•</span>
                      <Calendar size={16} />
                      <span>{movie.year}</span>
                      <span className="mx-2">•</span>
                      <Clock size={16} />
                      <span>{movie.duration}</span>
                    </div>
                    <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      Added on {new Date(movie.addedDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Profile;