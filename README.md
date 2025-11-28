ECE PORTFOLIO V2

A high-performance, industrial-themed portfolio website built for the modern hardware engineer.
Designed to showcase Embedded Systems, VLSI, and R&D projects with technical depth.

⚡ The Stack (Bleeding Edge)

This project runs on a custom configuration of the latest React ecosystem tools to support high-fidelity 3D rendering without compromising load times.

Framework: Next.js 15 (App Router)

Core: React 19 (Release Candidate)

Styling: Tailwind CSS v3 (Industrial Theme)

3D Engine: React Three Fiber v9 (Canvas + WebGL)

Animation: Framer Motion (Layout transitions)

Deployment: GitHub Actions (Static Export)

🚀 Getting Started

Prerequisites

Node.js v20+ (LTS recommended)

npm or pnpm

Installation

Clone the repository:

git clone [https://github.com/shstevelee/shstevelee.github.io.git](https://github.com/shstevelee/shstevelee.github.io.git)
cd yourusername.github.io

Install dependencies:
Note: This project uses specific versions of R3F and React 19 to ensure compatibility.

npm install

Run the development server:

npm run dev

Open http://localhost:3000 with your browser to see the result.

🛠️ Configuration

Project Data

All project data is decoupled from the UI. To add new projects, hackathons, or research papers, edit the data file:

Location: src/data/projects.ts

Supported Types: HARDWARE, SOFTWARE, R&D, CONFIDENTIAL

3D Scene

The background 3D element is a separate component that can be swapped out.

Location: src/components/Scene.tsx

Industrial Theme

Colors and fonts are controlled via Tailwind configuration and CSS variables.

Colors: Safety Yellow (#FFD028) & Industrial Black (#1A1A1A)

Font: Oswald (Google Fonts)

📦 Deployment

This project is configured for GitHub Pages.

Go to repository Settings > Pages.

Set Source to "GitHub Actions".

Push to the main branch.

The included workflow will automatically build and deploy the static site.

Engineered by Seunghyeok Lee.
