# WebMid Project

A React + TypeScript frontend application built for a university midterm project.  
The project demonstrates routing, authentication flow, layout separation, and state management.

---

## 🚀 Tech Stack

- React (Vite)
- TypeScript
- React Router DOM
- LocalStorage (fake authentication)
- Tailwind CSS (optional / partial usage)

---

## 🧠 Project Structure
src/
├── layouts/
│ ├── AuthLayout.tsx
│ └── MainLayout.tsx
│
├── pages/
│ ├── auth/
│ │ ├── Login.tsx
│ │ └── Signup.tsx
│ │
│ ├── dashboard/
│ ├── profile/
│ └── settings/
│
├── routes/
│ └── ProtectedRoute.tsx
│
├── services/
│ └── auth.service.ts
│
├── App.tsx
└── main.tsx


---

## 🔐 Authentication Flow

- Authentication is simulated using `localStorage`
- On login:
  - `auth = true` is stored in localStorage
- On logout:
  - auth is removed
- Protected routes block access if user is not authenticated

---

## 🧭 Routing System

The application uses React Router with nested layouts:

### Auth Layout
- `/login`
- `/signup`

### Main Layout (Protected)
- `/dashboard`
- `/profile`
- `/settings`

---

## 🛡️ Protected Routes

A `ProtectedRoute` component checks authentication status before allowing access to the main application pages. If not authenticated, the user is redirected to `/login`.

---

## 📊 Features

- Login / Signup pages (fake authentication)
- Route protection system
- Layout-based architecture
- Dashboard with interactive state example
- Profile and Settings pages
- Logout functionality

---

## ⚙️ How to Run

```bash
npm install
npm run dev
