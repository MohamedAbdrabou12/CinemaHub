# CinemaHub - Modern Movie Discovery Platform

A responsive movie discovery platform built with React.js, Vite.js, and Tailwind CSS. Explore and organize your favorite movies with a beautiful, intuitive interface.

## ✨ Current Features

### 🎬 Core Features
- **Hero Slider**: Dynamic auto-playing carousel with smooth transitions
- **Movie Categories**: Browse movies by genre with pagination (9 items per page)
- **Movie Details**: Rich movie information with cast and related movies
- **User Profiles**: Personal watchlists, favorites, and viewing history
- **Authentication**: Google sign-in integration
- **Theme Switching**: Dark/Light mode with system preference detection
- **Responsive Design**: Mobile-first approach, works on all devices

### 🎯 User Experience
- **Modern UI**: Beautiful animations and transitions
- **Smart Navigation**: 
  - Pagination on Home and Categories pages
  - Smooth scroll-to-top functionality
- **Personalization**:
  - Profile photo upload
  - Edit profile information
  - Track viewing history
- **Movie Organization**:
  - Add to watchlist
  - Mark as favorite
  - View recent activity

## 🚀 Tech Stack

- **React 18+**: Modern UI development
- **Vite.js**: Fast build tool
- **Tailwind CSS**: Utility-first styling
- **Lucide React**: Beautiful icons
- **React Router**: Navigation
- **Context API**: State management
- **Local Storage**: Data persistence

## �️ Quick Start

```bash
# Clone repository
git clone https://github.com/MohamedAbdrabou12/cinemahub.git
cd cinemahub

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # UI components
│   ├── Navbar.jsx      # Navigation + theme toggle
│   ├── HeroSlider.jsx  # Auto-playing carousel
│   ├── CategoryCard.jsx # Category cards
│   ├── MovieCard.jsx   # Movie cards
│   └── Footer.jsx      # Site footer
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── Categories.jsx  # Movie categories
│   ├── MovieDetails.jsx # Movie info
│   ├── Login.jsx       # Auth page
│   └── Profile.jsx     # User profile
├── contexts/           # State management
│   ├── ThemeContext.jsx # Theme control
│   └── AuthContext.jsx  # Auth state
└── main.jsx           # Entry point
```

## 🎨 Design

- **Colors**: Blue primary, Purple accents, Dark/Light themes
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent 8px grid system
- **Responsive**: Mobile-first (320px+) to Desktop (1280px+)

## �‍💻 Contact

- **Developer**: Mohamed Abdrabou
- **Email**: mohamedabdrabou840@gmail.com
- **GitHub**: [MohamedAbdrabou12](https://github.com/MohamedAbdrabou12)
- **Location**: Egypt, Cairo

## 🚀 Upcoming Features

- [ ] Movie search functionality
- [ ] User reviews and ratings
- [ ] Movie trailers
- [ ] Advanced filters
- [ ] Social sharing
- [ ] More authentication providers

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - feel free to use and modify!

---

**Made with ❤️ by Mohamed Abdrabou**