# Portfolio React - Hafiz Muhammad Rizwan

A modern, elegant, and responsive portfolio website built with React. This portfolio showcases projects, skills, education, and provides contact information in an attractive and professional manner.

## ✨ Features

- **Modern UI Design**: Elegant dark theme with gradient accents and smooth animations
- **Fully Responsive**: Optimized for all device sizes (mobile, tablet, desktop)
- **Smooth Animations**: Beautiful fade-in, slide-in, and hover effects
- **Interactive Components**: 
  - Animated typing effect in hero section
  - Progress bars with animated fill
  - Interactive project cards with hover overlays
  - Social media links with custom animations
- **Sections**:
  - Home/Hero Section with typing animation
  - Skills Section with progress bars
  - Portfolio/Projects Section with detailed project cards
  - Education Section
  - Contact Section with social links

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation & Running

1. Navigate to the project directory:
```bash
cd portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

The build files will be in the `build` directory, ready to be deployed.

## 🎨 Color Scheme

The portfolio uses a modern dark theme with purple/blue gradients:
- Primary: `#667eea` (Purple-Blue)
- Secondary: `#764ba2` (Deep Purple)
- Background: Dark gradients (`#0a0f23`, `#1a1a2e`, `#16213e`)
- Text: White with various opacity levels

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🛠️ Technologies Used

- **React**: Frontend framework
- **CSS3**: Styling with modern features (Grid, Flexbox, Animations)
- **React Hooks**: useState, useEffect, useRef for state management
- **Intersection Observer API**: For scroll-based animations

## 📂 Project Structure

```
portfolio-react/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.js & Navbar.css
│   │   ├── Hero.js & Hero.css
│   │   ├── Skills.js & Skills.css
│   │   ├── Portfolio.js & Portfolio.css
│   │   ├── Education.js & Education.css
│   │   └── Contact.js & Contact.css
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```

## 🎯 Key Improvements Over Original

1. **Modern Framework**: Migrated from vanilla HTML/CSS to React
2. **Component-Based Architecture**: Reusable and maintainable code
3. **Enhanced UI**: More elegant design with better color scheme and animations
4. **Better Performance**: Optimized rendering with React
5. **Improved Animations**: Smooth transitions and interactive elements
6. **Better Code Organization**: Separated concerns with component files

## 📝 Customization

To customize the portfolio for your own use:

1. Update personal information in components (name, links, etc.)
2. Modify project data in `Portfolio.js`
3. Update skills in `Skills.js`
4. Change education details in `Education.js`
5. Update social links in `Contact.js`
6. Adjust colors in CSS files to match your preference

## 🌐 Deployment

You can deploy this portfolio to:
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **Firebase Hosting**: Use Firebase CLI

## 👤 Author

**Hafiz Muhammad Rizwan**
- GitHub: [@Hafiz-Muhammad-Rizwan](https://github.com/Hafiz-Muhammad-Rizwan)
- LinkedIn: [Hafiz Muhammad Rizwan](https://www.linkedin.com/in/hafiz-muhammad-rizwan-862484335/)

---

Made with ❤️ by Hafiz Muhammad Rizwan
