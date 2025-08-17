# 🚀 Quick Setup Guide

## Prerequisites

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

## 🎯 Quick Start

### Option 1: One-Command Setup (Recommended)
```bash
./start.sh
```

### Option 2: Manual Setup

1. **Install all dependencies**
   ```bash
   npm run install:all
   ```

2. **Start both servers**
   ```bash
   npm run dev
   ```

### Option 3: Run Servers Separately

**Backend (Next.js) - Port 3000**
```bash
npm run dev:backend
```

**Frontend (Angular) - Port 4200**
```bash
npm run dev:frontend
```

## 🌐 Access Your Application

Once the servers are running, you can access:

- **Backend API**: http://localhost:3000
- **Frontend App**: http://localhost:4200
- **API Endpoint**: http://localhost:3000/api/hello

## 🧪 Test the Setup

1. Open http://localhost:4200 in your browser
2. Click "Test GET API" to verify backend communication
3. Click "Test POST API" to test data sending
4. Check the console for API responses

## 📁 Project Structure

```
CelebTrends/
├── backend/          # Next.js API Backend
│   ├── src/app/api/  # API Routes
│   └── ...
├── frontend/         # Angular Frontend
│   ├── src/app/      # Angular Components
│   └── ...
└── package.json      # Root package.json
```

## 🔧 Available Commands

- `npm run dev` - Start both servers
- `npm run dev:backend` - Start only backend
- `npm run dev:frontend` - Start only frontend
- `npm run build` - Build for production
- `npm run install:all` - Install all dependencies

## 🆘 Troubleshooting

**Port already in use?**
- The servers will automatically use the next available port
- Check the console output for the actual URLs

**Dependencies issues?**
```bash
npm run install:all
```

**Node.js version too old?**
- Install Node.js v18 or higher from https://nodejs.org/

## 📚 Next Steps

1. Explore the backend API routes in `backend/src/app/api/`
2. Modify the Angular components in `frontend/src/app/`
3. Add your own features and functionality
4. Deploy to your preferred hosting platform 