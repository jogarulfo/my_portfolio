# Portfolio Website - CS & Athletics

A modern, responsive portfolio website showcasing both computer science projects and track & field achievements. Built with HTML5, CSS3, and JavaScript.

## 🎯 Features

### Computer Science Portfolio
- **Interactive Project Showcase**: Filterable project cards with live demos and GitHub links
- **Skills Display**: Comprehensive technical skills with modern icons
- **Responsive Design**: Mobile-first approach ensuring great UX across all devices
- **Performance Optimized**: Fast loading with optimized assets and code

### Athletics Portfolio
- **Personal Records**: Dynamic display of track and field achievements
- **Competition Timeline**: Chronological view of athletic milestones
- **Achievement Highlights**: Medal and recognition showcase
- **Training Progress**: Performance analytics and improvement tracking

### Technical Features
- **Smooth Animations**: CSS3 and JavaScript powered animations
- **Interactive Navigation**: Smart navbar with section highlighting
- **Contact Form**: Fully functional contact form with validation
- **SEO Optimized**: Comprehensive meta tags and semantic HTML
- **Accessibility**: WCAG compliant with keyboard navigation support

## 🚀 Live Demo

[View Live Portfolio](https://yourusername.github.io/my_portfolio)

## 📱 Screenshots

### Desktop View
![Desktop Preview](assets/images/desktop-preview.png)

### Mobile View
![Mobile Preview](assets/images/mobile-preview.png)

## 🛠 Technologies Used

### Frontend
- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Font Awesome**: Professional icon library
- **Google Fonts**: Inter and Fira Code typography

### Performance & Optimization
- **Responsive Images**: Optimized for all screen sizes
- **CSS Custom Properties**: Maintainable color and spacing system
- **Intersection Observer API**: Smooth scroll animations
- **Throttled Scroll Events**: Optimized performance

## 📁 Project Structure

```
my_portfolio/
├── assets/
│   ├── css/
│   │   └── style.css          # Main stylesheet with responsive design
│   ├── js/
│   │   └── main.js            # Interactive functionality
│   └── images/
│       ├── profile.jpg        # Your profile photo
│       ├── favicon.ico        # Website icon
│       └── projects/          # Project screenshots
├── index.html                 # Main HTML file
├── README.md                  # This file
└── .gitignore                # Git ignore rules
```

## 🎨 Customization Guide

### Personal Information
1. **Profile Photo**: Replace `assets/images/profile.jpg` with your photo
2. **Contact Details**: Update email, phone, and social links in `index.html`
3. **Personal Records**: Modify athletics achievements in the athletics section

### Projects
Update the `projectsData` array in `assets/js/main.js`:

```javascript
const projectsData = [
    {
        title: "Your Project Title",
        description: "Project description",
        image: "🚀", // Emoji or image path
        technologies: ["React", "Node.js", "MongoDB"],
        category: "web", // web, mobile, data, other
        github: "https://github.com/yourusername/project",
        demo: "https://your-demo-url.com"
    }
];
```

### Colors & Styling
Customize the design by modifying CSS variables in `assets/css/style.css`:

```css
:root {
    --primary-color: #2563eb;    /* Main brand color */
    --secondary-color: #1e40af;  /* Secondary brand color */
    --accent-color: #f59e0b;     /* Accent color */
    /* ... other variables */
}
```

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select "Deploy from a branch" > "main" branch
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify
1. Connect your GitHub repository to Netlify
2. Deploy with these settings:
   - Build command: (leave empty)
   - Publish directory: `/`
3. Your site will be deployed automatically on every push

### Vercel
1. Import your GitHub repository to Vercel
2. Deploy with default settings
3. Automatic deployments on every commit

## 📊 Performance Features

- **Optimized Loading**: Efficient CSS and JavaScript loading
- **Responsive Images**: Proper image sizing and formats
- **Smooth Animations**: Hardware-accelerated CSS transitions
- **Fast Navigation**: Smooth scrolling and section highlighting
- **Mobile Optimized**: Touch-friendly interface and gestures

## ♿ Accessibility Features

- **Keyboard Navigation**: Full site navigation without mouse
- **Screen Reader Support**: Semantic HTML and ARIA labels
- **High Contrast Support**: Readable color combinations
- **Reduced Motion Support**: Respects user motion preferences
- **Focus Management**: Proper focus indicators and flow

## 🔧 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/my_portfolio.git
   cd my_portfolio
   ```

2. **Open in browser**:
   - Simply open `index.html` in your browser
   - Or use a local server like Live Server in VS Code

3. **Make your changes**:
   - Update personal information
   - Add your projects and achievements
   - Customize colors and styling

## 📝 Content Guidelines

### Writing Project Descriptions
- **Be Specific**: Mention technologies and key features
- **Show Impact**: Include user benefits or problem solved
- **Keep Concise**: 2-3 sentences maximum
- **Include Links**: Always provide GitHub and demo links

### Athletics Content
- **Recent First**: List most recent achievements first
- **Be Accurate**: Use verified times and distances
- **Show Progress**: Include improvement over time
- **Add Context**: Mention competition level and conditions

## 🐛 Browser Support

- **Chrome**: 90+ ✅
- **Firefox**: 88+ ✅
- **Safari**: 14+ ✅
- **Edge**: 90+ ✅
- **Mobile Safari**: 14+ ✅
- **Chrome Android**: 90+ ✅

## 📈 SEO Features

- **Meta Tags**: Comprehensive meta description and keywords
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for search engines
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Fast Loading**: Optimized Core Web Vitals

## 🤝 Contributing

If you'd like to contribute improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Design Inspiration**: Modern portfolio websites and CS webring
- **Icons**: Font Awesome icon library
- **Fonts**: Google Fonts (Inter, Fira Code)
- **Colors**: Tailwind CSS color palette inspiration

## 📞 Contact

- **Email**: your.email@university.edu
- **LinkedIn**: [linkedin.com/in/yourusername](https://linkedin.com/in/yourusername)
- **GitHub**: [github.com/yourusername](https://github.com/yourusername)
- **Portfolio**: [yourdomain.com](https://yourdomain.com)

---

Made with ❤️ for showcasing both code and athletics achievements.
