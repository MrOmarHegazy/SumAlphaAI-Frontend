# SumAlpha AI Front-End

## Overview

SumAlpha AI is a no-code platform that allows users to build algorithmic trading strategies, perform backtesting, and utilize AI to convert text into executable trading algorithms. The platform supports integration with various brokers for trading stocks, cryptocurrencies, and more.

This repository contains the front-end codebase for SumAlpha AI, built with modern web technologies to provide a seamless user experience.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Data Fetching**: [React Query](https://tanstack.com/query/latest)
- **Forms**: [Formik](https://formik.org/) and [Yup](https://github.com/jquense/yup)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Utility Library**: [Lodash](https://lodash.com/)
- **Linting**: [ESLint](https://eslint.org/)
- **Formatting**: [Prettier](https://prettier.io/)
- **Testing**: [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Design

- **Prototyping and Design Tool**: [Figma](https://www.figma.com/)

## Prerequisites

- **Node.js**: Version 18.x (use [NVM](https://github.com/nvm-sh/nvm) to manage Node.js versions)
- **npm**: Comes with Node.js
- **Git**: Version control system
- **Visual Studio Code (VSCode)**: Recommended code editor

## Getting Started

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/SumAlphaAI-frontend.git
   cd SumAlphaAI-frontend

   ```

2. **Setting Up Environment**

   a. Setting Up Node.js Env

   ```bash
   nvm install 18
   nvm use 18
   ```

   b. Install All Dependencies
   ```bash
   npm install
   ```

   c. Create an ".env.local" file in the project root
   ```bash
   touch .env.local
   ```

   d. Add Necessary Environment Variables in .env.local:
   ```bash
   NEXT_PUBLIC_API_URL=http://localhost:8000/api
   ```

4. **Recommended VS Code Extensions**

   - Install ESLint Extension
   - Install Prettier Extension
   - Install Tailwind CSS IntelliSense Extension
   - Install TypeScript Importer Extension
   - Install GitLens

## Useful Commands

- **Running the Development Server:**

````bash
npm run dev
````

- **Lint Code**
```bash
npm run lint
```

- **Run Tests**
```bash
npm run test
```

- **Build Code for Produciton**
```bash
npm run build
```

- **Start Production Server**
```bash
npm run start
```
