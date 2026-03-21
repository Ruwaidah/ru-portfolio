import connectImg from "../assets/connect.png";
import scheduleImg from "../assets/schedule.png";
import booImg from "../assets/boo.png"

export const projects = [
  {
    id: "connect-app",
    image: connectImg,
    title: "Connect",
    tagline: "Real-time chat + profiles + media sharing",
    category: "Web App",
    stack: ["React", "Node", "Express", "Postgres", "Socket.io"],
    tags: ["Realtime", "Chat", "Auth"],
    year: 2026,
    status: "In progress",
    progress: 60,
    highlights: [
      "Real-time messaging with typing indicators",
      "User profiles + avatar uploads",
      "Secure auth + protected routes",
    ],
    problem:
      "Users needed a fast, modern way to message and share updates with strong privacy and authentication.",
    solution:
      "Built a real-time chat experience with Socket.io, user profiles, media uploads, and a clean responsive UI.",
    architecture: ["React UI", "Node/Express API", "Postgres", "Socket.io", "Cloudinary (media)"],
    links: {
      live: "https://message-app-ukya.onrender.com/",
      code: "https://github.com/Ruwaidah/connect-fe",
      githubFrontend: "https://github.com/Ruwaidah/connect-fe",
      githubBackend: "https://github.com/Ruwaidah/connect-be",
    },
    demoAccounts:
      [{
        email: "test1@gmail.com",
        password: 12345678
      }
        ,
      {
        email: "test2@gmail.com",
        password: 12345678
      },
      {
        email: "test3@gmail.com",
        password: 12345678
      }

      ]

  },
  {
    id: "Scheduling-app",
    image: scheduleImg,
    title: "Scheduling App",
    tagline: "Role-based weekly scheduling + time off & swap requests",
    category: "Internal Tool",
    stack: ["React (Vite)", "Tailwind", "Redux Toolkit", "Node/Express", "Knex", "PostgreSQL"],
    tags: ["RBAC", "Scheduling", "CRUD", "JWT", "Seeds"],
    year: 2026,

    status: "In progress",
    progress: 70,

    highlights: [
      "HR/Admin dashboard + Associate-only experience",
      "Weekly roster (Sat–Fri) with department filtering",
      "Schedule weeks automation: current + next 2 published, week 3 draft",
      "Shift create/edit rules (locked weeks, no past edits)",
      "Requests module: time off + shift swaps + dashboard summary",
      "Shift conflict detection (overlapping shifts) via backend endpoint",
      "Realistic seeded dataset (users/roles/depts/shifts/requests)"
    ],
    problem:
      "Store scheduling is complex: multiple roles, department assignments, weekly publishing rules, and frequent changes from time-off and shift-swap requests.",

    solution:
      "Built a scheduling tool with role-based access control, week-based schedule status enforcement, roster views by department, and request workflows. Includes seeded demo data so reviewers can log in and test realistic scenarios.",

    architecture: [
      "React UI (role-based routes + components)",
      "Redux Toolkit for auth/schedule/requests state",
      "Node/Express API with JWT auth middleware",
      "Postgres schema with schedule_weeks, shifts, requests tables",
      "Knex migrations + large seed scripts for realistic demo"
    ],

    demoAccounts: [
      { role: "HR", email: "hr1@company.com", password: "Password123!" },
      { role: "Team Lead", email: "lead1@company.com", password: "Password123!" },
      { role: "Associate", email: "associate1@company.com", password: "Password123!" }
    ],

    endpoints: [
      "GET /api/requests/summary",
      "GET /api/time-off",
      "GET /api/swaps",
      "GET /api/shifts/conflicts",
      "GET /api/shifts (weekly range)",
      "POST/PATCH/DELETE /api/shifts (manager-only)"
    ],

    roadmap: [
      "Approve/deny workflows for requests (manager actions)",
      "Audit log for schedule edits",
      "Notifications (email/in-app)",
      "Drag-and-drop shift editing in roster view"
    ],
    links: {
      live: "https://schedule-fe-jmpv.onrender.com",
      code: "https://github.com/Ruwaidah/schedule-fe",
      githubFrontend: "https://github.com/Ruwaidah/schedule-fe",
      githubBackend: "https://github.com/Ruwaidah/schedule-be",
    },
  },
  {
    id: "boo-pet-adoption-app",
    image: booImg,
    title: "BOO Pet Adoption App",
    tagline: "Modern pet discovery experience with favorites, filtering, and detailed pet profiles",
    category: "Web App",
    stack: ["React (Vite)", "Tailwind", "Redux Toolkit", "React Router", "Mock Data"],
    tags: ["Pet Adoption", "Filtering", "Favorites", "Responsive UI", "Redux"],
    year: 2026,

    status: "In progress",
    progress: 75,

    highlights: [
      "Modern landing page with pet-focused branding and CTA sections",
      "Browse pets page with responsive card grid layout",
      "Large mock dataset for realistic app browsing and filtering",
      "Dynamic pet details pages using route params",
      "Favorites feature powered by Redux Toolkit",
      "Category filtering for dogs and cats",
      "Custom 404 not found page for polished routing experience"
    ],
    problem:
      "Many pet adoption platforms feel outdated, cluttered, or difficult to browse. Users need a cleaner and more engaging way to explore pets, view details, and save favorites.",

    solution:
      "Built a modern pet adoption app concept with a polished landing page, searchable browsing experience, pet detail pages, and a favorites system. Used realistic mock data to simulate a real-world adoption platform while focusing on a strong portfolio-quality UI and frontend architecture.",

    architecture: [
      "React UI with reusable page sections and components",
      "Tailwind CSS for responsive styling and consistent design",
      "Redux Toolkit for favorites state management",
      "React Router for page navigation and dynamic pet detail routes",
      "Mock pet dataset structured for filtering, categories, and featured content"
    ],

    features: [
      "Home page with hero, category cards, and CTA sections",
      "Browse pets grid with category-based filtering",
      "Pet details page with dynamic route-based content",
      "Favorites system with persistent local browser storage",
      "Responsive layout optimized for desktop and mobile",
      "Custom 404 page for undefined routes"
    ],

    roadmap: [
      "Advanced filters by breed, age, size, and location",
      "Search bar for pet names and breeds",
      "Adoption inquiry form flow",
      "Featured pets section on the homepage",
      "Backend/API integration with real pet adoption data source"
    ],
    links: {
      live: "https://boo-fe.onrender.com/",
      code: "https://github.com/Ruwaidah/boo-fe",
      githubFrontend: "https://github.com/Ruwaidah/boo-fe",
    },
  }
];