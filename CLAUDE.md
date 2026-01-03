# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a NestJS TypeScript application that provides a simple task management API. The application uses an in-memory data store and demonstrates basic NestJS patterns including modules, controllers, services, and DTOs.

## Development Commands

### Running the Application
- `npm run start` - Start in development mode
- `npm run start:dev` - Start with file watching (hot reload)
- `npm run start:debug` - Start with debugging enabled
- `npm run start:prod` - Start in production mode (requires build first)

### Building
- `npm run build` - Build the application using Nest CLI

### Testing
- `npm test` - Run unit tests
- `npm run test:watch` - Run unit tests in watch mode
- `npm run test:cov` - Run tests with coverage report
- `npm run test:debug` - Run tests with Node debugger
- `npm run test:e2e` - Run end-to-end tests

### Code Quality
- `npm run lint` - Lint and auto-fix TypeScript files
- `npm run format` - Format code with Prettier

## Architecture

### Module Structure
The application follows NestJS's modular architecture:

- **AppModule** (`src/app.module.ts`) - Root module that imports all feature modules
- **TaskModule** (`src/task/task.module.ts`) - Feature module for task management
  - TaskController - Handles HTTP requests for task operations
  - TaskService - Contains business logic for task management
  - DTOs - Data transfer objects in `src/task/dto/`

### Data Flow
1. HTTP requests hit Controllers (`@Controller` decorators)
2. Controllers delegate to Services (`@Injectable` providers)
3. Services contain business logic and data manipulation
4. DTOs define the shape of request/response data

### In-Memory Data Storage
The TaskService uses an in-memory array to store tasks. Data is not persisted and will be reset when the server restarts. Each task has:
- `id` (number) - Auto-incremented ID
- `title` (string) - Task title
- `isCompleted` (boolean) - Completion status

## API Endpoints

All task endpoints are prefixed with `/task`:
- `GET /task/all` - Get all tasks
- `GET /task/by-id/:id` - Get task by ID
- `POST /task` - Create new task (body: `{ title: string }`)
- `PUT /task/:id` - Update task (body: `{ title: string, isCompleted: boolean }`)

## TypeScript Configuration

- Uses ES2023 target with NodeNext module resolution
- Decorators are enabled (`experimentalDecorators`, `emitDecoratorMetadata`)
- Strict null checks enabled but `noImplicitAny` is disabled
- Output directory is `./dist`

## Testing Configuration

- **Unit tests**: Jest config in package.json, tests located next to source files (`*.spec.ts`)
- **E2E tests**: Separate Jest config in `test/jest-e2e.json`, tests in `test/` directory (`*.e2e-spec.ts`)
- Test environment: Node.js
- Test coverage output: `coverage/` directory

## Code Style

- ESLint with TypeScript support (`typescript-eslint`)
- Prettier for formatting (auto end-of-line detection)
- Notable ESLint rules:
  - `@typescript-eslint/no-explicit-any`: off
  - `@typescript-eslint/no-floating-promises`: warn
  - `@typescript-eslint/no-unsafe-argument`: warn
