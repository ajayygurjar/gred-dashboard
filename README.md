# GRED Admin Dashboard

An admin dashboard for a learning platform where instructors create courses and students enroll and complete them.

Live Demo: https://greddash.netlify.app

## Tech Stack

- React 19
- Vite
- Tailwind CSS v4
- Recharts
- React Router DOM
- Lucide React

## Pages

- Dashboard - overview stats, charts, recent enrollments
- Users - list of students and instructors with search, filter, pagination
- Courses - list of courses with search, filter by category, pagination

## Project Structure

```
src/
  components/
    Layout.jsx
    Sidebar.jsx
    StatCard.jsx
    EnrollmentChart.jsx
    CompletionChart.jsx
    RecentEnrollments.jsx
  pages/
    Dashboard.jsx
    Users.jsx
    Courses.jsx
  data/
    dummyData.jsx
```

## How to Run

```bash
npm install
npm run dev
```

## What I Prioritized

- Clean folder structure with components separated from pages
- Functional interactivity — search, filter, and pagination work on Users and Courses pages
- Readable mock data that reflects a real learning platform
- Consistent styling using Tailwind utility classes throughout