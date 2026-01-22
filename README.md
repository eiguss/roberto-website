# Roberto Martínez Querol - Portfolio & CV

A premium, high-performance portfolio and curriculum vitae website built with Next.js 16, Tailwind CSS v4, and Framer Motion. This project is fully containerized and optimized for static deployment on Google Cloud Run.

## 🚀 Quick Start

Ensure you have **Docker**, **Docker Compose**, and **Make** installed.

### 1. Development Environment
Initialize the project and start the development server:

```bash
make up
make logs
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### 2. Update Content
All professional data, including experience, skills, and personal info, is managed in a central configuration file:
- File: `app/src/data/cv-data.ts`

Simply edit this file, and the changes will reflect instantly in the development server.

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript
- **Infrastructure**: Docker & Docker Compose
- **Runtime**: Node 22 (Bullseye)

## 📖 Available Commands (Makefile)

| Command | Description |
| :--- | :--- |
| `make up` | Start the development environment in detached mode. |
| `make down` | Stop and remove development containers. |
| `make build` | Rebuild the development Docker images. |
| `make logs` | View real-time logs from the application. |
| `make shell` | Open a bash terminal inside the running container. |
| `make install` | Install dependencies using pnpm inside Docker. |
| `make deploy` | Build and deploy the project to Google Cloud Run. |

## ☁️ Deployment

This project is configured for **Google Cloud Run** using a multi-stage Docker build that serves the static export through Nginx.

### Prerequisites
1. [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) installed.
2. Authenticated with `gcloud auth login`.
3. Project set with `gcloud config set project [PROJECT_ID]`.

### Deploy
```bash
make deploy
```

## 📄 Optimization
- **Static Export**: Uses `output: 'export'` for maximum performance.
- **Glassmorphism**: Premium UI effects with backdrop filters.
- **Print-Friendly**: Specialized CSS for "Print to PDF" with a dedicated button.
- **Dark Mode**: High-contrast dark theme for a modern professional look.

---

© 2026 Roberto Martínez Querol. All rights reserved.