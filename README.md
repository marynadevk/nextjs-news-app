# Next.js News App

## Overview
The **Next.js News App** is a simple web application built with Next.js and TypeScript. It utilizes SQLite as a database, managed through the `better-sqlite3` package, to store and retrieve news articles. The app features various functionalities such as fetching all news, getting specific news items by slug, and filtering news by year and month.

## Features
- **News Management:** Fetch all news, retrieve specific news items, and filter news by date.
- **SQLite Integration:** Efficient data handling using `better-sqlite3`.
- **Optimized for Performance:** Includes simulated delays to mimic real-world API calls.

## Getting Started

### Prerequisites

- Node.js v16 or higher
- npm or yarn
- A Cloudinary account for image uploads

### Installation

1. **Clone the repository:**

```sh
git clone <https://github.com/marynadevk/nextjs-news-app.git>
```
2. **Install dependencies for both frontend and backend:**
```sh
npm ci
```
3. **Create a .env.local file based on the provided .env.local.example**

4. **To start the development server, run:**
```sh
npm run dev
```

