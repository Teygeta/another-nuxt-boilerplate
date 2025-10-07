# ⚡ Another Nuxt Boilerplate

**Yet another** essential and well-configured starter kit for your new Nuxt 4 applications.

This boilerplate is not an immediate production-ready SaaS product, but a solid, modern foundation to start building your web apps.

## ✨ Key Features

Built on Nuxt 4, this template includes configurations for:

| Area | Dependency/Tool | Description |
| :--- | :--- | :--- |
| **Backend/DB** | **Drizzle ORM** | A lightweight, TypeScript-first ORM for database management (using `pg` for PostgreSQL). |
| **Authentication** | **Better-Auth** | A modern authentication solution, pre-configured with Login and Registration pages. |
| **Styling/UI** | **Tailwind CSS** + **DaisyUI** | Utility-first CSS with a vast library of high-quality UI components for rapid styling. |
| **Code Quality** | **ESLint** (with `@antfu/eslint-config`) | Strict linting and formatting rules to keep the code clean and consistent. |

## 🚀 Prerequisites

* Node.js (version 18+)
* A running **PostgreSQL** database instance (required for Drizzle).

## 🛠️ Setup

1.  **Clone the repository:**
    ```bash
    npx giget@latest gh:teygeta/another-nuxt-boilerplate
    cd another-nuxt-boilerplate
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Configure the environment:**
    Create a **`.env`** file based on a potential `.env.example` and set up your PostgreSQL database connection string (e.g., `DATABASE_URL=...`).
4.  **Prepare the database:**
    Run the initial migrations (by first generating the schema and then applying it):
    ```bash
    npm run db:generate
    npm run db:push
    ```

## 🖥️ Available Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Starts the application in development mode with hot reload. |
| `npm run build` | Compiles the application for production. |
| `npm run preview` | Executes the compiled production server locally. |
| `npm run lint` | Runs code linting. |
| `npm run lint:fix` | Runs linting and attempts to automatically fix errors. |
| `npm run db:generate` | Generates Drizzle migrations based on your DB schema. |
| `npm run db:push` | Applies Drizzle schema changes to the database. |

## 🧩 UI Structure

The template only includes the basic structure to get started:

* An example **Navbar** with main links.
* Functional **Login** and **Registration** pages, managed by `better-auth`.
* Essential layout to demonstrate Tailwind/DaisyUI integration.

---

### Contributions

Feel free to fork, use, and contribute to this project!
