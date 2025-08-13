# Professional Web Portfolio

A modern, responsive portfolio website built with Next.js, featuring smooth animations and Apple-inspired design aesthetics.

## 🚀 Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Apple-Style Aesthetics**: Clean, modern design with subtle animations
- **Smooth Scrolling Navigation**: Interactive menu with active section highlighting
- **Professional Sections**:
  - Hero section with profile photo
  - Experience timeline
  - Education background
  - Certifications with credential ID tooltips
  - Contact information
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Performance**: Optimized images and smooth animations using Framer Motion
- **Testing**: Comprehensive test suite with Jest and React Testing Library

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Testing**: Jest + React Testing Library
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**:
   \`\`\`bash
   git clone https://github.com/AlvaDevs/portfolio.git
   cd portfolio
   \`\`\`

2. **Install dependencies**:
   \`\`\`bash
   npm install --legacy-peer-deps
   \`\`\`

3. **Run the development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser** and navigate to `http://localhost:3000`

## 🧪 Testing

Run the test suite:
\`\`\`bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
\`\`\`

View coverage report by opening `coverage/lcov-report/index.html` in your browser.

## 🎨 Customization

### Personal Information
Update your personal details in the following components:
- `components/hero.tsx` - Name, title, and profile photo
- `components/experience.tsx` - Work experience and roles
- `components/education.tsx` - Educational background
- `components/certifications.tsx` - Professional certifications
- `components/contact.tsx` - Contact information and social links

### Profile Photo
1. Add your photo to the `public` folder as `profile-photo.jpg`
2. Recommended specs: Square aspect ratio, 256x256px minimum, under 500KB

### Styling
- Colors and themes can be customized in `app/globals.css`
- Component styles use Tailwind CSS classes
- Animations are configured in individual components using Framer Motion

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with fonts and providers
│   ├── page.tsx           # Main portfolio page
│   └── globals.css        # Global styles and Tailwind config
├── components/            # React components
│   ├── navigation.tsx     # Navigation menu
│   ├── hero.tsx          # Hero section
│   ├── experience.tsx    # Experience timeline
│   ├── education.tsx     # Education section
│   ├── certifications.tsx # Certifications with tooltips
│   ├── contact.tsx       # Contact information
│   └── ui/               # shadcn/ui components
├── __tests__/            # Test files
└── public/               # Static assets
\`\`\`

## 🚀 Deployment

### Netlify (Recommended)
1. **Push your code to GitHub**
2. **Login to [Netlify](https://www.netlify.com/)**
3. **Select your GitHub repository** and configure the following build settings:
    - **Build command**:
    \`\`\`bash
    npm run build
    \`\`\`

    - **Publish directory**:
    \`\`\`bash
    .next
    \`\`\`

    - **Environment variables** (if needed):
    Add any required `variables like NEXT_PUBLIC_API_URL`, etc.
3. **Click "Deploy site"** and wait for the build to complete
4. Your portfolio will be live at your Netlify domain (you can customize it later)
> 💡 **Tip**: Enable automatic deployments by connecting your GitHub repo to Netlify. Every push to `main` will trigger a new build.

### Manual Deployment
\`\`\`bash
npm run build
npm start
\`\`\`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Open a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: [aalvarez.contact04@gmail.com]
- **LinkedIn**: [https://www.linkedin.com/in/aalvarez-p/]
- **GitHub**: [https://github.com/AlvaDevs]

---

Built with ❤️ using Next.js and deployed on Netlify.
