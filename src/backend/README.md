# Backend

This folder contains organized backend-style code for the SearchTrends Pro application.

## Structure

- `/api/` - API services and data handling logic
- `/config/` - Configuration files and settings  
- `/types/` - TypeScript type definitions shared across the app

## Purpose

While this project runs as a frontend-only React app, this folder provides:
- Clean separation of business logic from UI components
- Organized data services that could easily be moved to a real backend
- Type definitions and interfaces for consistent data handling
- Mock API services that simulate real backend functionality

## Usage

Import services and types from this folder into your React components:

```typescript
import { SearchService } from '@/backend/api/search';
import { CelebrityData } from '@/backend/types/data';
```