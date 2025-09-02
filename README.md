# React TypeScript Webpack Starter

A modern React application bootstrapped with TypeScript, Webpack, Babel, and other essential development tools.

## Features

- ⚛️ React 19
- 📜 TypeScript
- 📦 Webpack 5
- 🎨 CSS Modules support
- ♨️ Hot Module Replacement (HMR)
- 🔍 ESLint + Prettier
- 🪝 Git Hooks with Husky
- 📝 CommitLint for consistent commits
- 🔄 Automatic code formatting on commit

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [your-repo-url]

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm start
```

The application will start at `http://localhost:3000`

### Building for Production

```bash
# Create production build
npm run build
```

The built files will be in the `dist` directory.

### Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm run type-check` - Check TypeScript types
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier

## Project Structure

```
├── src/                # Source files
│   ├── assets/        # Static assets
│   ├── App.tsx        # Root component
│   ├── index.tsx      # Entry point
│   └── style.css      # Global styles
├── public/            # Public static files
├── .babelrc.js       # Babel configuration
├── .eslintrc.js      # ESLint configuration
├── tsconfig.json     # TypeScript configuration
└── webpack.config.js # Webpack configuration
```

## Technology Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Bundler:** Webpack 5
- **Transpiler:** Babel
- **Styling:** CSS Modules
- **Linting:** ESLint
- **Formatting:** Prettier
- **Git Hooks:** Husky
- **Commit Linting:** CommitLint

## Development Features

- Hot Module Replacement (HMR)
- Source Maps
- TypeScript type checking
- ESLint code linting
- Prettier code formatting
- Automated pre-commit hooks
- CSS Modules support
- Asset management
- Production optimization

## Browser Support

The project supports all modern browsers and IE11+ through appropriate babel configuration and polyfills.

See `browserslist` in package.json for specific browser support targeting.

## Contributing

1. Follow conventional commits for commit messages
2. Code formatting and linting run automatically on commit
3. Ensure all tests pass before submitting PR

## License

ISC
