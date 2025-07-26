## World of Vision - E-Commerce Project

World of Vision is a full-featured e-commerce pet project showcasing modern web development practices. This platform specializes in eyewear products (glasses, sunglasses, contact lenses) with complete online shopping functionality.

## Tech Stack:

    Frontend: Next.js 14 (App Router) + Tailwind CSS + Zustand

    Backend: Spring Boot (Java) + PostgreSQL

    Deployment: Docker + Nginx

## Key Features
🛒 E-Commerce Functionality

    Product catalog with categories/filters

    Search with autocomplete

    Shopping cart & checkout flow

    Order history/tracking

    Customer reviews/ratings

🚀 Modern Tech Implementation

    Responsive design (mobile-first)

    Dark/light mode toggle

    Animations with Framer Motion

    Form handling with React Hook Form

    State management with Zustand

## Getting Started
Prerequisites

    Node.js 18+

    Java 17+

    MySQL 8.0+

    Docker (optional)

## Installation
Frontend (Next.js)

```bash
cd frontend

npm install
npm run dev
#or
yarn add .
yarn dev
```

Backend (Spring Boot)

```bash
cd backend
./mvnw spring-boot:run
```

## Project Structure

```bash
glasses_shop/
├── client/                 # Next.js application
│   ├── app/                # App router directory
│   ├── assets/             # Static image directory
│   ├── components/         # Reusable components
│   ├── lib/                # Utilities and helpers
│   ├── store/              # Zustand
│   └── ui/                 # UI - elements
│
├── backend/                # Spring Boot application
│   ├── src/main/java/      # Java source code
│   └── src/main/resources/ # Config files
│
├── docker-compose.yml      # Container configuration
└── README.md               # This file
```

## License

Distributed under the MIT License. See "LICENSE" for more information