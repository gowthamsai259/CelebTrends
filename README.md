# CelebTrends - Full Stack Application

A modern full-stack application built with **Next.js** (Backend) and **Angular** (Frontend).

## 🏗️ Project Structure

```
CelebTrends/
├── backend/          # Next.js API Backend
│   ├── src/
│   │   ├── app/      # Next.js App Router
│   │   └── ...
│   └── package.json
├── frontend/         # Angular Frontend
│   ├── src/
│   │   ├── app/      # Angular Components
│   │   └── ...
│   └── package.json
└── package.json      # Root package.json for managing both projects
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd CelebTrends
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

### Development

#### Option 1: Run Both Projects Simultaneously
```bash
npm run dev
```
This will start both the backend and frontend servers concurrently.

#### Option 2: Run Projects Separately

**Backend (Next.js) - Port 3000**
```bash
npm run dev:backend
# or
cd backend && npm run dev
```

**Frontend (Angular) - Port 4200**
```bash
npm run dev:frontend
# or
cd frontend && npm start
```

### Production Build

```bash
npm run build
```

This will build both the backend and frontend for production.

## 🌐 Server Information

### Development Servers

| Service | URL | Port | Framework |
|---------|-----|------|-----------|
| **Backend** | http://localhost:3000 | 3000 | Next.js |
| **Frontend** | http://localhost:4200 | 4200 | Angular |

### Production Servers

| Service | URL | Port | Framework |
|---------|-----|------|-----------|
| **Backend** | http://localhost:3000 | 3000 | Next.js |
| **Frontend** | http://localhost:4200 | 4200 | Angular |

## 🛠️ Technology Stack

### Backend (Next.js)
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: (Configure as needed)
- **Authentication**: (Configure as needed)

### Frontend (Angular)
- **Framework**: Angular 17
- **Language**: TypeScript
- **Styling**: CSS
- **Routing**: Angular Router
- **State Management**: (Configure as needed)

## 📁 Project Structure Details

### Backend Structure
```
backend/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/            # API Routes
│   │   ├── globals.css     # Global Styles
│   │   ├── layout.tsx      # Root Layout
│   │   └── page.tsx        # Home Page
│   ├── components/         # Reusable Components
│   ├── lib/               # Utility Functions
│   └── types/             # TypeScript Types
├── public/                # Static Assets
├── package.json
└── next.config.js
```

### Frontend Structure
```
frontend/
├── src/
│   ├── app/               # Angular Application
│   │   ├── components/    # Angular Components
│   │   ├── services/      # Angular Services
│   │   ├── models/        # Data Models
│   │   └── app.routes.ts  # Routing Configuration
│   ├── assets/           # Static Assets
│   └── styles.css        # Global Styles
├── public/               # Public Assets
├── package.json
└── angular.json
```

## 🔧 Available Scripts

### Root Level Scripts
- `npm run dev` - Start both backend and frontend in development mode
- `npm run dev:backend` - Start only the backend server
- `npm run dev:frontend` - Start only the frontend server
- `npm run build` - Build both projects for production
- `npm run install:all` - Install dependencies for all projects

### Backend Scripts (in backend/ directory)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Frontend Scripts (in frontend/ directory)
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run unit tests
- `npm run lint` - Run ESLint

## 🔗 API Integration

The frontend can communicate with the backend API using the following base URL:

```typescript
// In Angular services
const API_BASE_URL = 'http://localhost:3000/api';
```

## 🚀 Deployment

### Backend Deployment
The Next.js backend can be deployed to:
- Vercel (recommended)
- Netlify
- Railway
- AWS
- Any Node.js hosting platform

### Frontend Deployment
The Angular frontend can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test both backend and frontend
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Common Issues

1. **Port conflicts**: If ports 3000 or 4200 are in use, the servers will automatically use the next available port.

2. **Dependencies issues**: Run `npm run install:all` to reinstall all dependencies.

3. **Build errors**: Make sure you're using Node.js v18 or higher.

### Getting Help

If you encounter any issues:
1. Check the console output for error messages
2. Ensure all dependencies are installed
3. Verify Node.js version compatibility
4. Check if ports are available
