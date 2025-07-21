# AI Learning Hub

## Overview

This is a full-stack educational web application focused on teaching Artificial Intelligence concepts to students from elementary through college level. The application provides comprehensive learning resources, interactive quizzes, certifications information, and contact functionality, all wrapped in a modern, responsive user interface.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for the user interface
- **Vite** as the build tool and development server
- **Tailwind CSS** for styling with a custom design system
- **shadcn/ui** component library for consistent UI components
- **Wouter** for client-side routing
- **TanStack Query** for server state management and API calls

### Backend Architecture
- **Express.js** server with TypeScript
- RESTful API design with proper error handling
- Custom middleware for request logging and response formatting
- **PostgreSQL database** with Drizzle ORM for data persistence

### Database Design
- **Drizzle ORM** configured for PostgreSQL
- Three main entities:
  - **Users**: Authentication system (prepared but not fully implemented)
  - **Contacts**: Contact form submissions with age group categorization
  - **Quiz Results**: Quiz performance tracking with JSON answer storage

## Key Components

### Educational Content Structure
- **Introduction to AI**: Basic concepts and real-world applications
- **AI Subdomains**: Machine Learning, Deep Learning, NLP, Computer Vision, Robotics
- **Learning Resources**: Age-appropriate materials (Elementary, High School, College)
- **Certifications**: Beginner to advanced certification paths
- **Skills & Knowledge**: Required mathematical and programming foundations
- **Interactive Quiz**: Knowledge assessment with progress tracking

### UI Components
- Responsive navigation with smooth scrolling
- Hero section with compelling call-to-action
- Age-grouped resource organization
- Interactive quiz with progress indicators
- Contact form with validation
- Footer with organized links

### API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Retrieve all contacts (admin)
- `POST /api/quiz-results` - Submit quiz results
- `GET /api/quiz-stats` - Get quiz statistics

## Data Flow

1. **User Interaction**: Users navigate through educational content, take quizzes, and submit contact forms
2. **Client-Side Validation**: React Hook Form with Zod schema validation ensures data integrity
3. **API Communication**: TanStack Query manages server communication with proper error handling
4. **Server Processing**: Express routes validate data and interact with storage layer
5. **Data Persistence**: Storage interface allows for easy switching between in-memory and database storage
6. **Response Handling**: Consistent JSON responses with proper HTTP status codes

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Hook Form)
- Express.js with TypeScript support
- Drizzle ORM with PostgreSQL adapter (@neondatabase/serverless)

### UI and Styling
- Tailwind CSS with custom configuration
- Radix UI primitives for accessible components
- Lucide React for consistent iconography
- Class Variance Authority for component variants

### Development Tools
- Vite with React plugin and Replit integration
- TypeScript with strict configuration
- ESBuild for production bundling

## Deployment Strategy

### Development Environment
- Vite development server with HMR
- Express server running on development mode
- PostgreSQL database with persistent storage
- Replit-specific plugins for cartographer and error overlay

### Production Build
- Vite builds optimized client bundle to `dist/public`
- ESBuild bundles server code to `dist/index.js`
- Static file serving through Express
- Database migrations through Drizzle Kit

### Environment Configuration
- `DATABASE_URL` environment variable for PostgreSQL connection
- Separate development and production configurations
- Build artifacts separated from source code

## Changelog

```
Changelog:
- July 03, 2025. Added PostgreSQL database integration with Drizzle ORM
- July 02, 2025. Initial setup with complete AI Learning Hub website
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```