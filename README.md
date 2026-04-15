# Workspace Access Manager

## Overview

Workspace Access Manager is a frontend application demonstrating robust global state management patterns for role-based access and UI control using React Context API.

## Features

- Context providers for auth and UI state
- Role-based UI components
- Mock auth service simulating login/logout
- Performance optimizations with context splitting

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd workspace-access-manager
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Testing

Run tests using:
```bash
npm test
```

## Docker

Build and run the Docker container:
```bash
docker build -t workspace-access-manager .
docker run -p 3000:3000 workspace-access-manager
```

## License

This project is licensed under the MIT License.