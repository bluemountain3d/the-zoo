# The Zoo

A React-based web application for managing a virtual zoo, featuring animal feeding schedules and real-time status monitoring.

## Project Overview

The Zoo is a single-page application that allows users to browse animals in a virtual zoo, view detailed information about each animal, and manage their feeding schedules. The app tracks feeding times and displays visual indicators when animals need to be fed.

### Key Features

- **Animal Overview Page** - Browse all zoo animals with status indicators
- **Detailed Animal Pages** - View comprehensive information about each animal
- **Feeding System** - Feed animals with time-based restrictions and status tracking
- **Status Monitoring** - Real-time indicators showing feeding status:
  - Well-fed (< 3 hours since last feeding)
  - Getting hungry (3-5 hours)
  - Needs feeding urgently (> 5 hours)
- **Responsive Design** - Optimized for all screen sizes
- **Error Handling** - Graceful fallbacks for missing images and data
- **Smooth Animations** - Subtle transitions throughout the interface

## Tech Stack

- **React 19** with TypeScript
- **React Router 7** for navigation and routing
- **Context API** for state management
- **useReducer** for complex state logic
- **SCSS** with organized architecture (7-1 pattern)
- **Motion** (Framer Motion) for animations
- **Axios** for API requests
- **Vite** for build tooling

## Project Structure

```
src/
├── components/        # Reusable UI components
├── contexts/         # React Context providers
├── pages/           # Page components (Home, Animals, Animal)
├── reducers/        # State reducers for complex logic
├── services/        # API service layer
├── loaders/         # React Router data loaders
├── utils/           # Helper functions
├── models/          # TypeScript interfaces
└── scss/            # Organized SCSS modules
    ├── abstracts/   # Variables, mixins, functions
    ├── base/        # Reset, typography, base styles
    ├── components/  # Component-specific styles
    ├── layouts/     # Layout patterns
    ├── pages/       # Page-specific styles
    └── utilities/   # Utility classes
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd the-zoo
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory (if needed for API configuration)

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be generated in the `dist/` directory.

## 🎮 Usage

### Browsing Animals

1. Navigate to the homepage
2. Click "Våra djur" to view all animals
3. Browse the animal gallery with real-time feeding status indicators

### Feeding Animals

1. Click on an animal card to view detailed information
2. Check the feeding status indicator
3. Click the "Mata" button when available (enabled after 4 hours since last feeding)
4. The feeding time is saved to localStorage and persists across sessions

### Status Indicators

**Overview Page:**
- 🟢 Well-fed: Last fed within 3 hours
- 🟡 Getting hungry: 3-5 hours since last feeding
- 🔴 Needs feeding: More than 5 hours since last feeding

**Detail Page:**
- Feeding button enabled: 4+ hours since last feeding
- Warning indicator: 3+ hours since last feeding

## Architecture Highlights

### State Management

The application uses a combination of modern React patterns:

- **Context API** provides global access to animal data
- **useReducer** handles complex feeding state logic
- **localStorage** persists feeding times between sessions
- **Custom hooks** encapsulate reusable logic

### Service Layer

Abstracted API communication through a dedicated service layer:

```typescript
// services/animalService.ts
export const getAnimals = async () => {
  // Centralized API logic
}
```

### Type Safety

Full TypeScript implementation with strict typing for:
- Animal models
- API responses
- Component props
- Context values

### Routing

React Router 7 with:
- Layout routes with shared components
- Data loaders for efficient data fetching
- Error boundaries for graceful error handling
- Dynamic routing for animal detail pages

### SCSS Architecture

Organized using the 7-1 pattern:
- **Abstracts**: Variables, mixins, functions
- **Base**: Reset, typography, global styles
- **Components**: Component-specific styles
- **Layouts**: Page layout patterns
- **Pages**: Page-specific styles
- **Utilities**: Helper classes

## Design Features

- Clean, modern interface with intuitive navigation
- Responsive grid layouts
- Status-based color coding
- Smooth page transitions with Motion
- Accessible focus states and keyboard navigation
- Optimized images with fallback handling

## Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Configuration

### Environment Variables

Create a `.env` file for environment-specific configuration:

```env
VITE_API_URL=https://animals.azurewebsites.net/api
```

### Vite Configuration

The project uses Vite with:
- React plugin with Fast Refresh
- TypeScript support
- SCSS preprocessing
- Optimized production builds

## Code Quality

- **ESLint** for code linting
- **TypeScript** for type safety
- **Conventional Commits** for commit messages
- Organized file structure with clear separation of concerns

## Learning Outcomes

This project demonstrates proficiency in:

- Modern React patterns (Hooks, Context, Reducers)
- Client-side routing with React Router
- State management without external libraries
- TypeScript for type-safe development
- SCSS architecture and organization
- API integration and error handling
- Responsive design principles
- Animation and UX enhancements
- localStorage for data persistence

## Contributing

This is an educational project, but suggestions and feedback are welcome.

## License

This project was created as part of a frontend development course at Medieinstitutet.

## Acknowledgments

- Animal data provided by the course API
- Design inspired by modern zoo websites
- Built as part of the Frontend Development program at Medieinstitutet

---

**Note**: This project uses a course-provided API that may have rate limits or availability constraints.
