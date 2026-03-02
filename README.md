# Warehouse Management System (WMS)

This repository contains the full-stack application for the Nalashaa Warehouse Management System, including a .NET Core backend and a React/Vite frontend.

## Prerequisites

Ensure you have the following installed on your machine:
- [.NET 8.0 SDK](https://dotnet.microsoft.com/download) (or the specific version required by the solution)
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)
- A suitable IDE (e.g., Visual Studio, VS Code, JetBrains Rider)

---

## Backend Setup (.NET)

The backend consists of several API projects and class libraries structured using Domain-Driven Design principles.

### 1. Restore Packages and Build

Navigate to the backend directory and restore the NuGet packages:

```bash
cd Backend
dotnet restore Nalashaa.WarehouseManagement.Platform.sln
```

Build the solution to ensure everything compiles correctly:

```bash
dotnet build Nalashaa.WarehouseManagement.Platform.sln
```

### 2. Database Configuration

*(Instructions for Entity Framework Core migrations or database setup would go here. E.g., configuring `appsettings.json` connection strings and running `dotnet ef database update`)*

### 3. Running the APIs

You can run the different API projects individually or configure your IDE to run them simultaneously.

For example, to run the Platform API:

```bash
cd Nalashaa.WarehouseManagement.Platform.Api
dotnet run
```

The API will typically be accessible at `https://localhost:<port>` or `http://localhost:<port>`. Check the specific `launchSettings.json` in the API project for the exact URLs and ports.

---

## Frontend Setup (React + Vite)

The frontend is a modern single-page application built with React, Vite, and Tailwind CSS.

### 1. Install Dependencies

Navigate to the frontend project directory and install the required npm packages:

```bash
cd Frontend/Nalashaa.WarehouseManagement.Ui
npm install
```

### 2. Running the Development Server

Start the Vite development server:

```bash
npm run dev
```

The application will typically be accessible at `http://localhost:5173/`. Vite supports Hot Module Replacement (HMR), so changes to your code will reflect instantly in the browser.

### 3. Building for Production

To create an optimized production build:

```bash
npm run build
```

This will generate the static files in the `dist` directory, which can then be served by any static file server or integrated into a deployment pipeline.

### 4. Linting

To run ESLint and check for code quality issues:

```bash
npm run lint
```
